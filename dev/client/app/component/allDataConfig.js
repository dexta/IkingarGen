wurzel.component('allDataConfig', {
  transclude: true,
  bindings: {
    config: '=',
    color: '<',
    update: '='
  },
  templateUrl: 'app/component/allDataConfig.html',
  controllerAs: 'adc',
  controller: function() {
    this.isOpen = false;
    this.$onInit = function() {
      console.dir(this);
    }
  }

});