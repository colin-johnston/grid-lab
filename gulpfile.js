
const gulp        = require('gulp');

// const connect     = require('gulp-connect-php');
const browsersync = require('browser-sync');

// const configs = {
//   src: 'src/',
//   dist: 'dist/'
// }

// const paths = {
// }

// var reload = browserSync.reload;

// function serve(cb) {
//   connect.server({}, function (){
//     browsersync.init({
//       proxy: '127.0.0.1:8000'
//     });
//   });
//   cb();
// }

function reload(cb){
  browsersync.reload();
  cb();
}

const watchCSS = () => gulp.watch('./**/*.css', reload);
// const watchNJK = () => gulp.watch('./**/*.njk', reload);

const dev = gulp.series(serve, watchCSS);
exports.default = dev;
