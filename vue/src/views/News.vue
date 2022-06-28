<template>
  <div class="Wrapper">
    <NewsInformation />
    <farmCard />
  </div>
</template>

<script>
import NewsInformation from "./smc_components/NewsInformation.vue";
import farmCard from "./smc_components/farmCard.vue";
export default {
  components: {
    NewsInformation,
    farmCard,
  },
};
</script>

<style scped>
.Wrapper {
  background: linear-gradient(
    180deg,
    rgba(254, 208, 252, 0.3),
    rgba(250, 208, 200, 0.3)
  );
}
</style>
