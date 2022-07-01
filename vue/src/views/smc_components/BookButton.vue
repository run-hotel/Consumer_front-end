<template>
  <div @click="book" style="position: relative">
    <ShowErr
      :roomType="room"
      :description="description"
      :images="images"
      ref="errors"
    />
    <div class="flex-col items-center text-wrapper_6 view_2 Wrapper">
      <span class="text_50">马上预定</span>
    </div>
  </div>
</template>

<script>
import ShowErr from "./ShowErr.vue";
export default {
  props: ["room", "description", "images"],
  components: {
    ShowErr,
  },
  methods: {
    book() {
      this.$refs.errors.ShowError();
    },
  },
};
</script>

<style scoped>
* {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
div.flex-col:hover {
  filter: hue-rotate(10deg) brightness(120%) saturate(110%);
  transform: matrix(1, 0.06, -0.11, 1, 0, 0) rotate(-2deg);
}

.Wrapper {
  cursor: pointer;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.items-center {
  display: flex;
  align-items: center;
}
.text-wrapper_6 {
  padding: 16.5px 0 17.5px;
  background-color: #9b51e0;
  border-radius: 16px;
  width: 158.5px;
  height: 45.5px;
}
.text_50 {
  color: #ffffff;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 11.5px;
}
</style>
