import gulp from 'gulp';
import less from 'gulp-less';
import path from 'path';

const lessIncludes = [path.join(__dirname, 'layout', 'includes')];

gulp.task('less', () => {
  return gulp.src('./layout/**/*.less')
    .pipe(less({
      paths: lessIncludes
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['less']);