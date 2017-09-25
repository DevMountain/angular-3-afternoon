angular.module('swagShop').service('cartSrvc', function() {
  let cart = [];

  this.add = function( item ) {
    cart.push( item );
    return cart;
  };

  this.remove = function( index ) {
    cart.splice( index, 1 );
    return cart;
  };

  this.checkout = function() {
    cart = [];
    return cart;
  };

  this.currentCart = function() {
    return cart;
  };
});