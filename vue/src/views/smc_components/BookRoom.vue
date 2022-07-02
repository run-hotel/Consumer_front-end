<template>
  <div class="Wrapper">
    <div class="ContentWrapper">
      <div class="welcome">欢迎预定</div>
      <div class="roomType">{{ roomType }}</div>
      <div class="hotelname">艾迪花园</div>
      <div class="description">
        <span>预订住宿，享受奢华</span><br /><span
          >以最实惠的价格重新定义。</span
        >
      </div>
      <BookRoomBotton
        :roomType="roomType"
        :price="price"
        style="margin-left: 44.5%; margin-top: 12%"
        ref=""
      />
      <img
        class="explore"
        src="@/img/explore.svg"
        alt="explore"
        style="
          position: absolute;
          transform: rotate(-90deg) scale(0.6);
          left: 50%;
          bottom: 3%;
        "
        @click="goDown"
      />
    </div>
    <div class="BottomWrapper" ref="showOut">
      <BookRoomDescription
        :description="description"
        :roomType="roomType"
        :images="images"
      />
      <BookRoomPrice :price="price" />
    </div>
    <BackButton style="margin-left: 44%; margin-bottom: 60px" />
  </div>
</template>

<script>
import BookRoomBotton from "./BookRoomBotton.vue";
import BookRoomDescription from "./BookRoomDescription.vue";
import BookRoomPrice from "./BookRoomPrice.vue";
import BackButton from "./BackButton.vue";
export default {
  data() {
    return {
      roomType: "",
      price: "",
      description: "",
      images: [],
    };
  },
  created() {
    this.roomType = this.$route.query.roomType;
    this.price = this.$route.query.price;
    this.description = this.$route.query.description;
    this.images = this.$route.query.images;
    console.log(this.roomType, this.price, this.description);
  },
  components: {
    BookRoomBotton,
    BookRoomDescription,
    BackButton,
    BookRoomPrice,
  },
  methods: {
    goDown() {
      this.$refs.showOut.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
* {
  border: none;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.explore {
  cursor: pointer;
}
.explore:hover {
  transform: scale(0.6) !important;
  filter: hue-rotate(10deg) brightness(150%) saturate(120%);
}
.Wrapper {
  background-image: url("@/img/for-text/back.png");
  background-repeat: no-repeat;
}
.ContentWrapper {
  display: grid;
  grid-template-rows: repeat(4, 100px);
  justify-items: start;
  align-items: center;
  background: rgba(20, 39, 74, 0.25);
  height: 1080px;
  padding: 300px 100px;
  position: relative;
}
.welcome {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 49px;

  color: #ffffff;
}
.roomType {
  font-family: "Fenix";
  font-style: normal;
  font-weight: 400;
  font-size: 96px;
  line-height: 107px;
  letter-spacing: 0.07em;

  color: #e0b973;
}
.hotelname {
  font-family: "Fenix";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0.4em;

  color: #e0b973;
}
.description {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: #ffffff;
}
.BottomWrapper {
  display: grid;
  grid-template-rows: auto auto;
  justify-items: start;
  align-items: center;
}
</style>
