<template>
  <div id="chartPie" class="pie-wrap"></div>
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/macarons"); //引入主题
import request from "@/utils/request";
export default {
  data() {
    return {
      chartPie: null,
      Roomdata: "",
      a: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawPieChart();
    });
  },
  created() {},
  methods: {
    getDate() {
      request.get("/roomorder/salesVolumes").then((res) => {
        console.log(res);
        this.Roomdata = res.data;
        console.log(this.Roomdata);
        //console.log(this.Roomdata[1].roomtypename);
        this.a = this.Roomdata[0].salesvolumes;
        //console.log(this.a);
      });
    },

    drawPieChart() {
      this.getDate();
      let mytextStyle = {
        color: "#333",
        fontSize: 18,
      };
      let mylabel = {
        show: true,
        position: "right",
        offset: [30, 40],
        formatter: "{b} : {c} ({d}%)",
        textStyle: mytextStyle,
      };
      this.chartPie = echarts.init(
        document.getElementById("chartPie"),
        "macarons"
      );
      this.chartPie.setOption({
        title: {
          text: "房间销售详情",
          subtext: "开店到现在",
          x: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          data: ["单人房", "双人房", "大床房", "豪华房"],
          left: "center",
          top: "bottom",
          orient: "horizontal",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "单人房" },
              { value: 310, name: "双人房" },
              { value: 234, name: "大床房" },
              { value: 135, name: "豪华房" },
            ],
            animationEasing: "cubicInOut",
            animationDuration: 2600,
            label: {
              emphasis: mylabel,
            },
          },
        ],
      });
    },
  },
};
</script>

<style scope>
.pie-wrap {
  width: 100%;
  height: 400px;
}
</style>
