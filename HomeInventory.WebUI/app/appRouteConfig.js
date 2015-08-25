angular.module('app').config(function ($routeProvider) {

  var routes = [
    {
      url: '/dashboard',
      config: { template: '<wwa-dashboard></wwa-dashboard>' }
    },
    {
      url: '/friends',
      config: { template: '<wwa-friends></wwa-friends>' }
    },
    {
      url: '/favouriteList',
      config: { template: '<wwa-favourite-list></wwa-favourite-list>' }
    },
    {
        url: '/inventoryList',
        config: { template: '<wwa-inventory-list></wwa-inventory-list>' }
    }
  ];

  routes.forEach(function (route) {
    $routeProvider.when(route.url, route.config);
  });

   $routeProvider.otherwise({redirectTo: '/dashboard'});

});