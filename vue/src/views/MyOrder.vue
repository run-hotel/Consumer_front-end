<template>
  <div style="padding-left: 10px">
    <el-table :data="tableData" stripe style="width: calc(100vw - 220px)">
      <el-table-column prop="orderno" label="ID" sortable> </el-table-column>

      <el-table-column prop="customerphone" label="手机号"> </el-table-column>
      <el-table-column prop="inttime" label="入住时间"> </el-table-column>
      <el-table-column prop="outtime" label="退房时间"> </el-table-column>
      <el-table-column prop="roomtypename" label="房间类型"> </el-table-column>
      <el-table-column prop="orderstatus" label="订单状态">
        <template slot-scope="orderstatusscope">
          <span v-if="orderstatusscope.row.orderstatus == 0">已分配</span>
          <span v-if="orderstatusscope.row.orderstatus == 1">未分配</span>
          <span v-if="orderstatusscope.row.orderstatus == 2">订单已完成</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  components: {},
  data() {
    return {
      form: {},
      dialogVisible: false,
      search: "",
      current_Page: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      customerphone: sessionStorage.getItem("customerphone"),
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      request
        .get("/roomorder/selectorder", {
          params: {
            // search:this.search,
            customerphone: this.customerphone,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data;
          this.total = res.data.length;
        });
    },
  },
};
</script>
