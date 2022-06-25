<template>
  <div :class="elements.position">
    <div class="CardTextWrapper">
      <div class="Basicdescription">
        <span class="topTitle">{{ elements.title }}</span>
        <span class="condition">{{ elements.condition }}</span>
      </div>
      <div class="check">
        <div
          class="contentFree"
          v-for="(element, index) in elements.description"
          :key="index"
        >
          <img src="@/img/Check.svg" alt="check" />
          <span class="descriptionText">{{ element }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["elements"],
};
</script>

<style scoped>
.CardLeft {
  background: linear-gradient(
    180deg,
    rgba(219, 241, 249, 0.5) 6.58%,
    rgba(179, 202, 248, 0.5) 106.58%
  );
  backdrop-filter: blur(40px);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 0px 60px 60px 60px;
  width: 400px;
  height: 460px;
  position: relative;
  z-index: 100;
}
.CardCenter {
  background: linear-gradient(180deg, #2fb8ff 0%, #9eecd9 100%);
  border-radius: 60px 60px 60px 0px;
  backdrop-filter: blur(40px);
  width: 400px;
  height: 460px;
}
.CardRight {
  background: linear-gradient(180deg, #73b8f9 11.94%, #cbd8f1 80.98%);
  backdrop-filter: blur(40px);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 60px 0px 60px 60px;
  width: 400px;
  height: 460px;
}
.CardTextWrapper {
  padding: 40px;
  display: grid;
  grid-template-rows: repeat(2, auto);
  width: 100%;
  align-items: center;
  justify-items: center;
  text-align: center;
}
.Basicdescription {
  display: grid;
  grid-template-rows: repeat(2, auto);
}
.topTitle {
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  /* or 19px */

  text-transform: uppercase;

  color: #0e0f25;

  opacity: 0.7;
}
.condition {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 72px;

  color: #000000;
}
.check {
  display: grid;
  padding-top: 40px;
}
.contentFree {
  display: grid;
  grid-template-columns: auto 210px;
  align-items: center;
  justify-items: start;
  gap: 60px;
}
.descriptionText {
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}
</style>
