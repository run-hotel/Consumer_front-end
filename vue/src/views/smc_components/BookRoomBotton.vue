<template>
  <div>
    <div class="WrapperBotton" @click="order(roomType, price)">
      <div class="ContentWrapperBotton">
        <img src="@/img/likeHome.svg" alt="likeHome" />
        <div class="Book">预定</div>
      </div>
    </div>
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
          <el-input type="text" v-model="OrderForm.orderno" disabled></el-input>
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
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="PlaceOrder(OrderForm.roomtypename)"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import request from "@/utils/request";
import axios from "axios";
export default {
  props: ["roomType", "price"],
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
      evaluationNumber: 0,
      updataEvaluation: {
        userId: "",
        roomType: "",
        comment: "",
      },
    };
  },
  mounted() {
    this.loadRoomType();
  },
  methods: {
    loadRoomType() {
      axios.get("http://localhost:8090/op/room-type").then((res) => {
        console.log(res.data.data);
        this.RoomTypeData = res.data.data;
      });
      request
        .get("/customer/selectcustomer", {
          params: {
            customerphone: sessionStorage.getItem("customerphone"),
          },
        })
        .then((res) => {
          this.updataEvaluation.userId = res.data.customerid;
          // console.log(this.updataEvaluation.userId);
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
          this.OrderForm.orderno = this.getEvaluation();
          this.dialogVisible = true;
        }
      }
    },
    getEvaluation() {
      axios.get("http://localhost:8090/comment/getAlll").then((res) => {
        const evaluation = res.data.data;
        const length = evaluation.length;
        this.evaluationNumber = evaluation[length - 1].id + 1;
      });
      return this.evaluationNumber;
    },
    PlaceOrder(roomtypename) {
      console.log(roomtypename);
      if (roomtypename === "单人房") this.updataEvaluation.roomType = 1;
      else if (roomtypename === "豪华套房") this.updataEvaluation.roomType = 2;
      else if (roomtypename === "总统房") this.updataEvaluation.roomType = 3;
      else if (roomtypename === "双人房") this.updataEvaluation.roomType = 4;
      else if (roomtypename === "情侣房") this.updataEvaluation.roomType = 5;
      else if (roomtypename === "商务大床房")
        this.updataEvaluation.roomType = 6;
      else if (roomtypename === "豪华大床房")
        this.updataEvaluation.roomType = 7;
      else this.updataEvaluation.roomType = 8;
      axios
        .get("http://localhost:8090/comment/insert", {
          params: {
            id: this.updataEvaluation.userId,
            typeId: this.updataEvaluation.roomType,
            content: " ",
          },
        })
        .then((res) => {
          console.log(res);
        });
      console.log(this.updataEvaluation.roomType);
      request.post("/roomorder/xiadan", this.OrderForm).then((res) => {
        console.log("=======xiadan in======");
        if (res.code === "0") {
          this.$message({
            type: "success",
            message: "创建订单成功，正在前往支付宝",
          });
        } else {
          this.$message({
            type: "error",
            message: res.msg,
          });
        }
      });
      axios
        .get("http://localhost:8090/alipay/pay", {
          params: { num: this.roomprice, name: this.OrderForm.roomtypename },
        })
        .then((res) => {
          //返回成功调用此方法
          //console.info(res);
          document.querySelector("body").innerHTML = res.data; //查找到当前页面的body，将后台返回的form替换掉他的内容
          document.forms[0].submit(); //执行submit表单提交，让页面重定向，跳转到支付宝页面
        });
    },
  },
};
</script>

<style scoped>
.WrapperBotton {
  background: #14274a;
  border-radius: 10px;
  width: 200px;
  cursor: pointer;
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.WrapperBotton:hover {
  filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  transform: scale(1.1);
}
.ContentWrapperBotton {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  padding: 10px;
}
.Book {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 30px;
  color: #e0b973;
}
</style>
