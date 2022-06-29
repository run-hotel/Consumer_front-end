<template>
  <div>
    <div style="margin: 10px 0">
      <el-table :data="RoomTypeData" style="width: 100%" border>
        <el-table-column prop="roomtypeno" label="房间类型标号" width="120">
        </el-table-column>
        <el-table-column prop="roomtypename" label="房间类型" width="120">
        </el-table-column>
        <el-table-column prop="roomnumber" label="房间余量" width="120">
        </el-table-column>
        <el-table-column prop="roomprice" label="房间价格" width="120">
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="orderscope">
            <el-button
              size="mini"
              round
              type="primary"
              @click="
                order(orderscope.row.roomtypename, orderscope.row.roomprice)
              "
              v-if="orderscope.row.roomnumber <= 0"
              disabled
            >
              下单
            </el-button>
            <el-button
              size="mini"
              round
              type="primary"
              @click="
                order(orderscope.row.roomtypename, orderscope.row.roomprice)
              "
              v-else
            >
              下单
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div>
      <el-dialog title="用户下单" :visible.sync="dialogVisible" width="25%">
        <el-form :model="OrderForm" label-width="70px">
          <el-form-item label="手机号">
            <el-input
              type="text"
              placeholder="请输入手机号"
              v-model="OrderForm.customerphone"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="房间类型">
            <el-input
              type="text"
              placeholder="请输入房间类型"
              v-model="OrderForm.roomtypename"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="房间价格">
            <el-input
              type="text"
              placeholder="请输入价格"
              v-model="roomprice"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="订单号">
            <el-input
              type="text"
              v-model="OrderForm.orderno"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="入住时间">
            <el-date-picker type="date" v-model="OrderForm.inttime">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="退房时间">
            <el-date-picker type="date" v-model="OrderForm.outtime">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="PlaceOrder">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import axios from "axios";
export default {
  data() {
    return {
      i: 0,
      dialogVisible: false,
      RoomTypeForm: { roomtypeno: "", price: 0.0 },
      RoomTypeData: [],
      OrderForm: {
        orderno: "",
        customerphone: "",
        inttime: "",
        outtime: "",
        roomtypename: "",
        orderstatus: 1,
      },
      roomprice: "",
    };
  },
  created() {
    this.loadRoomType();
  },
  methods: {
    loadRoomType() {
      request.get("/roomtype/allroomtype").then((res) => {
        console.log(res);
        this.RoomTypeData = res.data;
      });
    },
    order(roomtypename, roomprice) {
      if (this.RoomTypeData.roomnumber <= 0) {
        this.$message({
          type: "error",
          message: "房间数量不足了",
        });
      } else {
        this.OrderForm.roomtypename = roomtypename;
        this.roomprice = roomprice;
        this.OrderForm.customerphone = sessionStorage.getItem("customerphone");

        if (this.OrderForm.customerphone === null) {
          this.dialogVisible = false;
          this.$message({
            type: "error",
            message: "请您先登录",
          });
        } else {
          this.OrderForm.orderno = this.randomCoding();
          this.dialogVisible = true;
        }
      }
    },
    randomCoding() {
      //创建26个字母数组
      var arr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      var idvalue = "";
      const n = 10;
      for (var i = 0; i < n; i++) {
        idvalue += arr[Math.floor(Math.random() * 26)];
      }
      return idvalue;
    },
    PlaceOrder() {
      console.log(this.OrderForm);
      request.post("/roomorder/xiadan", this.OrderForm).then((res) => {
        if (res.code === "0") {
          this.$message({
            type: "success",
            message: "预定成功",
          });
        } else {
          this.$message({
            type: "error",
            message: res.msg,
          });
        }
        console.log(res);
      });
      axios.get("http://localhost:8090/alipay/pay", {}).then((res) => {
        //返回成功调用此方法
        //console.info(res);
        document.querySelector("body").innerHTML = res.data; //查找到当前页面的body，将后台返回的form替换掉他的内容
        document.forms[0].submit(); //执行submit表单提交，让页面重定向，跳转到支付宝页面
      });
    },
  },
};
</script>

<style></style>
