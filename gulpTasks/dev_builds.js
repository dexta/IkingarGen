var gulp        = require('gulp');
var pump        = require('pump');
var clean       = require('gulp-clean');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

gulp.task('cleanDev',function(cb) {
  pump([
    gulp.src('dev/client/',{read: false}),
    clean()
    ],cb);
  });

gulp.task('build-dev-all',['cleanDev'],function(cb) {
  pump([
    gulp.src('src/client/**/*.*'),
    gulp.dest('./dev/client/')
    ],cb);
  });


gulp.task('copy-dev-index',function(cb) {
  pump([
    gulp.src('src/client/index.html'),
    gulp.dest('./dev/client/')
    ],cb);
  });

gulp.task('copy-dev-index-reload',['copy-dev-index'],function(done) {
  browserSync.reload();
  done();
  });



gulp.task('copy-dev-css-app',function(cb) {
  pump([
    gulp.src('src/client/css/*.css'),
    gulp.dest('./dev/client/css/')
    ],cb);
  });

gulp.task('copy-dev-css-app-reload',['copy-dev-css-app'],function(done) {
  browserSync.reload();
  done();
  });


gulp.task('copy-dev-js-app',function(cb) {
  pump([
    gulp.src('src/client/app/**/*.js'),
    gulp.dest('./dev/client/app/')
    ],cb);
  });

gulp.task('copy-dev-js-app-reload',['copy-dev-js-app'],function(done) {
  browserSync.reload();
  done();
  });


gulp.task('copy-dev-js-libs-app',function(cb) {
  pump([
    gulp.src('src/client/js/**/*.js'),
    gulp.dest('./dev/client/js/')
    ],cb);
  });

gulp.task('copy-dev-js-libs-reload',['copy-dev-js-libs-app'],function(done) {
  browserSync.reload();
  done();
  });


gulp.task('copy-dev-html-app',function(cb) {
  pump([
    gulp.src('src/client/app/**/*.html'),
    gulp.dest('./dev/client/app/')
    ],cb);
  });

gulp.task('copy-dev-html-app-reload',['copy-dev-html-app'],function(done) {
  browserSync.reload();
  done();
  });


gulp.task('copy-dev-fonts',function(cb) {
  pump([
    gulp.src('src/client/fonts/*.*'),
    gulp.dest('./dev/client/fonts/')
    ],cb);
  });

gulp.task('copy-dev-fonts-reload',['copy-dev-fonts'],function(done) {
  browserSync.reload();
  done();
  });

gulp.task('copy-dev-uib',function(cb) {
  pump([
    gulp.src('src/client/uib/**/*.*'),
    gulp.dest('./dev/client/uib/')
    ],cb);
  });

gulp.task('copy-dev-uib-reload',['copy-dev-uib'],function(done) {
  browserSync.reload();
  done();
  });


gulp.task('browser-sync-dev', function() {
  browserSync.init({
    server: {
      baseDir: './dev/client/'
    }
  });
 });

gulp.task('reWatch-dev',['build-dev-all'],function(done){
  browserSync.reload();
  done();
  });

gulp.task('devReload',function(done){
  browserSync.reload();
  done();
  });


gulp.task('watch-dev',['build-dev-all','browser-sync-dev'],function(){
  gulp.watch("src/client/index.html", ['copy-dev-index-reload']);
  gulp.watch("src/client/css/*.css", ['copy-dev-css-app-reload']);
  gulp.watch("src/client/app/**/*.js", ['copy-dev-js-app-reload']);
  gulp.watch("src/client/app/**/*.html", ['copy-dev-html-app-reload']);
  gulp.watch("src/client/js/**/*.js", ['copy-dev-js-libs-reload']);
  gulp.watch("src/client/fonts/*.*", ['copy-dev-fonts-reload']);
  gulp.watch("src/client/uib/*.*", ['copy-dev-uib-reload']);
  // gulp.watch("src/img/live/*.*", ['copy-dev-images-reload']);
  });
