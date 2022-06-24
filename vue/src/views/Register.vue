<template>
  <div class="flex-col page">
    <div class="flex-col items-center section_1">
      <img
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/6274b8cb3051170011fb085d/16529638214180901831.png"
        class="image"
      />
      <div class="flex-row section_2">
        <el-link
          href="/"
          :underline="false"
          class="flex-col items-center section_3 bottom"
        >
          <div class="flex-row group">
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266504e5a7e3f03106ffb8e/6274b8cb3051170011fb085d/16525173532537933514.png"
              class="image_1"
            />
            <span class="text text_1">首页</span>
          </div>
        </el-link>
        <router-link to="/" class="flex-row group_1 bottom">
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266504e5a7e3f03106ffb8e/6274b8cb3051170011fb085d/16525173519589616246.png"
            class="image_1"
          />
          <span class="text text_2">预定酒店</span>
        </router-link>
        <div class="flex-row group_2 bottom">
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266504e5a7e3f03106ffb8e/6274b8cb3051170011fb085d/16527133342684748614.png"
            class="image_4"
          />
          <span class="text text_4">新闻公告</span>
        </div>
        <div class="flex-row group_11 bottom">
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266504e5a7e3f03106ffb8e/6274b8cb3051170011fb085d/16525173524698910076.png"
            class="image_1"
          />
          <span class="text text_15">个人信息</span>
        </div>
      </div>
    </div>
    <img
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/6274b8cb3051170011fb085d/16529638214187371209.png"
      class="image_6"
    />
    <img
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/6274b8cb3051170011fb085d/16529638214187277200.png"
      class="image_7"
    />
    <div class="section_4"><!--*--></div>
    <img
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/6274b8cb3051170011fb085d/16529638214189469699.png"
      class="image_8"
    />
    <div class="justify-between section_5">
      <img src="../img/Cover.svg" class="flex-col group_3 view-gokJcyw9" />
      <el-form ref="form" :model="form" :rules="rules" class="flex-col group_4">
        <span class="text_6">注册用户</span>
        <div class="flex-col items-start group_5">
          <span class="text_7">让所有热爱生活的人</span>
          <span class="text_8">安享艾迪花园理想之国 。</span>
        </div>
        <div class="flex-col group_6">
          <el-form-item prop="customerphone">
            <div class="flex-row items-center section_8">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/6274b8cb3051170011fb085d/16529306943396518005.png"
                class="image_11"
              />
              <el-input
                class="flex-row group_7 view_3"
                v-model="form.customerphone"
                placeholder="手机号"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="password">
            <div class="flex-col group_6">
              <div class="flex-row items-center section_8">
                <img
                  src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/6274b8cb3051170011fb085d/16529306943399257711.png"
                  class="image_11"
                />
                <el-input
                  class="flex-row group_7 view_3"
                  v-model="form.customerpassword"
                  show-password
                  placeholder="密码"
                ></el-input>
              </div>
            </div>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button
            class="flex-col items-center text-wrapper view-lpqp2X1q"
            type="primary"
            @click="register"
            ><span class="text_11">注册</span></el-button
          >
        </el-form-item>
        <span class="text_12" style="cursor: default"
          >注册用户即代表您同意
          <el-link href="privacy" :underline="false" class="inlineText"
            >隐私政策</el-link
          >
          和
          <el-link href="privacy" :underline="false" class="inlineText"
            >安全协议</el-link
          >
        </span>
        <div class="flex-col group_8">
          <div class="divider"><!--*--></div>
          <div class="group_9">
            <span class="text_13">已经有一个账户?</span>
            <el-link
              href="login"
              :underline="false"
              class="text_14 text-BG2F1jhg"
              >点击登录</el-link
            >
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "Register",
  data() {
    var checkMobile = (rule, value, callback) => {
      const regMobile =
        /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        //合法的手机号
        return callback();
      }
      //手机号不合法
      callback(new Error("请输入合法的手机号！"));
    };
    return {
      checked: false,
      form: {},
      rules: {
        customerphone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
        customerpassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    register() {
      // if(this.form.password !== this.form.confirm)
      // {
      //     this.$message({
      //         type:"error",
      //         message:'两次输入的密码不一致哦'
      //     })
      //     return
      // }

      this.$refs["form"].validate((valid) => {
        if (valid) {
          console.log(this.form);
          request.post("/customer/register", this.form).then((res) => {
            if (res.code === "0") {
              this.$message({
                type: "success",
                message: "注册成功",
              });
              this.$router.push("/login"); //登录成功后跳转页面
            } else {
              this.$message({
                type: "error",
                message: "注册失败，账号已存在",
              });
            }
          });
        }
      });
    },
  },
};
</script>
<style scoped>
html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 900px;
}

