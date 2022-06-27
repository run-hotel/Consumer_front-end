<template>
  <div id="Wrapper">
    <img src="@/img/jiameng.svg" style="position: relative; width: 100%" />
    <BackButton style="position: absolute; left: 80%; bottom: -30%" />
  </div>
</template>

<script>
import BackButton from "./BackButton.vue";
export default {
  components: {
    BackButton,
  },
};
</script>

<style scoped></style>
