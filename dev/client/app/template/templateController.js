wurzel.controller('templateController',function($scope,dataService) {
  $scope.tmp = true;
  $scope.templateFiles = [];
  $scope.selectedFile = {name:'',text:''};
  $scope.editorMode = 'javascript';
  $scope.editor = {};

  dataService.getTemplate().then(function(template){
    $scope.templateFiles = template;
    console.dir(template);
  });
  $scope.updateTemplate = function updateTemplate() {
    dataService.setTemplate($scope.templateFiles);
  };

  $scope.updateEditor = function updateEditor() {
    console.dir($scope.selectedFile);
  }
  
  $scope.aceLoaded = function aceLoaded(_editor) {
    $scope.editor = _editor;
    console.dir(_editor);
  };

  $scope.modeOpts = {
    name: 'Mode',
    state: 'mode',
    baseStr: 'ace/mode/',
    list: ['apache_conf','css','dockerfile','dot','gitignore','javascript','json','markdown','mysql','php','plain_text','python','sh','html'],
    selected: 'dot'
  };

  $scope.themeOpts = {
    name: 'Theme',
    state: 'theme',
    baseStr: 'ace/theme/',
    list: ['ambiance','chaos','chrome','clouds','clouds_midnight','cobalt','crimson_editor','dawn','dreamweaver','eclipse','github','gob','gruvbox','idle_fingers','iplastic','katzenmilch','kr_theme','kuroir','merbivore','merbivore_soft','mono_industrial','monokai','pastel_on_dark','solarized_dark','solarized_light','sqlserver','terminal','textmate','tomorrow','tomorrow_night_blue','tomorrow_night_bright','tomorrow_night_eighties','tomorrow_night','twilight','vibrant_ink','xcode'],
    selected: 'terminal'
  }

  $scope.fontOpts = {
    name: 'Font Size',
    state: 'fontsize',
    list: [8,10,12,14,16,18,22,32],
    selected: '14'
  }

  $scope.showContent = function($fileContent,$filename){
    $scope.templateFiles.push({ name:$filename, text: $fileContent });
  };

  $scope.filenameNew = "new filename";
  $scope.addNewFile = function addNewFile() {
    $scope.templateFiles.push({ name:$scope.filenameNew, text: $scope.selectedFile.text });
  };

});