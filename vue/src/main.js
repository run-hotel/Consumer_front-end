import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
// import { VueAwesomeSwiper } from 'vue-awesome-swiper';
// import 'swiper/dist/css/swiper.css'
import "./assets/css/global.css";

//导入验证码组件
import SIdentify from "./components/page/Identify";
Vue.component("SIdentify", SIdentify);

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
//createApp(App).use(store).use(router).use(ElementUI,{locale,size:'small'}).mount('#app')
