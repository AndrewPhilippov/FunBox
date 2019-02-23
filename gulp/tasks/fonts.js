var gulp = require('gulp');

gulp.task('fonts', fonts);

function fonts() {
    console.log("Fonts task runs");
    return gulp.src('./app/assets/styles/fonts/*.{ttf,woff,eof,woff2,svg,css}')
        .pipe(gulp.dest('./app/temp/styles/fonts'));
}