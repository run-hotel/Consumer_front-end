<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/hotelhome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>办理住房</el-breadcrumb-item>
      <el-breadcrumb-item>查看订单</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->

    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入订单号" v-model="search" clearable>
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="load"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>
      <div style="margin: 10px 0">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="orderno" label="订单号" width="90">
          </el-table-column>
          <el-table-column prop="customerphone" label="用户账号" width="120">
          </el-table-column>
          <el-table-column prop="roomtypename" label="房间类型" width="100">
          </el-table-column>
          <el-table-column prop="inttime" label="入住时间" width="100">
          </el-table-column>
          <el-table-column prop="outtime" label="退房时间" width="110">
          </el-table-column>
          <el-table-column prop="orderstatus" label="订单状态" width="100">
            <template slot-scope="orderstatusscope">
              <span v-if="orderstatusscope.row.orderstatus == 0">已分配</span>
              <span v-if="orderstatusscope.row.orderstatus == 1">未分配</span>
              <span v-if="orderstatusscope.row.orderstatus == 2"
                >订单已完成</span
              >
            </template>
            <!-- :formatter="panduan"// -->
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <!-- 办理入住的按钮状态 只有订单状态为 1，才能办理入住-->
              <el-button
                v-if="scope.row.orderstatus == 1"
                size="mini"
                round
                type="primary"
                @click="HandelOrder(scope.row.orderno, scope.row.roomtypename)"
              >
                办理入住
              </el-button>
              <!-- 办理退房的按钮状态 只有订单状态为 0，才能办理退房-->
              <el-button
                size="mini"
                round
                type="primary"
                v-if="scope.row.orderstatus == 0"
                @click="cancelOrder(scope.row.orderno)"
              >
                办理退房
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <div style="margin: 10px 0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 办理入住的弹窗 -->
    <div>
      <el-dialog title="办理入住" :visible.sync="dialogVisible" width="50%">
        <el-form :model="form" label-width="120px">
          <el-form-item label="订单号">
            <el-input
              v-model="form.orderno"
              style="width: 80px"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="处理人">
            <el-input
              v-model="form.hotelstaffno"
              style="width: 80px"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="房间号">
            <el-select v-model="form.roomno" placeholder="请选择房间">
              <el-option
                v-for="item in roomList"
                :key="item.roomno"
                :label="item.roomno"
                :value="item.roomno"
              >
              </el-option>
            </el-select>
            <!-- <el-input v-model="form.roomno" style="width: 80px"></el-input> -->
          </el-form-item>
          <el-form-item label="处理时间">
            <el-date-picker v-model="form.handeldate" type="date" disabled>
            </el-date-picker>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 办理退房的弹窗 -->
    <div>
      <el-dialog
        title="办理退房"
        :visible.sync="canceldialogVisible"
        width="30%"
      >
        亲爱的管理员您确定办理退房吗？
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel1">取 消</el-button>
          <el-button type="primary" @click="save1">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      roomList: [],
      searchroomtypename: "",
      bianliang: "",
      search: "",
      total: 0,
      currentPage: 1,
      pageSize: 5,
      tableData: [],
      form: { orderno: "", hotelstaffno: "", roomno: "", handeldate: "" },
      dialogVisible: false,
      canceldialogVisible: false,
    };
  },
  created() {
    this.load();
  },
  mounted() {
    let that = this;
    that.getdatatime();
  },
  methods: {
    getdatatime() {
      //默认显示今天
      this.form.handeldate = new Date();
      console.log(this.form.handeldate);
    },
    load() {
      request
        .get("/roomorder/allorder", {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            search: this.search,
          },
        })
        .then((res) => {
          //console.log(res);
          //console.log(res.data.records.orderstatus);
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
    cancelOrder(id) {
      console.log(id);
      this.bianliang = id;
      this.canceldialogVisible = true;
    },
    cancel() {
      this.dialogVisible = false;
      //清空房间号
      this.form.roomno = "";
    },
    cancel1() {
      this.canceldialogVisible = false;
    },
    //改变当前页，实现查询
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.load();
    },
    handleCurrentChange(pageNum) {
      this.currentPage = pageNum;
      this.load();
    },
    //对话框-->通过订单号来查询当前信息
    HandelOrder(id, roomtypename) {
      //获取当前所选房间类型
      this.searchroomtypename = roomtypename;
      console.log(this.searchroomtypename);
      //利用所选房间类型查找该房间剩余房间
      request
        .get("/room/selectRemainingRooms", {
          params: {
            roomtypename: this.searchroomtypename,
          },
        })
        .then((res) => {
          console.log(res);
          this.roomList = res.data;
          console.log(this.roomList);
          if (res.data.length === 0) {
            this.$message.error("房间数量不足");
          }
        });
      //将处理人和订单号写死
      this.form.orderno = id;
      this.form.hotelstaffno = sessionStorage.getItem("ms_hotelstaffno");
      //this.from.handeldate = new Date();
      ///console.log(sessionStorage.getItem("ms_hotelstaffno"));
      this.dialogVisible = true;
    },
    //办理入住
    save() {
      console.log(this.form);
      //插入处理订单表中
      request.post("/handel", this.form).then((res) => {
        console.log(res);
        if (res.code === "0") {
          this.$message.success("办理入住成功");
        } else {
          this.$message.error("办理入住失败");
        }
      });
      this.form = {};
      this.dialogVisible = false;
      //this.roomList = [];
      this.form.roomno = "";
      this.load();
    },
    //办理退房
    save1() {
      //console.log(this.bianliang + "1212121212");
      request
        .get("/handel/selectroomno", {
          params: {
            orderno: this.bianliang,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.code === "0") {
            this.$message.success("办理退房成功");
          } else {
            this.$message.error("办理退房失败");
          }
        });
      this.bianliang = "";
      this.canceldialogVisible = false;
      this.load();
    },
  },
};
</script>

<style scoped></style>
