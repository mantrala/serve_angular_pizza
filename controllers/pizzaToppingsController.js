app.controller("pizzaToppingsController", function($scope, $routeParams, $http, $q){
  $scope.pizzaID = $routeParams.pizzaID;
  $scope.name = $routeParams.pizzaName;

  init();

  function init() {
    var allToppings = $http.get("https://pizzaserver.herokuapp.com/toppings");
    var pizza = $http.get("https://pizzaserver.herokuapp.com/pizzas/" + $scope.pizzaID + "/toppings/");

    $q.all([allToppings, pizza]).then(function(arr){
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
  }

  $scope.pizzaToppingsText = function(){
    var currentTopping = "";
    angular.forEach($scope.pizzaTopping, function(topping) {
      currentTopping = currentTopping + topping.name + ", ";
    });
    return currentTopping.slice(0, -2);
  };

  $scope.addTopping = function() {
    var self = this;
    $http({
      url: "https://pizzaserver.herokuapp.com/pizzas/" + $scope.pizzaID + "/toppings",
      method: "POST",
      data: {"topping_id": $scope.selectedTopping}
    })
    .then(function(response){
      $scope.selectedTopping = null;
      init();
    });

  };

});
