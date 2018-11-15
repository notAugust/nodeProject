import Vue from 'vue';
//  金额转换
Vue.filter('money', (value, type = '') => {
  switch (type) {
    case '':
      if (isNaN(value) || value === null) {
        return '--';
      }
      return (+value / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    case 'N':
      return (+value / 100);
  };
});
