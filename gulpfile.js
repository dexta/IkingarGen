var gulp        = require('gulp');
var concat      = require('gulp-concat');
var browserSync = require('browser-sync').create();
var pump        = require('pump');
var htmlreplace = require('gulp-html-replace');
var runSequence = require('run-sequence');
var spawn       = require('child_process');
var clean       = require('gulp-clean');



var requireDir = require('require-dir');
requireDir('./gulpTasks');


// 
// gulpfile self autoreload
// 
gulp.task('gulp-autoreload',function(){
  var p;

  gulp.watch(['gulpfile.js','gulpTasks/**/*.js'], spawnChildren);
  spawnChildren();
  function spawnChildren(e) {
    if(p) {
      p.kill();
    }
    p = spawn.spawn('gulp',['watch-dev'], {stdio: 'inherit'});
  }

  });