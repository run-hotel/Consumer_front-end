<template>
  <div>
    <div class="title1">
      <span class="txt1">订房必读</span>
      <span class="txt2_1">
        1.根据酒店通知,防疫期间,所有客人需出示48小时内核酸检测报告,
        请在下单前与酒店确认接待政策,以免影响您<br />&nbsp;&nbsp;&nbsp;的入住。
        (提示有效期2022/03/17至2022/06/18)</span
      >
      <span class="txt2_2">2.该价格仅适用于持大陆身份证的中国籍客人</span>

      <span class="txt2_3">3.该房型允许携带儿童入住。</span>

      <span class="txt3">· 赞! 已享机票钻石价房费优惠85折</span>
      <span class="txt4">· 好赞! 你挑到了本店最划算的房间</span>
    </div>

    <el-form class="title2" :model="form">
      <div class="block">
        <span class="demonstration1">入住日期</span>
        <el-form-item>
          <el-date-picker
            v-model="form.inttime"
            type="date"
            placeholder="选择日期"
            class="dateP1"
          >
          </el-date-picker
        ></el-form-item>
      </div>

      <div class="block">
        <span class="demonstration2">退房日期</span>
        <el-form-item>
          <el-date-picker
            v-model="form.outtime"
            type="date"
            placeholder="选择日期"
            class="dateP2"
          >
          </el-date-picker
        ></el-form-item>
      </div>

      <span class="txt5">住客资料</span>
      <span class="txt6">姓名与证件保持一致</span>
      <span class="txt7">住客姓名</span>
      <el-form-item>
        <input
          type="text"
          class="txt8"
          placeholder="请输入内容"
          v-model="form.username"
        />
      </el-form-item>

      <el-form-item class="txt9" label="电话号码">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="form.customerphone"
          disabled
        />
      </el-form-item>

      <el-form-item class="orderno" label="订单号">
        <el-input
          type="text"
          class="orderno1"
          placeholder="请输入内容"
          v-model="form.orderno"
          style="width: 200px"
        />
      </el-form-item>

      <el-form-item class="roomtype" label="房间类型">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="form.roomtypename"
          style="width: 200px"
        />
      </el-form-item>

      <span class="txt13">在线支付</span>
      <el-form v-model="form.payPrice" class="txt14">￥899</el-form>
    </el-form>

    <div class="title3">
      <el-button class="pay" @click="order">去支付</el-button>
    </div>

    <div class="title4">
      <span class="txt15">应付总额</span>
      <span class="txt16">￥{{ form.payPrice }}</span>
      <span class="txt17">不可取消</span>
      <span class="txt18">
        订单预订成功后不可取消修改。 若未入住或取消修改将收取您首晚房费RMB103
        (如用优惠券则以券后支付价为准)。 订单需等酒店或供应商确认后生效,
        订单确认结果以携程短信、邮件或app通知为准,
        如订单不确认将全额退款至您的付款账户。
      </span>
      <span class="txt19">说明</span>
      <span class="txt20">
        预订服务由一家酒店国际旅行社有限公司及其分公司提供、
        住宿服务由酒店提供，交易款项由商家委托 一家酒店旗下子公司统一收取。
      </span>

      <span class="txt21">一站式售后保障</span>
      <span class="txt22">
        客人在一家酒店预订并支付确认后, 一家酒店将提供一站式售后服务保障。
        客人可通过APP、网站、电话,提出各类业务的取消、
        修改等需求，并由一家酒店协助客人完成。
      </span>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import App from "@/App.vue";
export default {
  name: "Order",
  data() {
    return {
      form: {
        customerphone: sessionStorage.getItem("customerphone"),
        orderstatus: 1,
      },
    };
  },
  components: {},
  methods: {
    order() {
      this.form.customerphone = sessionStorage.getItem("customerphone");
      console.log(this.form);
      request.post("/roomorder/insertOrder", this.form);
    },
  },
};
</script>

