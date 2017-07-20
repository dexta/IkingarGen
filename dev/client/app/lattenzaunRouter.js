wurzel.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'app/default/template.html',
      controller  : 'defaultController'
    })
  ;
});