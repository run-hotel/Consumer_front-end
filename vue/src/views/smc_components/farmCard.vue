<template>
  <div ref="wrapper" class="Wrapper">
    <div class="ContentWrapper">
      <div class="TopWrapper">
        <img class="farmIcon" src="@/img/farmIcon.svg" alt="farmIcon" />
        <div class="Title">在线农庄 x 艾迪花园</div>
      </div>
      <div class="CenterWrapper">
        <div class="description">
          <div class="TextAddimage">
            <img src="@/img/N.svg" alt="N" />
            <div class="newsLeft">ews</div>
          </div>
          <div class="Action">现与在线农庄合作</div>
          <div class="activedescription">
            <div class="topdescription">在线农庄 x 艾迪花园</div>
            <div class="topdescription">强强联手，只为您提供更好服务</div>
          </div>
          <div class="ButtonWrapper">
            <div class="ButtonContentWrapper">
              <div class="showMore">查看更多</div>
              <img src="@/img/to.svg" alt="to" />
            </div>
          </div>
        </div>
        <img class="right" src="@/img/rightFarmImage.svg" alt="right" />
      </div>
      <img src="@/img/hoverWave.svg" alt="hoverWave" class="Hover" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    letDowm() {
      this.$refs.wrapper.style.marginTop = "100px";
    },
    letTop() {
      console.log("我 letUp 了");
      this.$refs.wrapper.style.marginTop = "-400px";
    },
  },
};
</script>

<style scoped>
* {
  transition: 2s ease;
}
.Wrapper {
  width: 1140px;
  height: 650px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  position: relative;
}
.ContentWrapper {
  display: grid;
  grid-template-rows: auto auto;
}
.TopWrapper {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 5%;
}
.Title {
  font-family: "Rounded Mplus 1c Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 71px;
  color: #7391e0;
}
.CenterWrapper {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
}
.description {
  display: grid;
  grid-template-rows: repeat(4, auto);
  align-items: center;
  justify-items: start;
  padding: 5%;
}
.TextAddimage {
  display: grid;
  grid-template-columns: auto auto;
  align-items: start;
  justify-items: end;
  gap: 5px;
  padding-left: 15%;
}
.newsLeft {
  padding: 10px;
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 71px;
  color: #7391e0;
}
.Action {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 67px;
  color: #000000;
  padding: 20px;
}
.activedescription {
  padding: 2%;
}
.topdescription {
  font-family: "Saira";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 31px;

  color: #838383;
}
.ButtonWrapper {
  width: 210px;
  height: 40px;
  border: 2px solid #7391e0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  margin-top: 2%;
  z-index: 1000;
  cursor: pointer;
}
.ButtonContentWrapper {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  padding: 1%;
}
.showMore {
  font-family: "Rounded Mplus 1c Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #7391e0;
}
.right {
  width: 400px;
  height: 400px;
  z-index: 1000;
}
.Hover {
  position: absolute;
  top: -19%;
  left: -4%;
}
.right:hover {
  transform: scale(1.2);
}
</style>
