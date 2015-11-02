angular.module('articles').controller('ArticlesController',['$scope',
'$routeParams','$locatioin','Authentication','Articles',
function($scope,$routeParams,$location,Authentication,Articles){
  $scope.authentication = Authentication;
}]);
