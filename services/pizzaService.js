app.service('pizzaService', function($http, $q) {
  var self = this;

  this.getPizzas = function() {
    deferred = $q.defer();
    $http.get("https://pizzaserver.herokuapp.com/pizzas/")
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function() {
        deferred.reject('Something has gone wrong with the service');
      });
    return deferred.promise;
  }
});
