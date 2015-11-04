angular.module('example').config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/examples/client',{
    templateUrl: 'example/views/example.client.view.html'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
