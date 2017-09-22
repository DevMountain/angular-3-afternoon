angular.module('swagShop').component('cart', {
  templateUrl: 'app/cart/cart.template.html',
  controllerAs: 'cartCtrl',

  controller: function( cartSrvc ) {
    this.cart = cartSrvc.currentCart();

    if ( this.cart.length > 0 ) {
      this.total = this.cart.reduce( function( previous, next ) { 
        return previous.price || previous + next.price; 
      });
    }

    this.checkout = function() {
      cartSrvc.checkout();
      this.total = null;
    };
  }
});