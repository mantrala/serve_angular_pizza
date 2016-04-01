app.controller('toppingsController', function($scope, $rootScope, toppingsService){
  init();
  function init() {
    $scope.newTopping = {};
    toppingsService.getToppings().then(function(response){
      $scope.toppings = response;
    });
  }

  $scope.addTopping = function() {
    toppingsService.addTopping($scope.newTopping.name);
    $scope.newTopping.name = "";
  };
});
