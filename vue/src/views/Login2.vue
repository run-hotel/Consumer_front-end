<template>
  <div
    style="
      width: 100%;
      height: 100vh;
      background-color: darkslateblue;
      overflow: hidden;
    "
  >
    <div style="width: 400px; margin: 100px auto">
      <div
        style="
          color: #bbb lack;
          font-size: 30px;
          text-align: center;
          padding: 30px 0;
        "
      >
        欢迎登录
      </div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="customerphone">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="form.customerphone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="customerpassword">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="form.customerpassword"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="width: 100%; font-size: 20px"
            type="primary"
            @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "Login",
  data() {
    return {
      form: {},
      rules: {
        customerphone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
        customerpassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          request.post("/customer/login", this.form).then((res) => {
            if (res.code === "0") {
              this.$message({
                type: "success",
                message: "登录成功",
              });
              sessionStorage.setItem("customerphone", this.form.customerphone);
              console.log(this.form.customerphone);
              //sessionStorage.setItem("ms_username", ret.data.username);
              this.$router.push("/"); //登录成功后跳转页面
            } else {
              this.$message({
                type: "error",
                message: res.msg,
              });
            }
          });
        }
      });
    },
  },
};
</script>

<style></style>
