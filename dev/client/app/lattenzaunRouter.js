wurzel.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'app/home/home.html',
      controller  : 'homeController'
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
    .when('/run', {
      templateUrl : 'app/run/run.html',
      controller  : 'runController'
    })
    .when('/job', {
      templateUrl : 'app/job/job.html',
      controller  : 'jobController'
    })
  ;
});