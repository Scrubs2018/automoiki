// Generated by CoffeeScript 1.9.0
(function() {
  var gulp;

  gulp = require('gulp');

  gulp.task('default', ['clean'], function() {
    return gulp.start('watch', 'connect', 'jade', 'copy', 'sprite', 'stylus', 'imagemin', 'javascript', 'css', 'ttf2woff');
  });

}).call(this);
