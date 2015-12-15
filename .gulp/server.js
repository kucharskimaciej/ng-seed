var gulp = require('gulp');
var connect = require('gulp-connect');
var cors = require('cors');
var cfg = require('./config');

gulp.task('server', function Server () {

    connect.server({
      root: cfg.paths.build,
      middleware: function() {
          return [cors()];
      },
      port: 3001,
      livereload: true
    });
});
