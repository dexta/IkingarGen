wurzel.controller('jobController',function($scope,dataService) {
  $scope.jobList = [
    {name: 'test1', template: 'dot.js', data: {url:"http://test.test/test",follow:'allways',size:52342},meta: {time:"2.0"}},
    {name: 'test2', template: 'dot.js', data: {url:"https://test.test/test",follow:'allways',size:92342},meta: {time:"1.0"}},
  ];
  $scope.config = {};
  dataService.getConfig().then(function(config){
    $scope.config = config.job;
    updateConfigTemplate();
  });
  $scope.content = {};
  dataService.getJobs().then(function(data){
    $scope.content = data;
  });

  $scope.template = [];
  dataService.getTemplate().then(function(template){
    $scope.template = template.map(function(e){ return e.name;});
    updateConfigTemplate();
  });

  $scope.updateData = function updateData(index,line) {
    console.log(index,line);
  };

  function updateConfigTemplate() {
    if( ($scope.config.edit||false) && ($scope.template.length>0||false) ) {
      $scope.config.edit.template.options = $scope.template;
    }
  }
});