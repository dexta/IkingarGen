wurzel.service('dataService', function($q) {
  var that = this;
  var defer = $q.defer();
  this.listData = [
    {URL:'http://test.test/test1',Follow:'allways',Teststr:'TEST',Size:'4223',Time:'1.0'},
    {URL:'https://test.test/test2',Follow:'allways',Teststr:'TEST2',Size:'64223',Time:'0.5'},
    {URL:'http://test3.test/test3',Follow:'allways',Teststr:'noTEXT',Size:'500',Time:'2.0'},
    {URL:'https://test5.test6/test7',Follow:'allways',Teststr:'TEST8',Size:'864223',Time:'23.0'}
    ];
  this.configData = {
    view: {
      pre: {'URL':true,'Size':true,'Time':true},
      full: {'URL':true,'Size':true,'Teststr':true,'Time':true},
    },
    edit: {
      URL: {len:42,type:'String'},
      Follow: {len: 9,type:'Select',options:['never','allways','just301','onestep']},
      Teststr: {len:23,type:'String'},
      Size: {len: 6,type:'Int'},
      Time: {len: 3,type:'Float'}
    }
  }
  this.foo = 0;

  this.observeFoo = function() {
    return defer.promise;
  }

  this.setFoo = function() {
    that.foo++;
    defer.notify(that.foo);
  }

  this.getConfig = function getConfig() {
    return $q.when(that.configData);
  }

  this.setConfig = function setConfig(changeObj) {
    for(var co in changeObj) {
      that.configData[co] = changeObj[co];
    }
  }
})