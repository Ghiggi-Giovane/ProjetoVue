import Vue from "vue";
import App from "./App.vue";
import router from "./router";
<<<<<<< HEAD
import { BootstrapVue, IconsPlugin, Bootstrap } from "bootstrap-vue";
=======
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
>>>>>>> b6149bb7ccef8afeb628ad19d7d5760f4c262bfb

Vue.config.productionTip = false;


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
