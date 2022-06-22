<template>
  <div
    style="
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      display: flex;
    "
  >
    <div
      style="
        width: 200px;
        padding-left: 30px;
        font-weight: bold;
        color: dodgerblue;
      "
    >
      一家酒店
    </div>
    <div style="flex: 1"></div>
    <div>
      <el-link
        href="login"
        style="text-decoration: none; color: black; font-size: 15px"
        >登录</el-link
      >
    </div>
    <div style="flex: 0.05"></div>
    <div>
      <el-link
        href="register"
        style="text-decoration: none; color: black; font-size: 15px"
        >注册</el-link
      >
    </div>
    <div style="flex: 0.05"></div>

    <div>
      <span
        style="text-decoration: none; color: black; font-size: 15px"
        @click="out"
        >退出系统</span
      >
    </div>
    <div style="flex: -0.5"></div>
    <div style="width: 30px"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {},
  methods: {
    out() {
      //el-link href="login"
      this.$router.push({
        path: "/login",
      });
      sessionStorage.clear();
    },
  },
};
</script>

<style scoped></style>
