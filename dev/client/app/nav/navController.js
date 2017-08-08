wurzel.controller('navController',function($scope,$location,dataService) {
  $scope.alertColor = 'default';
  $scope.sectionName = 'Home';

  function whereIam() {
    var pa = $location.path().replace("/","");
    $scope.gotoPage($scope.menuItems[pa]);
    $scope.$apply();
  }
  setTimeout(function(){whereIam();},123);

  $scope.menuItems = {
    home:     {path:'/'         ,name:'Home'    ,icon:'home'            ,color:'default'},
    config:   {path:'/config'   ,name:'Config'  ,icon:'table'           ,color:'success'},
    template: {path:'/template' ,name:'Template',icon:'file-text-o'     ,color:'warning'},
    data:     {path:'/data'     ,name:'Data'    ,icon:'database'        ,color:'primary'},
    job:      {path:'/job'      ,name:'Job'     ,icon:'cart-arrow-down' ,color:'info'   },
    run:      {path:'/run'      ,name:'Run'     ,icon:'play'            ,color:'danger' },
  };
  
  $scope.gotoPage = function(where) {
    if(!where||false) return;
    $scope.alertColor = where.color;
    $scope.sectionName = where.name;
    $location.path(where.path);
  };

});