// I have installed Gulp and its two plugins from the command line. Note that Gulp and its plugins are automatically added to the package.json file.
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const del = require('del')

// cleans out the dist folder before concat and uglify create a new one.
gulp.task('clean', function () {
  del(['dist/*.js'])
})

// this task concatenates two js files, pipes them to a new file titled app.js, and puts app.js in a new directory titled dist. Note that clean is a dependency.
gulp.task('concat', ['clean'], function () {
  return gulp.src(['scripts/utils.js', 'scripts/main.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'))
})

// uglifies the js file. Note that concat is a dependency, and must run before uglify. Since the code is piped back into the dist directory it will overwrite app.js with the newly uglified code.
gulp.task('uglify', ['concat'], function () {
  return gulp.src('dist/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

// call gulp uglify in the CLI, and both tasks will run because of the dependency.
