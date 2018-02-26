// NOTE: I am using the const keyword, but I am not using the full ES6 syntax for this gulpfile. Check out https://github.com/gulpjs/gulp for ES6 in a gulpfile.

// requiring in Gulp and its plugins
const gulp = require('gulp')
const uglify = require('gulp-uglify')

/*
// example that simply pipes code from one directory to another, creating the new dist directory with main.js in it. If I update the original file and call Gulp again in the terminal, Gulp updates the piped file.
gulp.task('default', function () {
  gulp.src('app/*')
    .pipe(gulp.dest('dist'))
})
*/

/*
// defining the uglify task
gulp.task('uglify', function () {
  // task code goes here
})
*/

/*
gulp.src() // fetches a group of files
gulp.dest() // writes code to a new directory. src and dest work together. Example below.
*/

// using the uglify plugin and piping uglified code to a new file and directory. I can either run gulp js to specifically run the js task, or I can run gulp since js is listed as a default below.
gulp.task('js', function () {
  const src = gulp.src('app/main.js')
  const dest = gulp.dest('dist')

  return src
    .pipe(uglify())
    .pipe(dest)
})

// default tasks run every time the command gulp is entered into the terminal
gulp.task('default', ['js'])
