angular.module('swagShop').component('swag', {
  templateUrl: 'app/list/swag/swag.template.html',
  controllerAs: 'swagCtrl',
  bindings: {
    item: '<',
    onAdd: '&'
  },

  controller: function() {

  }
});