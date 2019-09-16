import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

Vue.config.productionTip = false;

//initilize Netlify Identity
netlifyIdentityWidget.init();

// initlize gotrue-js for netlify
export const auth = new GoTrue({
  APIUrl: "https://vue-william.netlify.com/.netlify/identity",
  setCookie: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
