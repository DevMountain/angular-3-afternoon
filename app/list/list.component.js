angular.module('swagShop').component('list', {
  templateUrl: 'app/list/list.template.html',
  controllerAs: 'listCtrl',

  controller: function( swagSrvc ) {
    this.swag = swagSrvc.swag;
    
    this.addToCart = function( id ) {
      console.log( id );
    };
  }
});