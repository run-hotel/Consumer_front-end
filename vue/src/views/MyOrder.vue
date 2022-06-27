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
    <div v-if="showCard" class="Wrapper">
      <el-link href="/certificate" :underline="false">
        <div class="ContentErapper">
          <img src="@/img/King.svg" alt="King" />
          <div class="Text">查看证书</div>
        </div>
      </el-link>
    </div>
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
      showCard: false,
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
          this.tableData.forEach((element) => {
            if (element.orderstatus == "0") this.showCard = true;
          });
        });
    },
  },
};
</script>
<style scoped>
* {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.Wrapper {
  margin-top: 2%;
  cursor: pointer;
  width: 140px;
  padding: 10px;
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 30px;
}
.Wrapper:hover {
  transform: scale(1.1);
}
.ContentErapper {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  align-items: center;
  gap: 20px;
}
</style>
