app.controller('pizzaController', function($scope, pizzaService){
  init();
  function init() {
    $scope.newPizza = {};
    pizzaService.getPizzas().then(function(response){
      $scope.pizzas = response;
    });
  };

  $scope.addPizza = function() {
    pizzaService.addPizza($scope.newPizza.name, $scope.newPizza.description);
    $scope.newPizza.name = "";
    $scope.newPizza.description = "";
  };

  $scope.showEdit = false;
});
