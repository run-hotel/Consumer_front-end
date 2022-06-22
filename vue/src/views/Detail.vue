<template>
  <div class="detail">
    <div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in swiperList" :key="index">
          <img :src="item.imgUrl" alt="" />
        </swiper-slide>
      </swiper>
      <el-button class="order" @click="orderRoom">立即预定</el-button>
      <div class="swiper-pagination"></div>
      <div class="txt">
        <span class="price">￥{{ price }}</span>
        <img class="picture" :src="imgName1" alt="" />
        <span class="txt1">24小时大堂经理 | 会议厅 | 桑拿浴室</span>
        <span class="txt2">4.8分</span><span class="txt5">很不错</span>
        <span class="txt3">沙滩很棒，前台热情</span>
        <span class="txt4"
          >一家酒店的品质一直感觉很不错，没定海景的是因为楼下是海，还有一个原因...</span
        >
      </div>

      <div class="pictureOfSwiper">
        <img class="picture2" :src="imgName2" alt="" />
        <img class="picture3" :src="imgName3" alt="" />
        <img class="picture4" :src="imgName4" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Detail",
  data() {
    return {
      price: 990,
      imgName1: require("../img/7.png"),
      imgName2: require("../img/2.png"),
      imgName3: require("../img/3.png"),
      imgName4: require("../img/4.png"),
      swiperOption: {
        autoplay: 300,
        speed: 100,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      swiperList: [
        {
          imgUrl: require("../img/2.png"),
        },
        {
          imgUrl: require("../img/3.png"),
        },
        {
          imgUrl: require("../img/4.png"),

          //price:321,
        },
      ],
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  methods: {
    orderRoom() {
      this.$router.push({
        path: "/order",
      });
    },
  },
};
</script>

<style scoped>
.swiper-container {
  margin: 290px 25px;
  width: 350px;
  height: 275px;
}

.swiper-container img {
  width: 350px;
  height: 275px;
}

.swiper-pagination {
  width: 710px;
  height: 170px;
  bottom: 0;
}

.order {
  /* bottom: 0; */
  background-color: blue;
  width: 90px;
  height: 35px;
  color: white;
  font-weight: bold;
  /* //position: fixed; */
  position: absolute;
  margin: -320px 1000px;
}
.txt {
  width: 400px;
  height: 200px;
  position: absolute;
  margin: -570px 800px;
}
.price {
  margin: 0px 235px;
  color: blue;
  font-size: 20px;
}
.txt1 {
  position: absolute;
  margin: 235px -230px;
}
.txt2 {
  position: absolute;
  margin: -5px -230px;
  width: 60px;
  height: 30px;
  background-color: rgb(106, 106, 207);
  text-align: center;
}
.txt5 {
  position: absolute;
  margin: 5px -165px;
  color: rgb(145, 89, 197);
  font-weight: bold;
}
.txt3 {
  position: absolute;
  margin: 35px -230px;
  color: rgb(24, 196, 44);
}
.txt4 {
  position: absolute;
  margin: 5px 98px;
  width: 200px;
  height: 100px;
}
.picture {
  position: absolute;
  margin: 80px -230px;
  width: 519px;
  height: 130px;
}
.pictureOfSwiper {
  width: 140px;
  height: 60px;
  position: absolute;
  margin: -570px 400px;
}
.picture2 {
  width: 140px;
  height: 80px;
  position: absolute;
  margin: 5px 0px;
}
.picture3 {
  width: 140px;
  height: 80px;
  position: absolute;
  margin: 100px 0px;
}
.picture4 {
  width: 140px;
  height: 80px;
  position: absolute;
  margin: 200px 0px;
}
</style>
