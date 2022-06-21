<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/hotelhome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>房间状态</el-breadcrumb-item>
      <el-breadcrumb-item>修改房间价格</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div style="margin: 10px 0">
        <el-table :data="RoomTypeData" style="width: 80%" border>
          <el-table-column prop="roomtypeno" label="房间类型标号" width="120">
          </el-table-column>
          <el-table-column prop="roomtypename" label="房间类型" width="120">
          </el-table-column>
          <el-table-column prop="roomnumber" label="房间余量" width="120">
          </el-table-column>
          <el-table-column prop="roomprice" label="房间价格" width="120">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="RoomTypescope">
              <el-button
                size="mini"
                round
                type="primary"
                @click="
                  changeRPrice(
                    RoomTypescope.row.roomtypeno,
                    RoomTypescope.row.roomprice
                  )
                "
              >
                修改房间价格
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <div>
      <el-dialog title="修改房间价格" :visible.sync="dialogVisible" width="30%">
        <el-form :model="RoomTypeForm" label-width="70px">
          <el-input-number
            size="small"
            placeholder="请输入浮点数"
            :controls="false"
            :precision="2"
            maxlength="9"
            v-model="RoomTypeForm.price"
          />
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="changeRoomPrice">确 定</el-button>
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
      dialogVisible: false,
      RoomTypeForm: { roomtypeno: "", price: 0.0 },
      RoomTypeData: [],
    };
  },
  created() {
    this.loadRoomType();
  },
  methods: {
    loadRoomType() {
      request.get("/roomtype/allroomtype").then((res) => {
        console.log(res);
        this.RoomTypeData = res.data;
      });
    },
    changeRPrice(roomtypeno, price) {
      this.RoomTypeForm.roomtypeno = roomtypeno;
      this.RoomTypeForm.price = price;
      //console.log(this.RoomTypeForm.roomtypeno);
      this.dialogVisible = true;
    },
    changeRoomPrice() {
      console.log(this.RoomTypeForm.roomtypeno);
      console.log(this.RoomTypeForm.price);
      //改变房间价格
      request
        .get("/roomtype/updateRoomPrice", {
          params: {
            roomPrice: this.RoomTypeForm.price,
            roomtypeno: this.RoomTypeForm.roomtypeno,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.code === "0") {
            this.$message.success("修改成功");
          } else {
            this.$message.error("修改失败");
          }
        });

      this.dialogVisible = false;
      this.RoomTypeForm = {};
      this.loadRoomType();
    },
  },
};
</script>

<style></style>
