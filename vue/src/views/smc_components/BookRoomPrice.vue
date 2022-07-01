<template>
  <div class="AllWrapper">
    <div class="RoomWrapper">
      <img style="padding-right: 40px" src="@/img/line.svg" alt="line" />
      <div class="roomDescriptionWrapper">
        <div class="roomTitle">价格详细</div>
        <div class="aboutRoom">
          普通用户在日常为 ￥{{
            price
          }}
          一晚，若处于节假日，由于房间缺少，需要调高价格约在￥{{
            Math.floor(price * 1.1)
          }}~{{
            Math.floor(price * 1.2)
          }}一晚，（具体情况视官方首页为准）热烈欢迎各位顾客的入住
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["price"],
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  color: #14274a;
  width: 1000px;
}
</style>
