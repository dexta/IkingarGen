wurzel.controller('templateController',function($scope) {
  $scope.tmp = true;
  $scope.templateFiles = [
      {name:'simple', text: "{{=it.name}}\n" },
      {name:'test', text: "function nameDrop(name) { console.log(name); }" }
    ];
  $scope.selectedFile = {name:'',text:''};
  $scope.editorMode = 'javascript';
  $scope.editor = {};



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
    selected: ''
  };

  $scope.themeOpts = {
    name: 'Theme',
    state: 'theme',
    baseStr: 'ace/theme/',
    list: ['ambiance','chaos','chrome','clouds','clouds_midnight','cobalt','crimson_editor','dawn','dreamweaver','eclipse','github','gob','gruvbox','idle_fingers','iplastic','katzenmilch','kr_theme','kuroir','merbivore','merbivore_soft','mono_industrial','monokai','pastel_on_dark','solarized_dark','solarized_light','sqlserver','terminal','textmate','tomorrow','tomorrow_night_blue','tomorrow_night_bright','tomorrow_night_eighties','tomorrow_night','twilight','vibrant_ink','xcode'],
    selected: ''
  }

  $scope.fontOpts = {
    name: 'Font Size',
    state: 'fontsize',
    list: [8,10,12,14,16,18,22,32],
  }

  $scope.modeList = ['apache_conf','css','dockerfile','dot','gitignore','javascript','json','markdown','mysql','php','plain_text','python','sh','html'];
  $scope.selectedMode = '';
  $scope.updateMode = function updateMode() {
    console.log("mode "+$scope.selectedMode);
    $scope.editor.setOption('mode','ace/mode/'+$scope.selectedMode);
  }

  $scope.themeList = ['ambiance','chaos','chrome','clouds','clouds_midnight','cobalt','crimson_editor','dawn','dreamweaver','eclipse','github','gob','gruvbox','idle_fingers','iplastic','katzenmilch','kr_theme','kuroir','merbivore','merbivore_soft','mono_industrial','monokai','pastel_on_dark','solarized_dark','solarized_light','sqlserver','terminal','textmate','tomorrow','tomorrow_night_blue','tomorrow_night_bright','tomorrow_night_eighties','tomorrow_night','twilight','vibrant_ink','xcode'];
  $scope.selectedTheme = '';
  $scope.updateTheme = function updateMode() {
    console.log("mode "+$scope.selectedTheme);
    $scope.editor.setOption('theme','ace/theme/'+$scope.selectedTheme);
  }

  $scope.fontSizeList = [8,10,12,14,16,18,22,32];
  $scope.selectedFontSize = '';
  $scope.updateFontSize = function updateMode() {
    console.log("fontsize "+$scope.selectedFontSize);
    $scope.editor.setFontSize(parseInt($scope.selectedFontSize));
  }

});