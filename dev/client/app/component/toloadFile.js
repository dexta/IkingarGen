wurzel.component('fileToLoad', {
  transclude: true,
  bindings: {
    color: '<',
    showUpdate: '=',
  },
  template: 
    ` <div class="input-group">
        <span class="input-group-btn">
          <label class="btn btn-{{ftl.color}} btn-file">
            Load File
            <input type="file" on-read-file="ftl.showContent($fileContent,$filename)" style="display:none;">
          </label>
        </span>
        <input class="form-control" readonly type="text" ng-model="ftl.filenameLoad">
      </div>`,
  controllerAs: 'ftl',
  controller: function() {
    this.test = 'moreText';
    this.$onInit = function() {
      this.filenameLoad = "<- klick to load"
      console.dir(this);
    },
    this.showContent = function(filecontent,filename) {
      console.log(filename,filecontent);
      this.filenameLoad = filename;
      this.showUpdate(filecontent,filename);
    }
  }
})
.directive('onReadFile', function ($parse) {
  return {
    restrict: 'A',
    scope: false,
    link: function(scope, element, attrs) {
      var fn = $parse(attrs.onReadFile);
      var filename = 'nixText.txt';
      element.on('change', function(onChangeEvent) {
        var reader = new FileReader();
                
        reader.onload = function(onLoadEvent) {
          console.dir(onLoadEvent);
          scope.$apply(function() {
            fn(scope, {$fileContent:onLoadEvent.target.result,$filename:filename});
          });
        };
        var files = (onChangeEvent.srcElement || onChangeEvent.target).files[0];
        filename = files.name;
        reader.readAsText(files);
        // console.dir((onChangeEvent.srcElement || onChangeEvent.target).files);
      });
    }
  };
});