<template></template>

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
<style scoped></style>
