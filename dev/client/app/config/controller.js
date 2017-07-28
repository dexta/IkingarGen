wurzel.controller('configController',function($scope, dataService) {
  $scope.tmp = true;
  $scope.count = 0;
  $scope.addOne = function addOne() {
    dataService.setFoo(++$scope.count);
  }

  // $scope.confView = {};
  $scope.tConf = {};
  dataService.getConfig().then(function(config){
    $scope.tConf = config;
    // for(var c in config.view) {
    //   $scope.confView[c] = {};
    //   for(var v in config.view[c]) {
    //     $scope.confView[c][ config.view[c][v] ] = true;
    //   }
    // }
    console.dir($scope.tConf);
  });

  $scope.saveOpt = function saveOpt() {
    // console.dir($scope.confView);
    // let uPre = [];
    // for(var o in $scope.confView.pre) {
    //   if($scope.confView.pre[o]) uPre.push(o);
    // }

    // let nCon = {view: {pre:uPre,full:$scope.tConf.view.full}};
    dataService.setConfig(that.tConf);
  }

});