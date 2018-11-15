import Vue from 'vue';

Vue.directive('focus', {
  update: function (el) {
    // 聚焦元素
    console.log(el);
    el.focus();
  }
});
