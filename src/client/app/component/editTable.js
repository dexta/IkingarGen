wurzel.component('edta', {
  transclude: true,
  bindings: {
    etConfig: '=',
    etContent: '=',
    updata: '='
  },
  templateUrl: 'app/component/editTable.html',
  controllerAs: 'et',
  controller: function() {
    this.isOpen = false;
    this.$onInit = function() {
      console.dir(this);
    }
  }

});