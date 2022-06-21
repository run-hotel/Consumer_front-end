<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/hotelhome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>房间状态</el-breadcrumb-item>
      <el-breadcrumb-item>查看房间状态</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入房间标号" v-model="search" clearable>
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
          <el-table-column prop="roomno" label="房间标号" width="120">
          </el-table-column>
          <el-table-column
            prop="roomtypeno"
            label="房间类型"
            width="120"
            :formatter="panduanleixing"
          >
          </el-table-column>
          <el-table-column prop="roomfloor" label="房间朝向" width="120">
          </el-table-column>
          <el-table-column
            prop="roomstatus"
            label="房间状态"
            width="120"
            :formatter="panduanStates"
          >
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope1">
              <el-button
                size="mini"
                round
                type="primary"
                @click="changeRS(scope1.row.roomno)"
                v-if="scope1.row.roomstatus == 1"
              >
                修改状态
              </el-button>
              <el-button
                size="mini"
                round
                type="primary"
                @click="changeRS(scope1.row.roomno)"
                v-if="scope1.row.roomstatus == 2"
              >
                修改状态
              </el-button>
              <el-button
                size="mini"
                round
                type="primary"
                icon="el-icon-search"
                @click="searchRoomPeople(scope1.row.roomno)"
              >
                房间曾住人
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
    <!-- 修改房间状态的弹窗 -->
    <div>
      <el-dialog title="修改状态" :visible.sync="dialogVisible" width="30%">
        <el-form :model="form" label-width="70px">
          <el-form-item label="房间状态">
            <el-select v-model="form.status1" placeholder="请选择房间状态">
              <el-option label="空闲" value="空闲"></el-option>
              <el-option label="维修" value="维修"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        请管理员谨慎修改房间状态，避免没有余房
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="changeStatus">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 查看房间曾住人的弹窗 -->
    <div>
      <el-dialog title="房间曾住人" :visible.sync="dialogVisible1" width="50%">
        <el-table :data="roomPeopledata" style="width: 100%" border>
          <el-table-column prop="customerphone" label="用户号码" width="120">
          </el-table-column>
          <el-table-column prop="inttime" label="入住时间" width="120">
          </el-table-column>
          <el-table-column prop="outtime" label="结束时间" width="120">
          </el-table-column>
          <el-table-column prop="orderno" label="订单编号" width="120">
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
      </el-dialog>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      form: { roomno: "", status1: "" },
      dialogVisible1: false,
      dialogVisible: false,
      search: "",
      total: 50,
      currentPage: 1,
      pageSize: 5,
      tableData: [],
      roomPeopledata: [],
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      console.log(this.search);
      request
        .get("/room/allroom", {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            search: this.search,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
    changeRS(status1) {
      this.form.roomno = status1;
      console.log(this.form.roomno);
      this.dialogVisible = true;
      //this.form = {};
    },
    searchRoomPeople(roomno) {
      this.form.roomno = roomno;
      request
        .get("/roomorder/roomforpeople", {
          params: {
            Roomno: this.form.roomno,
          },
        })
        .then((res) => {
          console.log(res);
          this.roomPeopledata = res.data;
        });
      this.dialogVisible1 = true;
    },
    changeStatus() {
      //改变房间状态
      console.log(this.form.status1);

      request
        .get("/room/updateRoomStatus", {
          params: {
            search: this.form.roomno,
            status: this.form.status1,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.code === "0") {
            this.$message.success("修改房间状态成功");
          } else {
            this.$message.error("修改房间状态失败");
          }
        });

      this.dialogVisible = false;
      this.form = {};
      this.load();
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
    //第二种做法
    panduanStates(row) {
      if (row.roomstatus === 1) {
        return "空闲";
      } else if (row.roomstatus === 2) {
        return "维修";
      } else {
        return "居住";
      }
    },
    panduanleixing(row) {
      if (row.roomtypeno === "001") {
        return "单人房";
      } else if (row.roomtypeno === "002") {
        return "双人房";
      } else if (row.roomtypeno === "003") {
        return "大床房";
      } else {
        return "豪华房";
      }
    },
  },
};
</script>

<style scoped></style>
