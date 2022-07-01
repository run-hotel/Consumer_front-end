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
      <viewer style="overflow: hidden; height: 500px; width: 1100px">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          style="transform: scale(0.8); border-radius: 20px"
          alt="textimg"
        />
      </viewer>
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
.RoomWrapper {
  display: grid;
  grid-template-columns: repeat(3, auto);
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
