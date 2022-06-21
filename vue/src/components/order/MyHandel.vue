<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/hotelhome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>销售详情</el-breadcrumb-item>
      <el-breadcrumb-item>查看我处理过的订单</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <div style="margin: 10px 0">
        <el-table :data="MyHandeltableData" style="width: 100%" border>
          <el-table-column prop="orderno" label="订单号" width="90">
          </el-table-column>
          <el-table-column prop="customerphone" label="手机号" width="120">
          </el-table-column>
          <el-table-column prop="inttime" label="入住时间" width="120">
          </el-table-column>
          <el-table-column prop="outtime" label="结束时间" width="120">
          </el-table-column>
          <el-table-column prop="roomtypename" label="类型" width="90">
          </el-table-column>
          <el-table-column prop="roomno" label="房间号" width="90">
          </el-table-column>
          <el-table-column prop="orderstatus" label="订单状态">
            <template slot-scope="orderstatusscope">
              <span v-if="orderstatusscope.row.orderstatus == 0">已分配</span>
              <span v-if="orderstatusscope.row.orderstatus == 1">未分配</span>
              <span v-if="orderstatusscope.row.orderstatus == 2"
                >订单已完成</span
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      myhandelForm: { hotelstaffno: "" },
      MyHandeltableData: [],
    };
  },
  created() {
    this.loadMyHandel();
  },
  methods: {
    loadMyHandel() {
      this.myhandelForm.hotelstaffno =
        sessionStorage.getItem("ms_hotelstaffno");
      console.log(this.myhandelForm.hotelstaffno);
      request
        .get("/handel/selectMyHandel", {
          params: {
            hotelstaffno: this.myhandelForm.hotelstaffno,
          },
        })
        .then((res) => {
          console.log(res);
          this.MyHandeltableData = res.data;
        });
    },
  },
};
</script>

<style></style>
