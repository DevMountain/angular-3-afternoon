angular.module('swagShop').component('detailsComponent', {
  templateUrl: 'app/details/details.template.html',
  controllerAs: 'detailsCtrl',
  
  controller: function( swagSrvc, $stateParams, cartSrvc ) {
    this.swag = swagSrvc.swag;

    if ( $stateParams.id ) {
      let itemIndex = this.swag.findIndex( item => item.id === $stateParams.id );
      this.item = this.swag[ itemIndex ];
    }

    this.addToCart = function( item ) {
      cartSrvc.add( item );
    };
  }
});