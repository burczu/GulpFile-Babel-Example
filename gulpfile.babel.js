import gulp from 'gulp';
import less from 'gulp-less';
import path from 'path';

gulp.task('less', () => {
  return gulp.src('./layout/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./build/css'));
});