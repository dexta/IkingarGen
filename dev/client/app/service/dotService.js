wurzel.service('dotService', function($q) {
  var that = this;
  this.template = ``;
  this.data = {};
  this.compiledTemplate = {};
  this.generatedTemplate = "";

  this.findName = function(obj,key,value) {
    for(var o in obj) {
      if(obj[o][key]===value||false) {
        if(obj[o][key]===value) return obj[o];
      }
    }
  };

  this.metaOnion = function metaOnion(meta,data) {
    var neData = [];
    for(var d in data) {
      neData[d] = data[d];
      for(m in meta) {
        if(!data[d][m]||false) {
          neData[d][m] = meta[m];
        }
      }
    }
    return neData;
  };

  this.setTemplate = function setTemplate(template) {
    this.compiledTemplate = doT.template(template);
  };

  this.setData = function setData(data) {
    console.dir(data);
    this.generatedTemplate = this.compiledTemplate(data);
  };

  this.getRenderResult = function getRenderResult() {
    return $q.when(that.generatedTemplate);
  };

});