* {
  box-sizing: border-box;
  flex-shrink: 0;
  border: none;
}
a {
  text-decoration: none;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
  justify-content: start;
}

.items-end {
  display: flex;
  align-items: flex-end;
}

input:focus {
  border: none;
  background-image: linear-gradient(
    180deg,
    rgba(98, 106, 149, 0.4) 0%,
    rgba(181, 186, 213, 0.25) 100%
  );
  filter: hue-rotate(10deg) brightness(150%) saturate(120%);
}

button {
  border: none;
  background-color: transparent;
  outline: none;
}
input {
  outline: none;
  font-weight: bold;
}
.image_1 {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}
.text {
  font-family: "Courier New", Courier, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}
.section_8 {
  margin-left: -40px;
  width: 400px;
  background-image: linear-gradient(
    180deg,
    rgba(98, 106, 149, 0.4) 0%,
    rgba(181, 186, 213, 0.25) 100%
  );
  border-radius: 30px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  overflow: hidden;
  border: solid 1px rgba(255, 255, 255, 0.3);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.section_8:hover {
  filter: drop-shadow(0px 30px 30px rgba(0, 0, 0, 0.25));
  transform: translateX(30px) scale(1.1);
}
.image_11 {
  margin-left: 10px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.image_11:hover {
  filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  transform: scale(1.2) rotate(360deg);
}
.page {
  padding-bottom: 100px;
  background-color: rgb(242, 246, 255);
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  height: 1000px;
  position: relative;
}
.section_1 {
  padding-top: 310px;
  background-image: linear-gradient(
    180deg,
    rgb(52, 53, 99) 0%,
    rgb(73, 38, 173) 100%
  );
  position: relative;
}
.image_6 {
  mix-blend-mode: OVERLAY;
  width: 1530px;
  height: 533px;
  position: absolute;
  left: -30.64px;
  right: -59.36px;
  bottom: -232px;
}
.image_7 {
  mix-blend-mode: OVERLAY;
  width: 1522px;
  height: 407px;
  position: absolute;
  left: -55px;
  right: -27px;
  bottom: -33px;
}
.section_4 {
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  width: 1440px;
  height: 400px;
  position: absolute;
  left: 0;
  right: 0;
  top: 400px;
}
.image_8 {
  width: 1522px;
  height: 376px;
  position: absolute;
  left: -23px;
  right: -59px;
  bottom: -174px;
}
.section_5 {
  padding: 19px 19px;
  background-color: rgba(50, 61, 109, 0.5);
  border-radius: 20px;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  width: 960px;
  position: absolute;
  top: 175px;
  left: 50%;
  transform: translateX(-50%);
  border: solid 1px rgba(255, 255, 255, 0.3);
}
.image {
  mix-blend-mode: OVERLAY;
  width: 1440px;
  height: 510px;
}
.section_2 {
  padding: 30px 30px 326px;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.section_3 {
  padding: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  width: 120px;
  height: 44px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.group_1 {
  margin-left: 50px;
  align-self: center;
  overflow: hidden;
  width: 120px;
  height: 44px;
  justify-content: center;
  align-items: center;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.group_2 {
  margin-left: 59.53px;
  padding: 3.4px 1.4px 3.4px;
  align-self: center;
  overflow: hidden;
  width: 120px;
  height: 44px;
  justify-content: center;
  align-items: center;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.section_6 {
  background-image: linear-gradient(
    200.4deg,
    rgb(67, 21, 218) 17%,
    rgb(144, 118, 230) 98.5%
  );
  border-radius: 10px;
  width: 360px;
  border: solid 1px rgba(255, 255, 255, 0.3);
  position: relative;
}
.text-wrapper {
  margin-top: 30px;
  padding: 14.97px 0 13.03px;
  background-image: linear-gradient(
    91.4deg,
    rgb(47, 184, 255) 0%,
    rgb(157, 235, 217) 100%
  );
  border-radius: 6px;
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  overflow: hidden;
  width: 320px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.group {
  overflow: hidden;
  width: 64.8px;
  justify-content: center;
  align-items: center;
}
.text_2 {
  margin-left: 10.47px;
  align-self: center;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-family: ABeeZee;
  line-height: 13.9px;
}
.image_4 {
  flex-shrink: 0;
  width: 21.2px;
  height: 17.2px;
}
.image_9 {
  width: 360px;
  height: 570px;
}
.image_10 {
  width: 359px;
  height: 269px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.section_7 {
  background-image: linear-gradient(
    167.3deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  border-radius: 10px;
  mix-blend-mode: OVERLAY;
  width: 360px;
  height: 570px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  border: solid 1px rgba(255, 255, 255, 0.3);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.text_1 {
  margin-left: 10.8px;
  align-self: center;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-family: ABeeZee;
  line-height: 13.89px;
}
.group_3 {
  filter: drop-shadow(0px 30px 30px rgba(0, 0, 0, 0.25));
  width: 360px;
  height: 570px;
  transition: 10s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.group_4 {
  margin-right: 110px;
  margin-top: 46.8px;
  width: 320px;
}
.group_11 {
  margin-left: 48.19px;
  align-self: center;
  overflow: hidden;
  width: 120px;
  height: 44px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  justify-content: center;
  align-items: center;
}
.text_6 {
  margin-left: 1.08px;
  align-self: flex-start;
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 700;
  line-height: 38.16px;
}
.group_5 {
  margin-top: 34.54px;
}
.group_6 {
  margin-top: 27.66px;
}
.text_12 {
  margin-top: 32.02px;
  align-self: flex-start;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-family: SF Pro Text;
  line-height: 12.12px;
}
.group_8 {
  margin-top: 32.98px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.text_4 {
  margin: 1px 0 3.2px 11.81px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-family: ABeeZee;
  line-height: 13.94px;
}
.text_15 {
  margin-left: 10.26px;
  align-self: center;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-family: ABeeZee;
  line-height: 13.96px;
}
.text_7 {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  font-family: SF Pro Text;
  line-height: 23px;
}
.text_8 {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  font-family: SF Pro Text;
  line-height: 23px;
}
.view_4 {
  margin-top: 19px;
}
.text_11 {
  color: rgb(14, 67, 92);
  font-size: 17px;
  font-family: SF Pro Text;
  font-weight: 600;
  line-height: 16.48px;
}
.divider {
  margin-right: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  height: 0.5px;
}
.group_9 {
  margin-left: 1.21px;
  margin-top: 17.96px;
  align-self: flex-start;
  line-height: 12px;
}
.group_7 {
  margin-left: 10px;
}
.view_3 {
  border: none;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  font-size: 15px;
  color: white;
  border-radius: 6px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.view_5 {
  overflow: hidden;
  width: 94px;
}
.text_13 {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-family: SF Pro Text;
  line-height: 12.1px;
}
.text_14 {
  color: rgb(0, 207, 253);
  font-size: 13px;
  font-family: SF Pro Text;
  font-weight: 600;
  line-height: 12.26px;
  display: inline-block;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.text_9 {
  margin-left: 17.7px;
  flex-shrink: 0;
  align-self: center;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-family: SF Pro Text;
  line-height: 11.32px;
  width: 600px;
}
.text_10 {
  margin-left: 17.2px;
  margin-top: 12.93px;
  flex-shrink: 0;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-family: SF Pro Text;
  line-height: 5.41px;
  align-self: center;
}
.bottom:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
}
.view-gokJcyw9:hover {
  transform: scale(1.4);
  cursor: pointer;
}
.view-lpqp2X1q:hover {
  filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  cursor: pointer;
  border-radius: 30px;
}
.text-BG2F1jhg:hover {
  transform: translate(5px, -5px) scale(1.2);
  cursor: pointer;
}

.inlineText {
  color: aliceblue;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.inlineText:hover {
  cursor: pointer;
  color: #00cffd;
  background: rgba(50, 61, 109, 0.5);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
}
</style>
