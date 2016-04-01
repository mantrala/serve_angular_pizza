app.service('pizzaService', function($http, $q) {
  var self = this;
  $http.defaults.headers.post["Content-Type"] = "application/json";

  this.getPizzas = function() {
    deferred = $q.defer();
    $http.get("https://pizzaserver.herokuapp.com/pizzas/")
      .success(function(data) {
        deferred.resolve(data);
        self.pizzas = data;
      })
      .error(function() {
        deferred.reject('Something has gone wrong with the service');
      });
    return deferred.promise;
  };

  this.addPizza = function(name, description) {
    $http({
      url: "https://pizzaserver.herokuapp.com/pizzas",
      method: "POST",
      data: {"pizza": {"name": name, "description": description}}
    })
    .then(function(response){
      self.pizzas.push(response.data);
    });
  };
});
