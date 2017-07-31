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
    data: {
      view: {
        pre: {'URL':true,'Follow':true,'Size':true,'Time':true},
        full: {'URL':true,'Follow':true,'Size':true,'Teststr':true,'Time':true},
      },
      edit: {
        URL: {len:42,type:'String'},
        Follow: {len: 9,type:'Select',options:['never','allways','just301','onestep']},
        Teststr: {len:23,type:'String'},
        Size: {len: 6,type:'Int'},
        Time: {len: 3,type:'Float'}
      }
    },
    job: { 
      view: {
        pre: {name:true,meta:true,data:true,template:true},
        full: {name:true,meta:true,data:true,template:true}
      },
      edit: {
        name: {len:42,type:'String'},
        meta: {len:23,type:'Select',options:[]},
        data: {len:23,type:'Select',options:[]},
        template: {len:42,type:'Select',options:[]}
      }
    }
  };
  this.jobList = [
    {name: 'test1',meta:'metaset1',data:'data1',template:'test1.dot'},
    {name: 'test2',meta:'metaset2',data:'data2',template:'test2.dot'},
    {name: 'test3',meta:'metaset3',data:'data3',template:'test3.dot'},
    {name: 'test4',meta:'metaset4',data:'data4',template:'test4.dot'},
    {name: 'test5',meta:'metaset5',data:'data5',template:'test5.dot'},
    {name: 'test6',meta:'metaset6',data:'data6',template:'test6.dot'},
  ];
  this.foo = 0;

  this.observeFoo = function() {
    return defer.promise;
  };

  this.setFoo = function() {
    that.foo++;
    defer.notify(that.foo);
  };

  this.getConfig = function getConfig() {
    return $q.when(that.configData);
  };

  this.setConfig = function setConfig(changeObj) {
    that.configData = changeObj;
  };

  this.getData = function getData() {
    return $q.when(that.listData);
  };

  this.setData = function setData(newData) {
    that.listData = newData;
  };

  this.getJobs = function getJobs() {
    return $q.when(that.jobList);
  };

  this.setJobs = function setJobs(jobs) {
    that.jobList = jobs;
  }

})