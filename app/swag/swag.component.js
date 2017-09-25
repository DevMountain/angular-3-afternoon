angular.module('swagShop').component('swag', {
  templateUrl: 'app/swag/swag.template.html',
  controllerAs: 'swagCtrl',
  bindings: {
    item: '<',
    cartView: '<',
    index: '<'
  },

  controller: function( cartSrvc ) {

    this.add = function( item ) {
      cartSrvc.add( item );
    };

    this.remove = function( index ) {
      cartSrvc.remove( index );
    };

  }
});