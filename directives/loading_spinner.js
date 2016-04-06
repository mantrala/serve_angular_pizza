app.directive('loading', function($http) {
  return {
    restrict: 'A',
    link: function(scope, elm, attr) {
      scope.isLoading = function() {
        return $http.pendingRequests.length > 0;
      };

      scope.$watch(scope.isLoading, function(loading) {
        if (loading) {
          elm.css({'display': 'block'});
        } else {
          elm.css({'display': 'none'});
        }
      });
    }
  };
});
