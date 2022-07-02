<template>
  <div class="AllWrapper">
    <div class="RoomWrapper">
      <img style="padding-right: 40px" src="@/img/line.svg" alt="line" />
      <div class="roomDescriptionWrapper">
        <div class="roomTitle">{{ roomType ? roomType : "价格详细" }}</div>
        <div class="aboutRoom">
          {{ description }}
        </div>
      </div>
      <el-carousel style="width: 650px" height="450px">
        <el-carousel-item
          v-for="img in images"
          :key="img"
          style="border-radius: 20px"
        >
          <el-image
            :fit="fit"
            :src="img"
            alt="images"
            :preview-src-list="images"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  props: ["description", "roomType", "images"],
};
</script>

<style scoped>
.AllWrapper {
  padding: 30px;
}
.viewer:hover {
  transform: scale(0.9);
}
.RoomWrapper {
  display: grid;
  grid-template-columns: 30px 400px 720px;
  align-items: center;
  justify-items: center;
  gap: 100px;
}
.roomDescriptionWrapper {
  display: grid;
  grid-template-rows: repeat(2, auto);
}
.roomTitle {
  font-family: "Fenix";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 67px;
  letter-spacing: 0.02em;

  color: #14274a;
}
.aboutRoom {
  width: 400px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  color: #14274a;
}
</style>
