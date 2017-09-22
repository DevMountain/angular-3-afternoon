angular.module('swagShop', [ 'ui.router' ]).config( function( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state({
      name: 'list',
      url: '/',
      component: 'list'
    })
    .state({
      name: 'details',
      url: '/details/:id',
      component: 'detailsComponent'
    })
    .state({
      name: 'cart',
      url: '/cart',
      component: 'cart'
    });

  $urlRouterProvider
    .otherwise('/');
});