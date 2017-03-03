// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import * as filters from './filters';
import Scroller from './components/scroller';
import Spinner from './components/spinner';
import ToastPlugins from './components/plugins/toast';
import LoadingPlugins from './components/plugins/loading';

Vue.use(LoadingPlugins);
Vue.use(ToastPlugins);
Vue.config.productionTip = false;
Vue.component('Scroller', Scroller);
Vue.component('Spinner', Spinner);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
