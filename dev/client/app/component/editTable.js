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
    },
    this.getLen = function getLen(obj) {
      var c = [];
      for(var i in obj) c.push(i);
      return c.length;
    }
  }

});