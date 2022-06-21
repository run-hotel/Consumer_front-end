import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//import * as echarts from "echarts";
import App from "./App.vue";
import router from "./router";
import "./assets/fonts/iconfont.css";
import "./assets/css/global.css";

//导入验证码组件
import SIdentify from "./components/page/Identify";
Vue.component("SIdentify", SIdentify);
// //前后端交互
// import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:3000/api/";
// Vue.prototype.$http = axios;
//
Vue.prototype.$message = ElementUI.Message;
Vue.config.productionTip = false;
Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
  if (to.meta.logined) {
    if (sessionStorage.getItem("login") === "1") {
      next();
    } else {
      next({ path: "/hotellogin" });
    }
  } else {
    next();
  }
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
