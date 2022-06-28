<template>
  <div class="Wrapper">
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
        </div>
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Wrapper {
  margin-top: 8%;
  width: 1140px;
  height: 650px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
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
</style>
