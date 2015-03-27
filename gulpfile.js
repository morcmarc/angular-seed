var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var connect    = require('gulp-connect');
var uglify     = require('gulp-uglify');

gulp.task('connect', function() {
  connect.server({
    root       : 'public',
    livereload : true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./public/*.html', './src/**/*.js'], ['brwsrfy', 'compress']);
});

gulp.task('brwsrfy', function() {
  gulp.src('src/app.js')
    .pipe(browserify({
      insertGlobals : false,
      debug         : true
    }))
    .pipe(gulp.dest('./public/js'))
    .pipe(connect.reload());
});

gulp.task('compress', function() {
  gulp.src('public/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/dist'))
});

gulp.task('default', ['connect', 'watch']);