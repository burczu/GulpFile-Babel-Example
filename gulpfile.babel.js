import gulp from 'gulp';
import less from 'gulp-less';
import path from 'path';

gulp.task('less', () => {
  return gulp.src('./layout/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'layout', 'includes')]
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['less']);