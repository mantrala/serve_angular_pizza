var app = angular.module("angularPizza", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',
        {
          controller: 'pizzaController',
          templateUrl: '/partials/pizza.html'
        })
    .when('/toppings',
        {
          controller: 'toppingsController',
          templateUrl: 'partials/toppings.html'
        });
});
