wurzel.controller('navController',function($scope,$location,dataService) {
  $scope.menuOpen = true;
  // $scope.foo = -1;

  $scope.menuItems = {
    home: {path:'/',name:'Home',icon:'home',color:'success'},
    config: {path:'/config',name:'Config',icon:'table',color:'warning'},
    template: {path:'/template',name:'Template',icon:'file-text-o',color:'info'},
    data: {path:'/data',name:'Data',icon:'database',color:'danger'},
    run: {path:'/run',name:'Run',icon:'play',color:'primary'},
    job: {path:'/job',name:'Job',icon:'cart-arrow-down',color:'default'}
  };
  
  $scope.gotoPage = function(where) {
    $location.path(where);
  };

  // dataService.observeFoo().then(null,null,function(foo){
  //   $scope.foo = foo;
  // });
});