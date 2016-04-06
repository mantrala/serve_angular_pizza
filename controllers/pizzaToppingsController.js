app.controller("pizzaToppingsController", function($scope, $routeParams, pizzaToppingsService){
  $scope.pizzaID = $routeParams.pizzaID;
  $scope.name = $routeParams.pizzaName;

  init();

  function init() {
    pizzaToppingsService.getPizzaToppings($scope.pizzaID).then(function(arr){
      $scope.allToppings = arr[0].data;
      $scope.pizzaTopping = arr[1].data;

      $scope.availableToppings = function() {
        var ids = {};
        _.each($scope.pizzaTopping, function (top) { ids[top.topping_id] = true;  });
        var out = _.filter($scope.allToppings, function (val) {
          return !ids[val.id];
        }, $scope.pizzaTopping);
        return out;
      };
    });
  };

  $scope.pizzaToppingsText = function(){
    var currentTopping = "";
    angular.forEach($scope.pizzaTopping, function(topping) {
      currentTopping = currentTopping + topping.name + ", ";
    });
    return currentTopping.slice(0, -2);
  };

  $scope.addTopping = function() {
    pizzaToppingsService.addToppingToPizza($scope.pizzaID, $scope.selectedTopping)
      .then(function(){
        $scope.selectedTopping = null;
        init();
      });
  };

});
