<template>
  <div>
    <el-menu
      style="width: 200px; min-height: calc(100vh + 90px)"
      default-active="user"
      :default-openeds="['1']"
      class="el-menu-vertical-demo"
    >
      <el-submenu index="1">
        <template slot="title">个人中心</template>
        <el-menu-item index="user" @click.native="$router.push('/personalInfo')"
          >个人信息</el-menu-item
        >
        <el-menu-item index="user" @click.native="$router.push('/myOrder')"
          >我的订单</el-menu-item
        >
      </el-submenu>
      <el-submenu index="2">
        <span slot="title">酒店服务</span>
        <el-menu-item index="user" @click.native="$router.push('/hotel')"
          >房间详情</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
};
</script>

<style scoped></style>
