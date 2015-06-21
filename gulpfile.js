// Plugin dependencies
var gulp            = require('gulp'),                        // Gulp
    concat          = require('gulp-concat')                  // Concatinate

// -----------------------------------------------------------------------------
// Configurations
var packages        = './packages'                            // Packages

// -----------------------------------------------------------------------------
// Globs
var root            = {
  src               : './src',                                // Sources
  dist: {
    js              : './dist/js',                            // Distribution - JS
    sass            : './dist/sass'                           // Distribution - SASS
  }
};

// -----------------------------------------------------------------------------
// Packages
var packages        = {

  // JavaScript
  js: {
    utilities: [
      packages + '/ahomiya.wasabi/dist/**/*'                  // jQuery utilities
    ],
    ua: [
      packages + '/ahomiya.tonkatsu/dist/**/*'                // User-agent
    ]
  },

  // SASS
  sass: {
    helpers: [
      packages + '/ahomiya.sukiyaki/dist/**/*'                // SASS helpers
    ]
  }

};

// -----------------------------------------------------------------------------
// Build tasks
// Concatenating, minifying, optimizing and organizing files

// JavaScript utilities
gulp.task('build:js.utilities', function() {
  return gulp.src(packages.js.utilities)
    .pipe(gulp.dest(root.dist.js));
});

// User-agent detection
gulp.task('build:js.ua', function() {
  return gulp.src(packages.js.ua)
    .pipe(gulp.dest(root.dist.js));
});

// SASS function and mixin library
gulp.task('build:sass.helpers', function() {
  return gulp.src(packages.sass.helpers)
    .pipe(gulp.dest(root.dist.sass));
});
