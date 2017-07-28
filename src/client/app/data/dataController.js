wurzel.controller('dataController',function($scope,dataService) {
  $scope.tmp = true;
  
  // $scope.tableHeads = ['URL','Teststr','Size','Time'];
  // $scope.tableCont = [
  //   {URL:'http://test.test/test1',Teststr:'TEST',Size:'4223',Time:'1.0'},
  //   {URL:'https://test.test/test2',Teststr:'TEST2',Size:'64223',Time:'0.5'},
  //   {URL:'http://test3.test/test3',Teststr:'noTEXT',Size:'500',Time:'2.0'},
  //   {URL:'https://test5.test6/test7',Teststr:'TEST8',Size:'864223',Time:'23.0'}
  // ];
  $scope.tableConfig = {};
  dataService.getConfig().then(function(config){
    $scope.tableConfig = config;
    console.dir(config);
  });
  $scope.tableCont = {};
  dataService.getData().then(function(data){
    $scope.tableCont = data;
  });

  $scope.updateData = function updateData(index,line) {
    $scope.tableCont[index] = line;
    dataService.setData($scope.tableCont);
  };

  $scope.openLine = function openLine(index) {
    console.log(index);
  };
  $scope.getLen = function getLen(obj) {
    var c = [];
    for(var i in obj) c.push(i);
    return c.length;
  }
});