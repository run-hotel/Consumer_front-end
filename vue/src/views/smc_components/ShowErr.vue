<template>
  <div id="showError" ref="error">
    <div id="ContentWrapper">
      <img src="@/img/Icon.svg" alt="error" />
      <span id="textError" style="">您还未登录，请先登录</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ShowError() {
      this.$refs.error.style.display = "grid";
      setTimeout(() => {
        this.$router.push("/login");
      }, 1500);
    },
  },
};
</script>

<style scoped>
@keyframes toShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes toShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes toShowOff {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes toShowOff {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
* {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
#showError {
  align-items: center;
  padding: 10px;
  position: absolute;
  width: 240px;
  height: 52px;
  bottom: 100px;
  left: -100px;

  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);

  border-radius: 30px;
  display: none;
  animation: toShow 0.5s;
  animation-fill-mode: both !important;
  -webkit-animation-fill-mode: both !important;
}
#ContentWrapper {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  align-items: center;
  justify-items: center;
  justify-content: center;
}
#textError {
  color: red;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  text-align: center;
}
</style>
