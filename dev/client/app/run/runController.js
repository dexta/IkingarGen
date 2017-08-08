wurzel.controller('runController',function($scope,dataService,dotService) {
  $scope.config = {};
  dataService.getConfig().then(function(config){
    $scope.config = config.job;
  });
  $scope.job = {};
  dataService.getJobs().then(function(data){
    $scope.job = data;
  });

  $scope.template = [];
  dataService.getTemplate().then(function(template){
    $scope.template = template.map(function(e){ return e.name;});
  });

  $scope.output = ['browser','files','files/zip'];
  $scope.outputSelected = 'browser';
  $scope.textOutput = "test";

  $scope.runJob = function runJob() {
    dataService.getAllStates().then(function(state){
      var template = dotService.findName(state.template,"name","icingaHTTP");

      dotService.setTemplate(template.text);
      var mergeData = dotService.metaOnion(state.meta[0],state.data);
      console.dir(mergeData);
      dotService.setData({data:mergeData});
      dotService.getRenderResult().then(function(outTemplate){
        $scope.textOutput = outTemplate;
      });
    });
    
  };
});