wurzel.service('dataService', function($q) {
  var that = this;
  var defer = $q.defer();
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
    meta: {
      view: {
        pre: {'host':true,'name':true,'Follow':true,'Size':true,'Time':true},
        full: {'host':true,'name':true,'Follow':true,'Size':true,'Teststr':true,'Time':true},
      },
      edit: {
        host: {len:64,type:'String'},
        name: {len:42,type:'String'},
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
        meta: {len:23,type:'Select',options:['none','meta']},
        data: {len:23,type:'Select',options:['none','data']},
        template: {len:42,type:'Select',options:[]}
      }
    }
  };

  this.state = {
    data: [
      {URL:'http://test.test/test1',Follow:'allways',Teststr:'TEST',Size:'4223',Time:'1.0'},
      {URL:'https://test.test/test2',Follow:'allways',Teststr:'TEST2',Size:'64223',Time:'0.5'},
      {URL:'http://test3.test/test3',Follow:'allways',Teststr:'noTEXT',Size:'500',Time:'2.0'},
      {URL:'https://test5.test6/test7',Follow:'allways',Teststr:'TEST8',Size:'864223',Time:'23.0'}
    ],
    meta: [
      {host:'linuxHost01',name:'test01',Follow:'allways',Teststr:'<title>',Size:'4096',Time:'4.2'},
      {host:'linuxHost02',name:'test02',Follow:'never',Teststr:'<body>',Size:'8193',Time:'23.5'},
    ],
    job: [
      {name: 'test1',meta:'metaset1',data:'data1',template:'icingaHTTP'},
      {name: 'test2',meta:'metaset2',data:'data2',template:'test2.dot'},
      {name: 'test3',meta:'metaset3',data:'data3',template:'test3.dot'},
      {name: 'test4',meta:'metaset4',data:'data4',template:'test4.dot'},
      {name: 'test5',meta:'metaset5',data:'data5',template:'test5.dot'},
      {name: 'test6',meta:'metaset6',data:'data6',template:'test6.dot'},
    ],
    template: [
      {name:'simple', text: "{{=it.name}}\n" },
      {name:'icingaHTTP', text: `{{~it.data :value:index}}
  object Service "{{=value.URL}}" {
    host_name = "{{=value.host}}"
    check_command = "http_check"
    vars.follow = "{{=value.Follow}}"
    vars.string = "{{=value.Teststr}}"
    vars.size = "{{=value.Size}}"
    vars.time = "{{=value.Time}}"
  }
{{~}}` }
    ]
  }

  this.getAllStates = function getAllStates() {
    return $q.when(that.state);
  };

  this.getConfig = function getConfig() {
    return $q.when(that.configData);
  };

  this.setConfig = function setConfig(changeObj) {
    that.configData = changeObj;
  };

  this.getTemplate = function getTemplate() {
    return $q.when(that.state.template);
  };

  this.setTemplate = function setState(changeObj) {
    that.state.template = changeObj;
  };  

  this.getData = function getData() {
    return $q.when(that.state.data);
  };

  this.setData = function setData(newData) {
    that.state.data = newData;
  };

  this.getMeta = function getMeta() {
    return $q.when(that.state.meta);
  };

  this.setMeta = function setMeta(newMeta) {
    that.state.meta = newMeta;
  };

  this.getJobs = function getJobs() {
    return $q.when(that.state.job);
  };

  this.setJobs = function setJobs(jobs) {
    that.state.job = jobs;
  };

})