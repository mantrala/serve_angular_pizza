var app = angular.module("angularPizza", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
    .when('/pizza',
        {
          controller: 'pizzaController',
          templateUrl: 'partials/pizza.html'
        })
    .when('/toppings',
        {
          controller: 'toppingsController',
          templateUrl: 'partials/toppings.html'
        })
    .when('/pizza/:pizzaID-:pizzaName',
        {
          controller: 'pizzaToppingsController',
          templateUrl: 'partials/pizza_toppings.html'
        });
});
