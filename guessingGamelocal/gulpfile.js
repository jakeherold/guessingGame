var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');
var gutil  = require('gulp-util');

gulp.task('lint', function(){
  return gulp
    .src(['gulpfile.js', 'src/*.js', 'test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function(){
  return gulp
    .src('test/*.js')
    .pipe(mocha());
});

gulp.task('default', ['lint', 'test'], function(){
  gulp.watch(['src/*.js', 'test/*.js'], function(){
    gulp.run('lint', 'test');
  });
});

gulp.task('default', function(){
  return gutil.log('Gulp is running!')
});
