const gulp = require('gulp')
const less = require('gulp-less')

// converts less file to css and pipes it to a new folder.
gulp.task('less', function () {
  gulp.src('less/main.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
})

// sets all tasks to run automatically as files change. Enter gulp at CLI once and gulp.watch runs continuously. Now, whenever I save changes to the less file, the css file is updated.
gulp.task('default', function () {
  gulp.watch('less/*.less', ['less'])
})
