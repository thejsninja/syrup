const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', () =>
    gulp.src('./tests/test-*', {read: false})
        .pipe(mocha({reporter: 'mocha'}))
);