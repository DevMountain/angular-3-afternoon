angular.module('swagShop').service('cartSrvc', function() {
  let cart = [];

  this.add = function( item ) {
    cart.push( item );
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