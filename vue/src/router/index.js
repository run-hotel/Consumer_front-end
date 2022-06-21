import Vue from "vue";
import VueRouter from "vue-router";
import HotelLoginView from "../components/page/HotelLoginView.vue";
import Home from "../components/page/Home.vue";
import HotelHome from "../components/page/HotelHome.vue";
import Welcome from "../components/page/Welcome.vue";
//房间相关
import RoomInfo from "../components/room/RoomInfo.vue";
import RoomType from "../components/room/RoomType.vue";
//订单相关
import DealOrderInfo from "../components/order/DealOrderInfo.vue";
import DirectDeal from "../components/order/DirectDeal.vue";
//销售
import MyHandel from "../components/order/MyHandel.vue";
import Details from "../components/details/Details.vue";
//测试样式
import Test from "../components/test/Test.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/hotellogin",
  },
  {
    path: "/hotellogin",
    //name: "home",
    component: HotelLoginView,
  },
  {
    path: "/home",
    //name: "home",
    component: Home,
  },
  {
    path: "/hotelhome",
    //name: "home",
    component: HotelHome,
    redirect: "/welcome",
    meta: { logined: true },
    children: [
      { path: "/welcome", component: Welcome },
      { path: "/room1", component: RoomInfo },
      { path: "/room2", component: RoomType },
      { path: "/dealOrder1", component: DealOrderInfo },
      { path: "/dealOrder2", component: DirectDeal },
      { path: "/myhandel", component: MyHandel },
      { path: "/details", component: Details },
    ],
  },
  {
    path: "/test",
    //name: "home",
    component: Test,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
