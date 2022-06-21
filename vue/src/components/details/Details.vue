<template>
  <div class="chart-container">
    <div id="chartPie" style="width: 100%; height: 550px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/macarons");
import request from "@/utils/request";
export default {
  data() {
    return {
      chartPie: "",
      typeName: [], //房间类型名称
      typeNum: [], //房间销售数量
    };
  },
  methods: {
    drawPieChart() {
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
        //设置标题,副标题,以及标题位置居中
        title: {
          text: "房间销量统计",
          subtext: "数据来源：订单",
          x: "center",
        },
        //具体点击某一项触发的样式内容
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        //左上侧分类条形符
        legend: {
          orient: "horizontal",
          left: "center",
          top: "bottom",
          data: [],
        },
        //饼状图类型以及数据源
        series: [
          {
            name: "统计数量",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "50%"],
            data: [],

            animationEasing: "cubicInOut",
            animationDuration: 2600,
            label: {
              emphasis: mylabel,
            },
          },
        ],
      });
    },
    //动态获取饼状图的数据
    initData() {
      request.get("/roomorder/salesVolumes").then((res) => {
        console.log(res);

        console.log(res.data);
        var getData = [];
        //先进行赋值
        for (let i = 0; i < res.data.length; i++) {
          var obj = new Object();
          obj.name = res.data[i].roomtypename;
          obj.value = res.data[i].salesvolumes;
          getData[i] = obj;
        }
        this.chartPie.setOption({
          legend: {
            data: res.data.typeName,
          },
          series: [
            {
              data: getData,
            },
          ],
        });
      });
    },
    drawCharts() {
      this.drawPieChart();
    },
  },
  mounted() {
    this.initData();
    this.drawCharts();
  },
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  float: left;
}
</style>
