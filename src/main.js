import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";
Vue.config.productionTip = false;

import './styles/index.scss'


import * as L from 'leaflet'
import "leaflet/dist/leaflet.css";
import "@/utils/leaflet.utils/leaflet.latlng-graticule.js";
import { constants } from "@/utils/constant.js";



Vue.prototype.$constants = constants
Vue.prototype.$L = L;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
