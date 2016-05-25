var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssnext = require('gulp-cssnext');

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cssnext({
      browsers: "iOS 8"
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
});
