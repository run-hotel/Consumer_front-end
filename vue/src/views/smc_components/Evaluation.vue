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
          <span v-if="orderstatusscope.row.outtime < '2022-07-03'">已退房</span>
          <span v-else>入住中</span>
        </template>
      </el-table-column>
      <el-table-column prop="orderstatus" label="用户评价">
        <template slot-scope="orderstatusscope">
          <el-button
            size="mini"
            round
            type="primary"
            v-if="
              orderstatusscope.row.outtime <= '2022-07-03' &&
              !checkIsEvaluated(orderstatusscope.row.orderno)
            "
            @click="
              passData(
                orderstatusscope.row.roomtypename,
                orderstatusscope.row.inttime,
                orderstatusscope.row.orderno
              )
            "
            >点击评价</el-button
          >
          <el-button
            size="mini"
            round
            type="success"
            v-else-if="checkIsEvaluated(orderstatusscope.row.orderno)"
            @click="
              showEvaluation(
                orderstatusscope.row.roomtypename,
                orderstatusscope.row.inttime,
                orderstatusscope.row.orderno
              )
            "
            >点击查看
          </el-button>
          <el-button size="mini" plain type="info" disabled v-else
            >入住中,退房后才能评价</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-drawer title="用户评价" :visible.sync="drawer" size="50%">
      <el-form ref="form" :model="evalution" label-width="80px">
        <el-steps
          :space="300"
          :active="this.isEvaluated ? 3 : 2"
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
            v-if="!this.isEvaluated"
            v-model="evalution.description"
            type="textarea"
            placeholder="请输入内容"
            :autosize="{ minRows: 8 }"
            style="width: 600px"
          ></el-input>
          <el-input
            size="medium"
            v-else
            disabled
            v-model="evalution.description"
            type="textarea"
            :autosize="{ minRows: 8 }"
            style="width: 600px"
          ></el-input>
        </el-form-item>
        <el-form-item label="评分等级">
          <el-rate
            v-model="evalution.value"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            v-if="!this.isEvaluated"
          >
          </el-rate>
          <el-rate
            v-model="defaultValue"
            v-else
            disabled
            show-score
            text-color="#ff9900"
          >
          </el-rate>
        </el-form-item>
        <el-form-item v-if="!this.isEvaluated">
          <el-button type="primary" @click="onSubmit()">发布评论</el-button>
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
        id: 0,
        value: null,
      },
      customerphone: sessionStorage.getItem("customerphone"),
      customerid: 1,
      isEvaluated: false,
      gettedevalutions: [],
      defaultValue: 4,
      updataID: 0,
      showOK: false,
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
      console.log(
        "===update===",
        typeof parseInt(this.customerid),
        this.evalution.description
      );
      axios
        .get("http://localhost:8090/comment/update", {
          params: {
            id: this.updataID,
            content: this.evalution.description,
          },
        })
        .then((res) => {
          console.log("===comment===", res);
        });
      this.$message({
        showClose: true,
        message: "发布成功",
        type: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    passData(roomType, inttime, id) {
      this.drawer = true;
      this.evalution.roomType = roomType;
      this.evalution.inittime = inttime;
      this.updataID = id;
      this.showOK = true;
      this.evalution.description = "";
      this.isEvaluated = false;
    },
    showEvaluation(roomType, inttime, id) {
      this.evalution.roomType = roomType;
      this.evalution.inittime = inttime;
      console.log("===tableData===", this.tableData);
      axios.get("http://localhost:8090/comment/getAlll").then((res) => {
        const AllData = res.data.data;
        AllData.forEach((data) => {
          if (data.id == this.evalution.id) {
            this.evalution.description = data.content;
            if (this.evalution.description == this.customerid)
              this.evalution.description = "";
            console.log(
              "===description===",
              this.evalution.description,
              data.content
            );
          }
        });
      });
      this.evalution.id = id;
      this.isEvaluated = true;
      this.drawer = true;
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
          this.tableData = res.data;
          this.total = res.data.length;
          console.log("===tableData===", this.tableData);
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
              console.log("===gettedevalutions===", res.data.data);
              this.gettedevalutions = res.data.data;
            });
        });
    },
    checkIsEvaluated(userId) {
      var f = 1;
      const length = this.gettedevalutions.length;
      const evaluation = this.gettedevalutions;
      for (var i = 0; i < length; i++) {
        if (evaluation[i].id == userId) {
          // alert(evaluation[i].content);
          if (
            evaluation[i].content == null ||
            evaluation[i].content == this.customerid ||
            evaluation[i].content == ""
          ) {
            f = 0;
          }
        }
      }
      console.log(f);
      return f;
    },
  },
};
</script>
<style scoped></style>
