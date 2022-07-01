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
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: "data-source",
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
//createApp(App).use(store).use(router).use(ElementUI,{locale,size:'small'}).mount('#app')
