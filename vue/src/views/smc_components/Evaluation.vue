<template>
  <div style="padding-left: 10px">
    <el-table :data="tableData" stripe style="width: calc(100vw - 220px)">
      <el-table-column prop="orderno" label="ID" sortable> </el-table-column>

      <el-table-column prop="customerphone" label="手机号"> </el-table-column>
      <el-table-column prop="inttime" label="入住时间"> </el-table-column>
      <el-table-column prop="outtime" label="退房时间"> </el-table-column>
      <el-table-column prop="roomtypename" label="房间类型"> </el-table-column>
      <el-table-column prop="orderstatus" label="入住状态">
        <template slot-scope="orderstatusscope">
          <span v-if="orderstatusscope.row.outtime >= new Date()">已退房</span>
          <span v-else>入住中</span>
        </template>
      </el-table-column>
      <el-table-column prop="orderstatus" label="用户评价">
        <template slot-scope="orderstatusscope">
          <el-button
            size="mini"
            round
            type="primary"
            v-if="orderstatusscope.row.outtime != new Date()"
            @click="
              passData(
                orderstatusscope.row.roomtypename,
                orderstatusscope.row.inttime
              )
            "
            >点击评价</el-button
          >
          <el-button size="mini" plain type="info" disabled v-else
            >入住中,退房后才能评价</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
      title="用户评价"
      :visible.sync="drawer"
      :before-close="handleClose"
      size="50%"
    >
      <el-form ref="form" :model="evalution" label-width="80px">
        <el-steps
          :space="300"
          :active="2"
          finish-status="success"
          style="padding: 50px"
        >
          <el-step title="线上支付"></el-step>
          <el-step title="办理入住"></el-step>
          <el-step title="退房评价"></el-step>
        </el-steps>
        <el-form-item label="房间类型">
          <el-input
            disabled
            size="medium"
            v-model="evalution.roomType"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item label="入住时间">
          <el-input
            disabled
            size="medium"
            v-model="evalution.inittime"
            style="width: 200px"
          ></el-input>
        </el-form-item>
        <el-form-item label="入住评价">
          <el-input
            size="medium"
            v-model="evalution.description"
            type="textarea"
            placeholder="请输入内容"
            :autosize="{ minRows: 8 }"
            style="width: 600px"
          ></el-input>
        </el-form-item>
        <el-form-item label="评分等级">
          <el-rate
            v-model="evalution.value"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
          >
          </el-rate>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布评论</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import request from "@/utils/request";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      drawer: false,
      form: {},
      dialogVisible: false,
      search: "",
      current_Page: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      evalution: {
        roomType: "",
        inittime: "",
        description: "",
        value: null,
      },
      customerphone: sessionStorage.getItem("customerphone"),
      customerid: "",
      isEvaluated: false,
    };
  },
  created() {
    this.load();
  },
  methods: {
    onSubmit() {
      if (this.evalution.roomType === "单人房") this.evalution.roomType = 1;
      else if (this.evalution.roomType === "豪华套房")
        this.evalution.roomType = 2;
      else if (this.evalution.roomType === "总统房")
        this.evalution.roomType = 3;
      else if (this.evalution.roomType === "双人房")
        this.evalution.roomType = 4;
      else if (this.evalution.roomType === "情侣房")
        this.evalution.roomType = 5;
      else if (this.evalution.roomType === "商务大床房")
        this.evalution.roomType = 6;
      else if (this.evalution.roomType === "豪华大床房")
        this.evalution.roomType = 7;
      else this.evalution.roomType = 8;
      axios
        .get("http://localhost:8090/comment/insert", {
          params: {
            id: this.customerid,
            typeId: this.evalution.roomType,
            content: this.evalution.description,
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
    passData(roomType, inttime) {
      this.drawer = true;
      this.evalution.roomType = roomType;
      this.evalution.inittime = inttime;
    },
    handleClose(done) {
      this.$confirm("确认关闭？关闭后数据会消失")
        .then((_) => {
          this.evalution.roomType = "";
          this.evalution.inittime = "";
          this.evalution.description = "";
          this.evalution.value = null;
          done();
        })
        .catch((_) => {});
    },
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
      request
        .get("/customer/selectcustomer", {
          params: {
            customerphone: this.customerphone,
          },
        })
        .then((res) => {
          this.customerid = res.data.customerid;
          axios
            .get(`http://localhost:8090/comment/get/${res.data.customerid}`)
            .then((res) => {
              console.log(res);
            });
        });
    },
  },
};
</script>
<style scoped></style>
