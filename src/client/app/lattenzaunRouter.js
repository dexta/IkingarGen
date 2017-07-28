wurzel.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'app/default/default.html',
      controller  : 'defaultController'
    })
    .when('/data', {
      templateUrl : 'app/data/data.html',
      controller  : 'dataController'
    })
    .when('/template', {
      templateUrl : 'app/template/template.html',
      controller  : 'templateController'
    })
    .when('/config', {
      templateUrl : 'app/config/config.html',
      controller  : 'configController'
    })
  ;
});