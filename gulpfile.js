var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var tailwindcss = require('tailwindcss');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
      var plugins = [
        autoprefixer,
        tailwindcss
    ];
    return gulp.src('./src/*.css')
      .pipe(postcss(plugins))
      .pipe(browserSync.stream())
      .pipe(gulp.dest('./dest/css'));
  });

  function watch() { browserSync.init({
    server: {
    baseDir: './dest' }
    });

    gulp.watch('./dest/*.html').on('change', browserSync.reload);
    }

    exports.watch = watch;