import Vue from 'vue';
import Router from 'vue-router';

//  测试
const Test = r => require(['./router/test/test.vue'], r);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test,
      meta: {
        title: '测试'
      }
    }, {
      path: '*',
      redirect: '/test'
    }
  ]
});
