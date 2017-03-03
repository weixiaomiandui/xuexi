import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
const ArticleList = resolve => require(['../components/list/list'], resolve);
const ArticleDetail = resolve => require(['../components/list/list'], resolve);
const ArticleCreate = resolve => require(['../components/list/list'], resolve);
const Message = resolve => require(['../components/list/list'], resolve);
const User = resolve => require(['../components/header/header'], resolve);
const Login = resolve => require(['../components/list/list'], resolve);

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
	routes: [
    {
      path: '/',
      name: 'index',
      component: ArticleList
    },
    {
      path: '/detail',
      name: 'detail',
      component: ArticleDetail,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: '/create',
      name: 'create',
      component: ArticleCreate
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta: {
        scrollToTop: true,
        auth: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: { scrollToTop: true }
    },
    {
      path: '/me',
      name: 'me',
      component: User,
      meta: {
        scrollToTop: true,
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { scrollToTop: true }
    }
  ]
});
