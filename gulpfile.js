var gulp        = require('gulp'),
  sass          = require('gulp-sass'),
  minifyCSS     = require('gulp-minify-css'),
  rename        = require('gulp-rename'),
  jshintStyle   = require('jshint-stylish'),
  jsonlint      = require('gulp-jsonlint'),
  path          = require('path');

gulp.task('jsonlint', function() {
  return gulp.src('./characters.json')
    .pipe(jsonlint())
    .pipe(jsonlint.reporter(jshintStyle));
});

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('./characters.json', ['jsonlint']);
});

gulp.task('default', ['watch']);