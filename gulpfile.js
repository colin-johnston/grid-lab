
const gulp        = require('gulp');

// const connect     = require('gulp-connect-php');
const browsersync = require('browser-sync');

// const configs = {
//   src: 'src/',
//   dist: 'dist/'
// }

// const paths = {
// }

// function serve(cb) {
//   connect.server({}, function (){
//     browsersync.init({
//       proxy: '127.0.0.1:8000'
//     });
//   });
//   cb();
// }

// CSS
// placeholder css function 
function css(cb) {
  cb();
}

// RELOAD
function reload(cb){
  browsersync.reload();
  cb();
}

// WATCH
const watchCSS = () => gulp.watch('./**/*.css', reload);

//DEFAULT TASK
const dev = gulp.series(css, watchCSS);
exports.default = dev;
