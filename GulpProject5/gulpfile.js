const gulp = require('gulp')
const less = require('gulp-less')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const replace = require('gulp-html-replace')
const sync = require('browser-sync')

gulp.task('less', function () {
  return gulp.src('app/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('app/css'))
})

gulp.task('html', function () {
  return gulp.src('app/index.html')
    .pipe(replace({
      js: 'js/app.js'
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('concat', function () {
  return gulp.src(['app/scripts/utils.js', 'app/scripts/main.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('uglify', ['concat'], function () {
  return gulp.src('dist/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('serve', function () {
  sync({
    server: {
      baseDir: 'app'
    }
  })
  gulp.watch('app/less/*.less', ['less', sync.reload])
})

gulp.task('default', ['less', 'uglify', 'html'])