<style>
.title1 {
  position: absolute;
  margin: 10px 10px;
  width: 710px;
  height: 100px;
}
.title2 {
  position: absolute;
  margin: 200px 210px;
  width: 800px;
  height: 100px;
}
.title3 {
  position: absolute;
  margin: 200px 220px;
  width: 800px;
  height: 100px;
}
.title4 {
  position: absolute;
  margin: 10px 1030px;
  width: 300px;
  height: 100px;
}
.txt1 {
  font-weight: bold;
}
.txt2_1 {
  position: absolute;
  margin: 26px -65px;
}

.txt2_2 {
  position: absolute;
  margin: 70px -65px;
}
.txt2_3 {
  position: absolute;
  margin: 94px -65px;
}
.txt3 {
  position: absolute;
  margin: 150px -65px;
  color: orangered;
}
.txt4 {
  position: absolute;
  margin: 180px -65px;
  color: orangered;
}
.block {
  position: absolute;
  margin: 100px -100px;
}
.dateP1 {
  border-bottom: 0.5px solid gray;
  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  width: 100px;
  height: 40px;
  margin: 0px -100px;
}

.dateP2 {
  border-bottom: 0.5px solid gray;
  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  width: 100px;
  height: 40px;
  margin: 0px 150px;
}

.demonstration1 {
  position: absolute;
  margin: -20px -100px;
}
.demonstration2 {
  position: absolute;
  margin: -20px 113px;
  width: 100px;
}
.txt5 {
  position: absolute;
  margin: 195px -200px;
  font-size: large;
  font-weight: bold;
}
.txt6 {
  position: absolute;
  margin: 203px -120px;
  font-size: small;
  color: rgb(152, 146, 146);
}
.txt7 {
  position: absolute;
  margin: 270px -200px;
}
.txt8 {
  position: absolute;
  margin: 305px -200px;
  border-bottom: 0.5px solid gray;
  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  width: 352px;
  font-size: 15px;
  font-weight: bold;
}
.txt9 {
  position: absolute;
  margin: 370px -200px;
}
.txt10 {
  position: absolute;
  margin: 405px -200px;
  border-bottom: 0.5px solid gray;
  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  width: 352px;
  font-size: 15px;
  font-weight: bold;
}

.txt11_1 {
  position: absolute;
  margin: 470px -200px;
  font-size: large;
  font-weight: bold;
}
.txt11_2 {
  position: absolute;
  margin: 475px -120px;
  color: rgb(164, 160, 160);
  font-size: 14px;
}
.txt12 {
  position: absolute;
  margin: 515px -200px;
}
.txt13 {
  position: absolute;
  margin: 600px -200px;
}

.orderno {
  position: absolute;
  margin: 500px -200px;
  font-size: 25px;
  font-weight: bold;
}

.roomtype {
  position: absolute;
  margin: 500px 50px;
  color: blue;
  font-size: 25px;
  font-weight: bold;
}
.txt14 {
  position: absolute;
  margin: 592px -135px;
  color: blue;
  font-size: 25px;
  font-weight: bold;
}
.pay {
  position: absolute;
  margin: 572px 460px;
  background-color: orangered;
  color: aliceblue;
  font-size: 20px;
  font-weight: bold;
}
.txt15 {
  margin: -2.5px -160px;
  position: absolute;
  font-size: 25px;
  font-weight: bold;
}
.txt16 {
  margin: -2.5px 15px;
  position: absolute;
  font-size: 25px;
  font-weight: bold;
  color: blue;
}
.txt17 {
  margin: 102.5px -160px;
  position: absolute;
  font-size: 17px;
  font-weight: bold;
  color: rgb(115, 169, 115);
}
.txt18 {
  margin: 128px -160px;
  position: absolute;
  font-size: 15px;
  color: grey;
  width: 250px;
}
.txt19 {
  margin: 310px -160px;
  position: absolute;
  font-size: 17px;
  font-weight: bold;
  color: rgb(1, 1, 1);
}

.txt20 {
  margin: 335px -160px;
  position: absolute;
  font-size: 15px;
  color: grey;
  width: 250px;
}
.txt21 {
  margin: 435px -160px;
  position: absolute;
  font-size: 17px;
  font-weight: bold;
  color: rgb(156, 156, 247);
  width: 250px;
}
.txt22 {
  margin: 458px -160px;
  position: absolute;
  font-size: 15px;
  color: grey;
  width: 250px;
}
</style>
