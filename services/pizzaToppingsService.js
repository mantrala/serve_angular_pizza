app.service('pizzaToppingsService', function($http, $q) {
  $http.defaults.headers.post["Content-Type"] = "application/json";

  this.getPizzaToppings = function(pizzaID) {
    var allToppings = $http.get("https://pizzaserver.herokuapp.com/toppings");
        pizza       = $http.get("https://pizzaserver.herokuapp.com/pizzas/" + pizzaID + "/toppings/");

    return $q.all([allToppings, pizza]);
  };

  this.addToppingToPizza = function(pizzaID, selectedTopping) {
    return $http({
      url: "https://pizzaserver.herokuapp.com/pizzas/" + pizzaID + "/toppings",
      method: "POST",
      data: {"topping_id": selectedTopping}
    });
  };
});
