app.service('toppingsService', function($http, $q) {
  var self = this;

  this.getToppings = function() {
    deferred = $q.defer();
    $http.get("https://pizzaserver.herokuapp.com/toppings/")
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function() {
        deferred.reject('Something has gone wrong with the service');
      });
    return deferred.promise;
  }
});
