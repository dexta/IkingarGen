wurzel.controller('configController',function($scope, dataService) {
  $scope.tConf = {};
  dataService.getConfig().then(function(config){
    $scope.tConf = config;
    console.dir($scope.tConf);
  });

  $scope.saveOpt = function saveOpt() {
    dataService.setConfig($scope.tConf);
  }
  $scope.updateData = function updateData() {
    console.dir($scope.tConf);
  }
});