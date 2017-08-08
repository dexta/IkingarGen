wurzel.controller('dataController',function($scope,dataService) {
  $scope.dataConfig = {};
  dataService.getConfig().then(function(config){
    $scope.dataConfig = config.data;
    console.dir(config);
  });
  $scope.dataContent = {};
  dataService.getData().then(function(data){
    $scope.dataContent = data;
  });

  $scope.dataUpdate = function updateData(index,line) {
    $scope.dataContent[index] = line;
    dataService.setData($scope.dataContent);
  };

  $scope.metaConfig = {};
  dataService.getConfig().then(function(config){
    $scope.metaConfig = config.meta;
    console.dir(config);
  });

  $scope.metaContent = [];
  dataService.getMeta().then(function(meta){
    $scope.metaContent = meta;
  });
  
  $scope.metaUpdate = function updateData(index,line) {
    $scope.metaContent[index] = line;
    dataService.setMeta($scope.metaContent);
  };  
});