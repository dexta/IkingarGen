wurzel.component('aceOptList', {
  transclude: true,
  bindings: {
    aceOpts: '<',
    editor: '=',
  },
  template: 
      `<div class="input-group">
        <span class="input-group-addon">{{optHelper.aceOpts.name}}</span>
        <select class="form-control" ng-change="optHelper.updateMode()" ng-model="optHelper.aceOpts.selected"> 
          <option ng-repeat="mode in optHelper.aceOpts.list">{{mode}}</option>
        </select>
      </div>`,
  controllerAs: 'optHelper',
  controller: function() {
    this.test = 'moreText';
    this.$onInit = function() {
      // console.dir(this);
      this.updateMode(this.aceOpts.selected);
    },
    this.updateMode = function updateMode() {
      // console.log("mode "+this.aceOpts.selected);
      if(this.aceOpts.state==='fontsize') {
        this.editor.setFontSize( parseInt(this.aceOpts.selected) );
      } else {
        this.editor.setOption(this.aceOpts.state,this.aceOpts.baseStr+this.aceOpts.selected);
      }
    };
  }
});
