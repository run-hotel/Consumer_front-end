<template>
  <div style="padding-left: 10px">
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <div style="margin: 10px 0">
      <el-input
        v-model="search"
        placeholder="请输入关键字"
        style="width: 20%"
        clearable
      ></el-input>
      <el-button type="primary" style="margin-left: 5px" @click="load"
        >查询</el-button
      >
    </div>
    <el-table :data="tableData" stripe style="width: calc(100vw - 220px)">
      <el-table-column prop="id" label="ID" sortable> </el-table-column>
      <el-table-column prop="username" label="用户名"> </el-table-column>
      <el-table-column prop="nickName" label="昵称"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm
            title="确定删除吗?"
            @confirm="handleDelete(scope.row.id)"
          >
            <template #reference>
              <el-button
                size="mini"
                type="danger"
                style="position: absolute; left: 83px"
                >删除</el-button
              >
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px 0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="current_Page"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[5, 10, 15, total]"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>

      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <el-form :model="form" label-width="100px">
          <el-form-item style="width: 80%" label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item style="width: 80%" label="昵称">
            <el-input v-model="form.nickName"></el-input>
          </el-form-item>
          <el-form-item style="width: 80%" label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item style="width: 80%" label="性别">
            <el-radio v-model="form.sex" label="男">男</el-radio>
            <el-radio v-model="form.sex" label="女">女</el-radio>
            <el-radio v-model="form.sex" label="未知">未知</el-radio>
          </el-form-item>
          <el-form-item style="width: 80%" label="地址">
            <el-input type="textarea" v-model="form.address"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { userInfo } from "os";

export default {
  name: "HomeView",
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
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      request
        .get("/user", {
          params: {
            pageNum: this.current_Page,
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
    add() {
      this.dialogVisible = true;
      this.form = {};
    },
    save() {
      if (this.form.id) {
        //更新
        request.put("/user", this.form).then((res) => {
          console.log(res);
          if (res.code === "0") {
            this.$message({
              type: "success",
              message: "更新成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
          this.load(); //刷新表格
          this.dialogVisible = false; //关闭弹窗
        });
      } else {
        //新增
        request.post("/user", this.form).then((res) => {
          console.log(res);
          if (res.code === "0") {
            this.$message({
              type: "success",
              message: "新增成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
          this.load(); //刷新表格
          this.dialogVisible = false; //关闭弹窗
        });
      }
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row));
      this.dialogVisible = true;
    },
    handleDelete(id) {
      console.log(id);
      request.delete("/user/" + id).then((res) => {
        if (res.code === "0") {
          this.$message({
            type: "success",
            message: "删除成功",
          });
        } else {
          this.$message({
            type: "error",
            message: res.msg,
          });
        }
        this.load(); //刷新表格
      });
    },
    handleSizeChange(pageSize) {
      //改变当前每页的个数触发
      this.pageSize = pageSize;
      this.load();
    },
    handleCurrentChange(pageNum) {
      //改变当前页码触发
      this.current_Page = pageNum;
      this.load();
    },
  },
};
</script>
