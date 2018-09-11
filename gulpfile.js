
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
 return gulp.src('./src/assets/css/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/css/*.scss', ['sass']);
});
gulp.task('default', ['sass','sass:watch']);
