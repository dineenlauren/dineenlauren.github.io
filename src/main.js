import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { EmbedPlugin } from 'bootstrap-vue';
import { LayoutPlugin } from 'bootstrap-vue';
import { NavbarPlugin } from 'bootstrap-vue';
import { VBScrollspyPlugin } from 'bootstrap-vue';
import { ImagePlugin } from 'bootstrap-vue';
import { LinkPlugin } from 'bootstrap-vue';
import { CardPlugin } from 'bootstrap-vue';
import { BIcon, BIconGithub } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(EmbedPlugin);
Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(VBScrollspyPlugin);
Vue.use(ImagePlugin);
Vue.use(LinkPlugin);
Vue.use(CardPlugin);

Vue.component('BIcon', BIcon)
Vue.component('BIconGithub', BIconGithub)

Vue.config.productionTip = false;

// Vue.use(BootstrapVue);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
