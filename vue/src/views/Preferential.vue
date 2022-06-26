<template>
  <div>
    <div class="TopWrapper">
      <div class="ContentWrapper">
        <div class="TextWrapper">
          <div class="title">
            艾迪花园
            <iframe
              src="https://embed.lottiefiles.com/animation/7893"
              style="position: absolute; left: 50px; border: none"
            ></iframe>
          </div>
          <span class="content">优惠政策</span>
          <span class="description">凭学生证可到前台进一步享受学生优惠</span>
        </div>
        <div class="CardWrapper">
          <Card :elements="basic" />
          <Card :elements="pro" />
          <Card :elements="team" />
        </div>
      </div>
    </div>
    <div class="flex-col page">
      <div class="flex-col items-start group">
        <img src="@/img/wave3.svg" class="image" />
        <div class="flex-col items-start image-wrapper">
          <img src="@/img/waves/certificate-wave3.svg" class="image_1" />
        </div>
        <div class="section_1">
          <img src="@/img/image2.svg" class="image_2" />
          <div class="flex-col items-start image-wrapper_1">
            <img src="@/img/image3.svg" class="image_3" />
          </div>
          <img src="@/img/image5.svg" class="image_5" />
          <img src="@/img/image2.svg" class="image_6" />
          <div class="flex-col items-start image-wrapper_2">
            <img src="@/img/image3.svg" class="image_3" />
          </div>
          <img src="@/img/image5.svg" class="image_8" />
          <div class="flex-col items-end section_2">
            <div class="flex-row group_1">
              <img src="@/img/square.svg" class="image_9" />
              <img src="@/img/apple.svg" class="image_10" />
              <img src="@/img/facebook.svg" class="image_11" />
              <img src="@/img/airbnb.svg" class="image_12" />
              <img src="@/img/google.svg" class="image_13" />
              <img src="@/img/amazon.svg" class="image_14" />
            </div>
          </div>
          <div class="flex-col items-end section_3">
            <span class="text">所有设备均可访问</span>
            <img src="@/img/Mockup.svg" class="image_15" />
          </div>
          <div class="flex-col section_4">
            <img src="@/img/user1.svg" class="image_16" />
            <span class="text_1">摆烂小子</span>
            <span class="text_2 text_3">DESIGNER AT BLUSH</span>
            <span class="text_4">
              房间设施齐全，服务人员素质高，，跟一些快捷商务酒店很不一样。早餐品种丰富，房间设施新，床品舒服，总体物超所值，是一次非常满意的体验。
            </span>
          </div>
          <div class="flex-col section_5">
            <img src="@/img/user2.svg" class="image_16" />
            <span class="text_6">Liu Yi</span>
            <span class="text_7">FOUNDER OF PRICE TAG</span>
            <span class="text_4">
              地理位置好，交通方便，房间舒适卫生，服务人员很热情，乐于提供各种帮助，刘兰小姑娘非常热情，值得奖励。
            </span>
          </div>
          <div class="flex-col items-start group_2">
            <span class="text_2 text_9">总共接待超</span>
            <div class="flex-col group_3">
              <span class="text_10">75,000 人</span>
              <span class="text_11">
                艾迪花园酒店崇尚“热情加激情，满意加惊喜，在客人的惊喜中，找到富有的人生。”服务理念，全力营造安全、舒适和便捷的亲情氛围，突出精致、精细、精美的服务品位，尽显时尚、简约、休闲的现代生活，“艾迪无锡、创意无限”。
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col items-start group_4">
        <img src="@/img/waves/certificate-wave4.svg" class="image_19" />
        <div class="justify-center section_6">
          <iframe
            src="https://embed.lottiefiles.com/animation/1708"
            class="image_20"
          ></iframe>

          <div class="flex-col group_5" style="position: relative">
            <span class="text_13">Get certificates</span>
            <span class="text_14"
              >入住成功后，我们将为每个人授予一张印记。以此来证明您们曾入住过本酒店</span
            >
            <div class="flex-row section_7">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16561437265897071856.png"
                class="image_21"
              />
              <span class="text_15">查看印记模板</span>
            </div>
          </div>
          <BackButton style="position: absolute; z-index: 1000; top: 350px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./smc_components/Card.vue";
import BackButton from "./smc_components/BackButton.vue";
export default {
  data() {
    return {
      basic: {
        title: "普通用户",
        condition: "Free",
        description: ["免费 接送", "客服咨询"],
        color: "",
        position: "CardLeft",
      },
      pro: {
        description: [
          "免费 接送",
          "客服咨询",
          "限时住房优惠券",
          "免费早餐/一顿",
          "加住 95 折优惠",
        ],
        title: "VIP 用户",
        condition: "连续居住超过两晚",
        position: "CardCenter",
      },
      team: {
        description: [
          "享有全部 vip 用户优惠",
          "连续居住两晚，享受 85 折优惠",
          "未成年人免费",
        ],
        title: "团队",
        condition: "旅行团队6人及以上",
        position: "CardRight",
      },
    };
  },
  components: {
    Card,
    BackButton,
  },
};
</script>

