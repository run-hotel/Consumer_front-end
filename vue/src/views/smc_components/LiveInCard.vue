<template>
  <div class="WrapperCard">
    <div class="ContentWrapper">
      <iframe
        class="IconBox"
        src="https://embed.lottiefiles.com/animation/92578"
      ></iframe>
      <div class="WelcomTitle">
        <div id="WelcomeText">恭喜</div>
        <div id="WelcomeText">入住成功</div>
      </div>
      <div class="Descriptions">
        <div class="DesDescription">
          <div class="topDescription">这是为了证明</div>
          <div class="Username">xxxxxx</div>
          <div class="footerGrid">
            <div class="footerNormal">入住</div>
            <div class="HotelName">艾登花园酒店</div>
            <div class="footerNormal">on dd-mm-yy week</div>
          </div>
        </div>
      </div>
      <div class="bottomGrid">
        <div class="Bottom">
          <div class="Issuer" id="bottomTxt">颁发人:</div>
          <div class="Hotel" id="bottomTxt">艾登花园酒店</div>
        </div>
        <div class="Bottom">
          <div class="Number" id="bottomTxt">订单编号：xxxxxxx</div>
          <div class="MoreImformation" id="bottomTxt">详细信息：xxxxxxx</div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.WrapperCard {
  left: 8%;
  position: absolute;
  width: 1200px;
  height: 820px;
  max-width: 1200px;
  max-height: 900px;
  min-width: 600px;
  min-height: 400px;
  z-index: 1000;
  background-image: url("@/img/Certificate.svg");
  background-size: 100%;
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
}
.ContentWrapper {
  display: grid;
  grid-template-rows: repeat(4, auto);
  align-items: center;
  justify-items: center;
}
.IconBox {
  width: 200px;
  height: 90px;
  border: none;
}
#WelcomeText {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 90px;
  text-align: center;

  /* Text (dark) */

  color: #ffffff;
}
.Descriptions {
  width: 900px;
  height: 330px;
  max-width: 1200px;
  max-height: 420px;
  background: rgba(255, 255, 255, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
}
.DesDescription {
  padding-top: 2%;
  text-align: center;
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 40px;
}
.topDescription {
  padding-top: 2%;
  font-family: "ABeeZee";
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.7);
}
.Username {
  font-family: "ABeeZee";
  font-style: italic;
  font-weight: 400;
  font-size: 50px;
  line-height: 59px;
  color: #1f1f47;
}
.footerGrid {
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  align-items: center;
}
.footerNormal {
  font-family: "ABeeZee";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: rgba(0, 0, 0, 0.7);
}
.HotelName {
  font-family: "LingWai SC";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 140%;
  text-align: center;

  color: #10597b;
}
.bottomGrid {
  padding-top: 60px;
  text-align: start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 280px;
}
.Bottom {
  width: 349px;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);
  border-radius: 10px;
  padding: 10px;
}
#bottomTxt {
  font-family: "ABeeZee";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.7);
}
</style>
