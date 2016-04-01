app.service('toppingsService', function($http, $q) {
  var self = this;
  $http.defaults.headers.post["Content-Type"] = "application/json";

  this.getToppings = function() {
    deferred = $q.defer();
    $http.get("https://pizzaserver.herokuapp.com/toppings/")
      .success(function(data) {
        deferred.resolve(data);
        self.toppings = data;
      })
      .error(function() {
        deferred.reject('Something has gone wrong with the service');
      });
    return deferred.promise;
  }

  this.addTopping = function(name) {
    $http({
      url: "https://pizzaserver.herokuapp.com/toppings",
      method: "POST",
      data: {"topping": {"name": name}}
    })
    .then(function(response){
      self.toppings.push(response.data);
    });
  };
});
