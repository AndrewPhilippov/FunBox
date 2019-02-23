var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    mixins = require('postcss-mixins'),
    cssImport = require('postcss-import'),
    hexrgba = require('postcss-hexrgba'),
    cssvars = require('postcss-simple-vars');

gulp.task('styles', styles);

function styles() {
    // Added the console.log because otherwise there's no indication that the function ran and putting console.log after the return statement won't run.
    console.log("Styles task runs");
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        // To prevent gulp from stop running
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
    // Don't need the styles(done) or if (done) done(); because we are returning something in this function now.
    // if(done) done();
};