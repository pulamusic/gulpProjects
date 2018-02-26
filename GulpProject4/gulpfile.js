const gulp = require('gulp')
const sync = require('browser-sync')

// sets up the browser-sync task to run by default. Adding the gulp.watch command makes the browser reload automatically when changes to index.html are saved.
gulp.task('default', function () {
  sync({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('index.html', sync.reload)
})
