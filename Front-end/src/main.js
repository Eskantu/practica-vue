import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueAxios from 'vue-axios'
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
Vue.use(VueAxios, axios)

import moment from 'moment';

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MM-DD-YYYY hh:mm')
  }
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
