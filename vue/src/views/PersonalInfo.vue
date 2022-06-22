<template>
  <el-card style="width: 500px">
    <el-form label-width="80px" size="small">
      <el-form-item label="用户名">
        <el-input v-model="form.customername"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="form.customerid"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.customerphone" disabled></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.customersex" size="medium">
          <el-radio border label="1"></el-radio>
          <el-radio border label="0"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="update">确 定</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "Person",
  data() {
    return {
      form: { customerphone: sessionStorage.getItem("customerphone") },
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      console.log(this.form.customerphone);
      request
        .get("/customer/selectcustomer", {
          params: {
            customerphone: this.form.customerphone,
          },
        })
        .then((res) => {
          console.log(res);
          this.form = res.data;
          console.log(this.form);
        });
    },
    update() {
      console.log(this.form);
      request
        .get("/customer/updatecustomer", {
          params: {
            customersex: this.form.customersex,
            customername: this.form.customername,
            customerid: this.form.customerid,
            customerphone: this.form.customerphone,
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.avatar-uploader {
  text-align: center;
  padding-bottom: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 138px;
  height: 138px;
  line-height: 138px;
  text-align: center;
}
.avatar {
  width: 138px;
  height: 138px;
  display: block;
}
</style>
