<template>
  <div class="login-wrap">
    <div class="ms-title">酒店后台管理系统</div>
    <div class="ms-login">
      <el-form
        ref="loginRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="20px"
      >
        <el-form-item prop="hotelstaffno">
          <el-input
            v-model="loginForm.hotelstaffno"
            placeholder="员工账号"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="hotelstaffpassword">
          <el-input
            v-model="loginForm.hotelstaffpassword"
            placeholder="密码"
            prefix-icon="iconfont icon-3702mima"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="validate">
          <el-input
            class="validate-code"
            v-model="loginForm.validate"
            placeholder="验证码"
          ></el-input>
          <div class="code" @click="refreshCode">
            <s-identify :identifyCode="identifyCode"></s-identify>
          </div>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    var validateV = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.identifyCode) {
        callback(new Error("验证码输入错误"));
      } else {
        callback();
      }
    };
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      loginForm: {
        hotelstaffno: "",
        hotelstaffpassword: "",
        validate: "",
      },
      //验证合法性
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        hotelstaffno: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        hotelstaffpassword: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        validate: [{ validator: validateV, trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    //随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    //验证码
    makeCode(s, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += s[this.randomNum(0, s.length)];
      }
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    //重置
    resetLoginForm() {
      console.log(this);
      this.$refs.loginRef.resetFields();
    },
    //登录 --> 提交表单
    login() {
      this.$refs.loginRef.validate((valid) => {
        if (!valid) {
          return;
        } else {
          //前后端交互  async
          console.log("校验成功");
          request.post("/hotelstaff/HSlogin", this.loginForm).then((res) => {
            console.log(res);
            if (res.code === "0") {
              this.$message({
                type: "success",
                message: "登陆成功",
              });
              sessionStorage.setItem(
                "ms_hotelstaffno",
                this.loginForm.hotelstaffno
              );
              sessionStorage.setItem(
                "ms_hotelstaffpassword",
                this.loginForm.hotelstaffpassword
              );
              //sessionStorage.setItem("user_sex", this.loginForm);
              sessionStorage.setItem("login", 1);
              this.$router.push("/hotelhome"); //登陆成功后进行页面跳转，跳转到主页
            } else {
              this.$message({
                type: "error",
                message: res.msg,
              });
            }
          });
          // this.$router.push("");
          //const ret = await this.$http.post("/user/login",this.loginForm);
          //console.log(ret);
        }
      });
    },
  },
  components: {},
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  border-radius: 5px;
  height: 240px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  background: #fff;
}
.validate-code {
  width: 136px;
  float: left;
}
/* 验证码样式 */
.code {
  width: 112px;
  height: 35px;
  border: 1px solid #ccc;
  float: right;
  border-radius: 2px;
}
</style>
