var gulp        = require('gulp'),
  jshintStyle   = require('jshint-stylish'),
  jsonlint      = require('gulp-jsonlint'),
  path          = require('path');

gulp.task('jsonlint', function() {
  return gulp.src('./characters.json')
    .pipe(jsonlint())
    .pipe(jsonlint.reporter(jshintStyle));
});

gulp.task('watch', function() {
  gulp.watch('./characters.json', ['jsonlint']);
});

gulp.task('default', ['watch']);