<style scoped>
.TopWrapper {
  background-image: url("@/img/Waves.svg");
  background-size: cover;
}
.ContentWrapper {
  display: grid;
  grid-template-rows: repeat(2, auto);
  align-items: center;
}
.TextWrapper {
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 20px;
  justify-items: center;
  margin-top: 200px;
}
.title {
  font-family: "LingWai SC";
  font-style: normal;
  font-weight: 500;
  font-size: 140px;
  line-height: 130%;
  color: #fbd8c6;
  text-align: center;
  position: relative;
}
.content {
  font-family: "Hannotate SC";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 67px;
  text-align: center;
}
.description {
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  mix-blend-mode: normal;
}
.CardWrapper {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 600px;
  max-height: 620px;
  gap: 60px;
}
/************************************************************
** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
** 否则页面将无法正常显示                                  **
************************************************************/

html {
  font-size: 16px;
}

* {
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
}

.items-end {
  display: flex;
  align-items: flex-end;
}
.image_3 {
  margin-left: -10px;
  opacity: 0.2;
  filter: drop-shadow(0px 0px 89.37px #21396f4d);
  width: 95.9028vw;
  height: 31.25vw;
}
.image_16 {
  flex-shrink: 0;
  align-self: flex-start;
  width: 44px;
  height: 44px;
}
.text_2 {
  text-transform: uppercase;
}
.text_4 {
  margin-top: 10.5px;
  color: #ffffff;
  font-size: 15px;
  font-family: Yuppy SC;
  line-height: 23px;
  opacity: 0.8;
}
.page {
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.group {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 1421px 0 216px;
  overflow-x: hidden;
  position: relative;
}
.group_4 {
  margin-top: -415.5px;
  padding-top: 69.5px;
  overflow-x: hidden;
  position: relative;
}
.image {
  margin-left: -152px;
  width: 114.8611vw;
  height: 31.875vw;
}
.image-wrapper {
  padding-top: 140px;
  background-image: url("@/img/waves/certificate-wave2.svg");
  height: 605px;
  position: absolute;
  left: -68px;
  right: -14px;
  top: 1491px;
}
.section_1 {
  background-color: #f2f6ff;
  border-radius: 120px;
  overflow: hidden;
  height: 1443px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.image_19 {
  margin-left: -32px;
  filter: blur(75px);
  width: 114.8611vw;
  height: 35.3535vw;
}
.section_6 {
  padding: 19.5px 179px 129.5px;
  background-image: url("@/img/waves copy.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.image_1 {
  margin-left: 25.5px;
  filter: blur(75px);
  width: 107.3611vw;
  height: 33.3333vw;
}
.image_2 {
  flex-shrink: 0;
  opacity: 0.5;
  filter: drop-shadow(0px 0px 89.37px #21396f4d);
  width: 93.125vw;
  height: 30.5556vw;
  position: absolute;
  left: 81px;
  right: 18px;
  top: -22px;
}
.image-wrapper_1 {
  padding-top: 10px;
  opacity: 0.2;
  filter: drop-shadow(0px 0px 89.37px #21396f4d);
  background-image: url("@/img/image2.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 444px;
  position: absolute;
  left: 47px;
  right: 24px;
  top: -10px;
}
.image_5 {
  flex-shrink: 0;
  filter: drop-shadow(0px 0px 89.37px #21396f4d);
  width: 91.1806vw;
  height: 32.7778vw;
  position: absolute;
  right: 7px;
  top: -48px;
}
.image_6 {
  flex-shrink: 0;
  opacity: 0.5;
  filter: drop-shadow(0px 0px 89.37px #21396f4d);
  width: 93.125vw;
  height: 30.5556vw;
  position: absolute;
  left: 61px;
  right: 38px;
  bottom: 323px;
}
.image-wrapper_2 {
  padding-top: 10px;
  opacity: 0.2;
  filter: drop-shadow(0px 0px 89.37px #21396f4d);
  background-image: url("@/img/image3.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 444px;
  position: absolute;
  left: 32px;
  right: 39px;
  top: 690px;
}
.image_8 {
  flex-shrink: 0;
  filter: drop-shadow(0px 0px 89.37px #21396f4d);
  width: 91.1806vw;
  height: 32.7778vw;
  position: absolute;
  right: 22px;
  bottom: 319px;
}
.section_2 {
  padding: 735.5px 0 1525px;
  background-image: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6266510d5a7e3f0310700f1e/62b11fb8d02982001153151d/16561635524116655966.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  left: -725px;
  right: -141px;
  top: 494.5px;
}
.section_3 {
  padding: 1444.5px 0 5.5px;
  background-size: 100% 100%;
  position: absolute;
  left: -725px;
  right: -141px;
  top: -1355.5px;
}
.section_4 {
  padding: 30px 30px 27.5px;
  background-color: #0f0e4780;
  border-radius: 20px;
  box-shadow: 0px 50px 100px #00000040;
  backdrop-filter: blur(20px);
  overflow: hidden;
  width: 340px;
  height: 251px;
  position: absolute;
  left: 140px;
  top: 919px;
}
.section_5 {
  padding: 30px 30px 27.5px;
  background-color: #0e0d4780;
  border-radius: 20px;
  box-shadow: 0px 50px 100px #00000040;
  backdrop-filter: blur(20px);
  overflow: hidden;
  width: 340px;
  height: 232px;
  position: absolute;
  left: 540px;
  top: 928.5px;
}
.group_2 {
  padding-top: 2px;
  overflow: hidden;
  width: 360px;
  height: 202px;
  position: absolute;
  right: 140px;
  top: 943.5px;
}
.image_20 {
  border: none;
  height: 300px;
}
.group_5 {
  margin-left: 61px;
  margin-top: 2.5px;
  width: 349px;
}
.group_1 {
  margin-right: 348.5px;
  overflow: hidden;
  width: 1025.5px;
}
.text {
  margin-right: 704px;
  color: #000000;
  font-size: 40px;
  font-family: HanziPen SC;
  font-weight: 700;
  line-height: 41.5px;
}
.image_15 {
  margin-top: 141px;
  width: 92.5694vw;
  height: 46.8056vw;
}
.text_1 {
  margin-top: 14px;
  align-self: flex-start;
  color: #ffffff;
  font-size: 20px;
  font-family: SF Pro Text;
  line-height: 18.5px;
}
.text_3 {
  margin-top: 17px;
  align-self: flex-start;
  color: #ff9494;
  font-size: 13px;
  font-family: SF Pro Text;
  font-weight: 600;
  line-height: 9.5px;
}
.text_6 {
  margin-left: 2px;
  margin-top: 16px;
  align-self: flex-start;
  color: #ffffff;
  font-size: 20px;
  font-family: SF Pro Text;
  line-height: 15px;
}
.text_7 {
  margin-top: 18.5px;
  align-self: flex-start;
  color: #ff9494;
  font-size: 13px;
  font-family: SF Pro Text;
  line-height: 9.5px;
}
.text_9 {
  color: #000000b3;
  font-size: 15px;
  font-family: SF Pro Text;
  font-weight: 600;
  line-height: 14px;
}
.group_3 {
  margin: 17.5px 0 -14px;
  width: 363px;
}
.text_12 {
  align-self: flex-start;
  color: #000000b3;
  font-size: 15px;
  font-family: SF Pro Text;
  font-weight: 600;
  line-height: 14px;
}
.text_13 {
  margin-top: 31px;
  align-self: flex-start;
  color: #000000;
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 700;
  line-height: 30px;
}
.text_14 {
  margin-left: 2px;
  margin-top: 27px;
  color: #000000b3;
  font-size: 17px;
  font-family: HanziPen SC;
  font-weight: 700;
  line-height: 27px;
}
.section_7 {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;
  cursor: pointer;
  margin-top: 20px;
  padding: 16px 10px;
  background-image: linear-gradient(180deg, #17204f66 0%, #17204f40 100%);
  border-radius: 30px;
  backdrop-filter: blur(20px);
  width: 180px;
  border: none;
}
.image_9 {
  margin: 6.5px 0;
  width: 132px;
  height: 32px;
}
.image_10 {
  margin-left: 76px;
  width: 37px;
  height: 45px;
}
.image_11 {
  margin-left: 76px;
  align-self: center;
  width: 125px;
  height: 24px;
}
.image_12 {
  margin-left: 76px;
  width: 135px;
  height: 43px;
}
.image_13 {
  margin: 4px 0 4px 76px;
  width: 111px;
  height: 37px;
}
.image_14 {
  margin-left: 76px;
  margin-top: 13.5px;
  width: 106px;
  height: 32px;
}
.text_10 {
  align-self: flex-start;
  color: #000000;
  font-size: 40px;
  font-family: SF Pro Display;
  font-weight: 700;
  line-height: 39px;
}
.text_11 {
  margin-top: 12px;
  color: #000000;
  font-size: 18px;
  font-family: LingWai SC;
  line-height: 28px;
}
.image_21 {
  flex-shrink: 0;
  width: 20px;
  height: 18px;
}
.text_15 {
  color: #ffffff;
  font-size: 15px;
  font-family: SF Pro Text;
  line-height: 11px;
  overflow: initial;
}
</style>
