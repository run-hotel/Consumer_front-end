<template>
  <div>
    <div v-if="this.haoRoom.roomnumber === 0">
      <el-button size="mini" round type="primary" disabled>预定 </el-button>
    </div>
    <div v-else>
      <el-button size="mini" round type="primary">预定 </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      haoRoom: { roomnumber: 1 },
    };
  },
};
</script>

<style></style>
