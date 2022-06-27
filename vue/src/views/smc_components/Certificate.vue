<template>
  <div id="ToTal">
    <div class="Wrapper">
<<<<<<< HEAD
      <LiveInCard
        v-if="LiveNumber >= 0"
        :userPhone="this.tableData[LiveNumber].customerphone"
        :LiveTime="this.tableData[LiveNumber].inttime"
        :Orderno="this.tableData[LiveNumber].orderno"
      />
      <div class="Error" v-else>您还未入住过本酒店</div>
=======
      <LiveInCard />
>>>>>>> main
      <img
        class="buttomImage"
        src="@/img/waves/livestream-wave6.svg"
        alt="bottomimg"
      />
    </div>
    <BackButton
      style="position: absolute; right: 1%; bottom: 2%; z-index: 10000"
    />
<<<<<<< HEAD
    <ShotBottom v-if="LiveNumber >= 0" style="right: 4%; top: 50%" />
=======
    <ShotBottom style="right: 4%; top: 50%" />
>>>>>>> main
  </div>
</template>

<script>
<<<<<<< HEAD
import request from "@/utils/request";
=======
>>>>>>> main
import LiveInCard from "./LiveInCard.vue";
import BackButton from "./BackButton.vue";
import ShotBottom from "./ShotBottom.vue";
export default {
  components: {
    LiveInCard,
    BackButton,
    ShotBottom,
  },
<<<<<<< HEAD
  data() {
    return {
      total: 0,
      tableData: [],
      customerphone: sessionStorage.getItem("customerphone"),
      LiveNumber: -1,
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      request
        .get("/roomorder/selectorder", {
          params: {
            // search:this.search,
            customerphone: this.customerphone,
          },
        })
        .then((res) => {
          console.log(res.data[0].customerphone);
          this.tableData = res.data;
          this.total = res.data.length;
          res.data.forEach((element, index) => {
            if (element.orderstatus == "0") this.LiveNumber = index;
          });
        });
    },
  },
=======
>>>>>>> main
};
</script>

<style scoped>
<<<<<<< HEAD
.Error {
  width: 100%;
  text-align: center;
  padding-top: 15%;
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;

  text-align: center;

  color: #ffff;

  mix-blend-mode: normal;
}
=======
>>>>>>> main
#Total {
  display: relative;
}
.Wrapper {
  overflow: hidden;
  width: 100%;
  height: 800px;
  max-height: 1000px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
}
.buttomImage {
  width: 100%;
  position: absolute;
  bottom: 0%;
}
</style>
