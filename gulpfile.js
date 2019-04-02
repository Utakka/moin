const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel        = require('gulp-babel');
const plumber      = require('gulp-plumber');
const uglify       = require('gulp-uglify');
const concat       = require('gulp-concat');


// copy vendor files
gulp.task('vendor', function(cb) {

  // swiper and require.js
  gulp.src(['node_modules/swiper/dist/js/swiper.min.js','node_modules/requirejs/require.js'], { base: 'node_modules' })
    .pipe(uglify())
    .pipe(gulp.dest('web/_vendor/'));

  // jquery and foundation as bundle
  gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/foundation-sites/dist/js/foundation.min.js'])
    .pipe(concat('jquery-foundation.bundle.js'))
    .pipe(gulp.dest('web/_vendor/'));

  cb();
});


// js
gulp.task('js', function(cb) {

  // _dependencies and _main as bundle
  gulp.src(['web/src/js/_dependencies.js','web/src/js/_main.js'])
    .pipe(plumber())
    .pipe(concat('main.bundle.js'))
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(gulp.dest('web/dist/js'));

  // all other scripts
  gulp.src(['web/src/js/**/*.js','!web/src/js/**/_*.js'])
    .pipe(plumber())
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(gulp.dest('web/dist/js'));

  cb();
});
gulp.task('watchjs', gulp.series('js', function(){
  return gulp.watch('web/src/js/**/*.js', gulp.series('js'));
}));


// sass compiler
gulp.task('sass', function() {
  return gulp.src('web/src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ browsers: '> 5% in DE, last 2 versions, not dead' }))
    .pipe(gulp.dest('web/dist/css'));
});
gulp.task('watchsass', gulp.series('sass', function(){
  return gulp.watch('web/src/scss/**/*.scss', gulp.series('sass'));
}));


// default task
gulp.task('default', gulp.parallel('watchsass','watchjs','vendor'));
