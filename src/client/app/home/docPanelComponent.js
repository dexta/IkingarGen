wurzel.component('docPanel', {
  transclude: true,
  bindings: {
    cont: '<'
  },
  template: 
    `<div class="panel-{{doc.cont.color}} col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <div class="panel-heading">
        <h3>{{doc.cont.title}}</h3>
      </div>
      <div class="panel-body">
        <p>
          {{doc.cont.subtitle}}
        </p>
      </div>
      <ul class="list-group"> 
        <li class="list-group-item" ng-repeat="litem in doc.cont.maintext" ng-bind="litem">
        </li>
      </ul>

      <button type="button" class="btn btn-default pull-left" 
              ng-click="doc.extGoto(doc.cont.extlinkhref)"
              ng-if="doc.cont.extlinktext!=''">
      
        {{doc.cont.extlinktext}}
      </button>

      <button type="button" class="btn btn-{{doc.cont.color}} pull-right" 
              ng-click="doc.navGoto(doc.cont.internlinkhref)"
              ng-if="doc.cont.internlinktext!=''">
      
        {{doc.cont.internlinktext}}
      </button>
    
    </div>`,
  controllerAs: 'doc',
  controller: function($location) {
    this.$onInit = function() {
      console.dir(this);
    },
    this.navGoto = function navGoto(target) {
      console.log(target);
      $location.path(target);
    };
    this.extGoto = function extGoto(target) {
      console.log("extGoto "+target);
      var win = window.open(target, 'extDocument');
      win.focus();
    }
  }
});