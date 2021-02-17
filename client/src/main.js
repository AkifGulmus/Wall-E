import Vue from "vue";
import App from "./App.vue";
import GifComponent from "./components/GifComponent";
import VueRouter from "vue-router";
import PersonalGifs from "./components/PersonalGifs";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: GifComponent },
  { path: "/user/:username", component: PersonalGifs, props: true },
];
const router = new VueRouter({
  routes,
  mode: "history",
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
