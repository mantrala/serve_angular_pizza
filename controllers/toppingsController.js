app.controller('toppingsController', function($scope, toppingsService){
  init();
  function init() {
    toppingsService.getToppings().then(function(response){
      $scope.toppings = response;
    });
  }
});
