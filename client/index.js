import Vue from "vue";
import App from './App.vue';
import route from './route';
import store from './store';

const app = new Vue({
  el: '#app',
  router: route,
  store: store,
  render(h) {
    return h(App)
  }
});

export default app;