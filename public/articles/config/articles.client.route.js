angular.module('articles').config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/articles',{
templateUrl: 'articles/views/create-article.client.view.html'
  }).
  when('/articles/create',{
    templateUrl: 'articles/views/create-article.client.view.html'
  }).
  when('/articles/test',{
    templateUrl: 'articles/views/test-article.client.view.html'
  }).
  when('/articles/:articleId',{

  }).
  when('/articles/:articleId/edit',{

  });
}]);
