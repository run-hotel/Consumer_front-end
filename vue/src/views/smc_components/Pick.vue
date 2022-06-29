<template>
  <div class="Wrapper" ref="letLeft">
    <div class="ContentWrapper">
      <div class="ImageWrapper">
        <img src="@/img/pick01.svg" alt="pick01" />
        <img src="@/img/pick02.svg" alt="pick02" />
        <img src="@/img/pick03.svg" alt="pick03" />
      </div>
      <div class="PickTitle">接送服务</div>
      <div class="Description">
        <div class="normal">
          只要您选择本酒店并预定房间，在本酒店所在区即可拨打前台热线
        </div>
        <div class="normal">13872219099</div>
        <div class="normal">可享受免费接送服务</div>
        <div class="Warning">*本服务一次行最多接纳3~4 人</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goLeft() {
      console.log("到我往左走了");
      this.$refs.letLeft.style.transform = "translateX(-110px)";
    },
    goBack() {
      this.$refs.letLeft.style.transform = "translateX(0)";
    },
  },
};
</script>

<style scoped>
.Wrapper {
  width: 1200px;
  max-width: 1500px;
  background: rgba(47, 24, 147, 1);
  background-image: url("@/img/pickImage.png");
  border-radius: 60px;
}
.ContentWrapper {
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-content: end;
  justify-items: center;
  gap: 25%;
  padding: 300px;
}
.ImageWrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: end;
  justify-content: end;
  gap: 5%;
}
.Description {
  display: grid;
  grid-template-rows: repeat(4, auto);
  align-items: center;
  justify-items: start;
}
.PickTitle {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
  color: #ffffff;
}
.normal {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
}
.Warning {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #ffff00;
}
</style>
