<template>
  <div class="swiper">
    <swiper :optios="swiperOption">
      <swiper-slide>1</swiper-slide>
      <swiper-slide>2</swiper-slide>
      <swiper-slide>3</swiper-slide>
    </swiper>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "vue-awesome-swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { component } from "vue/types/umd";
export default {
  name: "Swiper",
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style></style>
