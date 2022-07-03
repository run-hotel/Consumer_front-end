<template>
  <div class="Wrapper">
    <div class="ContentWrapper">
      <div class="welcome">欢迎预定</div>
      <div class="roomType">{{ roomType }}</div>
      <div class="hotelname">艾登花园</div>
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
          transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
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
    <div class="Evalution">
      <img style="margin-left: 40px" src="@/img/line.svg" alt="line" />
      <div class="EvalutionText">
        <div class="EvaluationTitle">用户评价</div>
        <el-carousel
          :interval="4000"
          type="card"
          height=" 600px;"
          style="padding-bottom: 100px; width: 1000px"
          trigger="click"
        >
          <el-carousel-item
            v-for="(evaluation, index) in this.evaluations"
            :key="index"
          >
            <div class="evaluationContent">
              <el-avatar src="https://joeschmoe.io/api/v1/random"></el-avatar>
              <div class="Context">用房Id:{{ evaluation.userId }}</div>
              <div class="Context">用房评论:{{ evaluation.content }}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <BackButton style="margin-left: 44%; margin-bottom: 60px" />
  </div>
</template>

<script>
import BookRoomBotton from "./BookRoomBotton.vue";
import BookRoomDescription from "./BookRoomDescription.vue";
import BookRoomPrice from "./BookRoomPrice.vue";
import BackButton from "./BackButton.vue";
import axios from "axios";
export default {
  data() {
    return {
      roomType: "",
      price: "",
      description: "",
      images: [],
      roomTypeNumber: -1,
      evaluations: [],
    };
  },
  created() {
    this.roomType = this.$route.query.roomType;
    this.price = this.$route.query.price;
    this.description = this.$route.query.description;
    this.images = this.$route.query.images;
    if (this.roomType === "单人房") this.roomTypeNumber = 1;
    else if (this.roomType === "豪华套房") this.roomTypeNumber = 2;
    else if (this.roomType === "总统房") this.roomTypeNumber = 3;
    else if (this.roomType === "双人房") this.roomTypeNumber = 4;
    else if (this.roomType === "情侣房") this.roomTypeNumber = 5;
    else if (this.roomType === "商务大床房") this.roomTypeNumber = 6;
    else if (this.roomType === "豪华大床房") this.roomTypeNumber = 7;
    else this.roomTypeNumber = 8;
    axios.get("http://localhost:8090/comment/getAlll").then((res) => {
      const commentsArray = res.data.data;
      console.log("===AllComment===", commentsArray);
      commentsArray.forEach((comment) => {
        if (comment.typeId == this.roomTypeNumber) {
          this.evaluations.push(comment);
        }
      });
    });
    console.log("===evaluations===", this.evaluations);
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
}
.EvalutionText {
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  justify-items: start;
}
.EvaluationTitle {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 90px;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background: radial-gradient(
    100% 128.38% at 100% 100%,
    rgba(51, 168, 253, 0.2) 0%,
    rgba(76, 0, 200, 0.2) 100%
  );
  backdrop-filter: blur(40px);
  border-radius: 30px;
}

.el-carousel__item:nth-child(2n + 1) {
  background: radial-gradient(
    120% 154.37% at 100% 100%,
    rgba(51, 253, 241, 0.1) 0%,
    rgba(200, 96, 0, 0.1) 100%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(40px);

  border-radius: 30px;
}
.Context {
  font-family: "LingWai SC";
  font-weight: 1000;
  font-size: 22px;
  line-height: 140%;
  text-align: center;
  color: #10597b;
}
.explore {
  cursor: pointer;
}
.Evalution {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: start;
  width: 100%;
}
.evaluationContent {
  padding: 20%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-items: center;
  gap: 20px;
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
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.welcome {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 49px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
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
