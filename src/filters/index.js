import Vue from 'vue';

Vue.filter('currency', (value) => {
  const params = { style: 'currency', currency: 'TRY' };

  return new Intl.NumberFormat('tr-TR', params).format(value);
});
