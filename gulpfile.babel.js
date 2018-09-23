import gulp from "gulp";
import sass from "gulp-sass";
import cssnano from "gulp-cssnano";
import autoprefix from "gulp-autoprefixer";
import babel from "gulp-babel";
import concat from"gulp-concat";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import browserSync from "browser-sync";

const paths = {
  php: '**/*.php',
  scss: './app/scss/**/*.scss',
  scssCompile: './app/scss/main.scss',
  js: './app/js/*.js',
}

function handleError (error) {
  console.log(error.toString());
  this.emit('end');
}

// Initialize browser-syn on port 3000
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'http://localhost:8888/homekit/',
    injectChanges: true
  })
});

gulp.task('reload_browser', function (done) {
  browserSync.reload();
  done();
});

//on any php file change and save, reload browser
gulp.task('php_livereload', () => {
  return gulp.src(paths.php)
    // .pipe(browserSync.stream());
});

// Repurpose SCSS to CSS, add prefixes, minify CSS, rename to main.min.css, save it in Dist folder
gulp.task('sass_to_css', () => {
  return gulp.src(paths.scssCompile)
    .pipe(sass()).on('error', sass.logError)
		.pipe(autoprefix('last 2 version', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

//bundle all JS together, minifiy it, rename to bundle.min.js, save it inside Dist folder
gulp.task('bundle_js', () => {
  return gulp.src(paths.js)
    .pipe(concat('all.js'))
    .pipe(babel())
    .on('error', handleError)
    .pipe(rename('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ()=> {
  gulp.watch(paths.js, ['bundle_js']);
  gulp.watch(paths.scss, ['sass_to_css']);
  gulp.watch(paths.php, ['reload_browser']);
});

gulp.task('default',['browser-sync','watch']);
