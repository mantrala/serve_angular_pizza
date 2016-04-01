app.controller('pizzaController', function($scope, pizzaService){
  init();
  function init() {
    pizzaService.getPizzas().then(function(response){
      $scope.pizzas = response;
    });
  }
});
