// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import '@components/core/registerDirective';
import '@components/core/registerFilter';
import '@components/core/registerAjax';
// import '@assets/styles/theme.less';

import App from './App';
import router from './router';
import store from './store';

import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box');
