<template>
  <div class="Wrapper">
    <div class="topWrapper">
      <div class="LeftText">News</div>
      <div class="RightText">
        <div class="home regular">主页</div>
        <div class="contact regular">联系我们</div>
        <div class="login">登录</div>
      </div>
    </div>
    <div class="ContentWrapper">
      <div class="Description">
        <div class="NewsText">新闻消息</div>
        <div class="actionText">酒店最新活动介绍</div>
        <div class="description">
          Working at home is definitely a convenient option and makes sense in
          these unprecedented times.
          <img class="textCover" src="@/img/Cover2.svg" alt="Cover" />
        </div>
      </div>
      <div class="ImageBottom">
        <img class="woman" src="@/img/WomanFlower.svg" alt="WomanFlower" />
        <img src="@/img/splice.svg" alt="splice" />
        <div class="BlurRightBack"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.BlurRightBack {
  background: linear-gradient(
    142.97deg,
    rgba(255, 230, 0, 0.21) 17.43%,
    rgba(239, 60, 210, 0.22) 73.23%
  );
  opacity: 0.7;
  filter: blur(345.36px);
  position: absolute;
}
.Wrapper {
  background: #ffffff;
  box-shadow: 0px 6px 20px #ffe3de;
  border-radius: 30px;
  padding-bottom: 50px;
  height: 750px;
  width: 100%;
}
.topWrapper {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: 20px;
}
.LeftText {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: #000000;
  padding-left: 100px;
}
.RightText {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 45px;
  padding-right: 80px;
  cursor: pointer;
}
.regular {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  color: #333333;
}
.login {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  color: #4856df;
}
.ContentWrapper {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;
}
.Description {
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-items: center;
}
.NewsText {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 75px;
  color: #333333;

  padding-right: 20%;
}
.actionText {
  width: 300px;
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 75px;
  color: #333333;
  margin-left: 35%;
  margin-top: 10%;
}
.description {
  width: 402px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  color: #333333;
  position: relative;
}
.textCover {
  position: absolute;
  top: -100%;
}
.ImageBottom {
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 30px;
  position: relative;
}
.woman:hover {
  transition: 4s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1.1);
}
</style>
