<template>
  <div id="ToTal">
    <div class="Wrapper">
      <LiveInCard />
      <img
        class="buttomImage"
        src="@/img/waves/livestream-wave6.svg"
        alt="bottomimg"
      />
    </div>
    <BackButton
      style="position: absolute; right: 1%; bottom: 2%; z-index: 10000"
    />
    <ShotBottom style="right: 4%; top: 50%" />
  </div>
</template>

<script>
import LiveInCard from "./LiveInCard.vue";
import BackButton from "./BackButton.vue";
import ShotBottom from "./ShotBottom.vue";
export default {
  components: {
    LiveInCard,
    BackButton,
    ShotBottom,
  },
};
</script>

<style scoped>
#Total {
  display: relative;
}
.Wrapper {
  overflow: hidden;
  width: 100%;
  height: 800px;
  max-height: 1000px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
}
.buttomImage {
  width: 100%;
  position: absolute;
  bottom: 0%;
}
</style>
