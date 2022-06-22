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
        欢迎注册
      </div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="customerphone">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="form.customerphone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="form.customerpassword"
            show-password
          ></el-input>
        </el-form-item>
        <div id="Wrapper">
          <el-checkbox v-model="checked">我已同意 </el-checkbox>
          <el-link href="privacy" :underline="false" type="warning"
            >隐私协议
          </el-link>
        </div>
        <el-form-item>
          <el-button
            style="width: 100%; font-size: 20px; margin-top: 20px"
            type="primary"
            @click="register"
            >注册</el-button
          >
        </el-form-item>
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
#Wrapper {
  display: grid;
  grid-template-columns: 80px 60px;
}
</style>
