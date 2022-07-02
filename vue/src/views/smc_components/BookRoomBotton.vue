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
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="PlaceOrder">确 定</el-button>
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
    };
  },
  mounted() {
    this.loadRoomType();
  },
  methods: {
    loadRoomType() {
      console.log(this.$props);
      axios.get("http://localhost:8090/op/room-type").then((res) => {
        console.log(res.data.data);
        this.RoomTypeData = res.data.data;
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
        console.log("=======xiadan in======");
        if (res.code === "0") {
        } else {
          this.$message({
            type: "error",
            message: res.msg,
          });
        }
      });
      axios
        .get("http://localhost:8090/alipay/pay", {
          params: { num: this.$props.price, name: this.$props.roomType },
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
