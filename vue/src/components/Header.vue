<template>
  <div
    style="
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      display: flex;
    "
  >
    <el-link
      href="/"
      style="
        width: 200px;
        padding-left: 30px;
        font-weight: bold;
        color: dodgerblue;
      "
    >
      艾登花园酒店
    </el-link>
    <div style="flex: 1"></div>
    <div style="flex: 0.05"></div>
    <div>
      <el-link
        href="personalInfo"
        style="text-decoration: none; color: black; font-size: 15px"
        >个人信息</el-link
      >
    </div>
    <div style="flex: 0.05"></div>

    <div>
      <el-link
        @click="out"
        style="text-decoration: none; color: black; font-size: 15px"
        >退出系统</el-link
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
