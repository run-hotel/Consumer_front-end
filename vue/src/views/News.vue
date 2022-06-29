<template>
  <div class="Wrapper">
    <NewsInformation />
    <div ref="cards" class="HoverCards">
      <TeamCard style="margin-top: 5%" />
      <FarmCard ref="farmCard" style="margin-top: -400px" />
    </div>
    <div ref="cooks">
      <Cook ref="cookCard" />
    </div>
    <div class="Pick">
      <Pick ref="pickUp" />
    </div>
    <div ref="pick" style="margin-left: 30%; margin-top: 35%">
      <Hand />
    </div>
  </div>
</template>

<script>
import NewsInformation from "./smc_components/NewsInformation.vue";
import FarmCard from "./smc_components/farmCard.vue";
import TeamCard from "./smc_components/TeamCard.vue";
import Cook from "./smc_components/Cook.vue";
import Hand from "./smc_components/Hand.vue";
import Pick from "./smc_components/Pick.vue";
export default {
  data() {
    return {
      currentScroll: 0,
    };
  },
  components: {
    NewsInformation,
    FarmCard,
    TeamCard,
    Cook,
    Hand,
    Pick,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll02);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleScroll02);
  },
  methods: {
    handleScroll() {
      // console.log(this.currentScroll, this.$refs.cards.offsetTop + 150);
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      if (
        this.currentScroll >= this.$refs.cards.offsetTop - 150 &&
        this.currentScroll < this.$refs.cards.offsetTop + 1000
      ) {
        this.$refs.farmCard.letDowm();
      } else if (this.currentScroll >= this.$refs.cards.offsetTop + 560) {
        this.$refs.farmCard.letTop();
      } else {
        this.$refs.farmCard.letTop();
      }
    },
    handleScroll02() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      if (
        this.currentScroll >= this.$refs.cooks.offsetTop - 400 &&
        this.currentScroll < this.$refs.cooks.offsetTop + 600
      ) {
        this.$refs.cookCard.goRight();
      } else {
        this.$refs.cookCard.goBack();
      }
      console.log(this.currentScroll, this.$refs.pick.offsetTop - 1500);
      if (
        this.currentScroll >= this.$refs.pick.offsetTop - 1600 &&
        this.currentScroll < this.$refs.pick.offsetTop - 900
      ) {
        this.$refs.pickUp.goLeft();
      } else {
        this.$refs.pickUp.goBack();
      }
    },
  },
};
</script>

<style scped>
* {
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.Wrapper {
  background: linear-gradient(
    180deg,
    rgba(254, 208, 252, 0.3),
    rgba(250, 208, 200, 0.3)
  );
  border-radius: 150px;
}
.HoverCards {
  display: grid;
  grid-template-rows: repeat(2, auto);
  align-items: center;
  justify-items: center;
  width: 100%;
}
.Pick {
  margin-top: 15%;
  padding-left: 15.75%;
}
</style>
