var app = angular.module('skyVA', []);
app.directive("scroll", ['$window',
 function () {
    return {
      link: function(scope, element, attrs) {
          element.bind("wheel", function() {
            // console.log($window.scrollY);
          });
      }
    }
}]);