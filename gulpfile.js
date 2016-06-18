var gulp = require('gulp');
var responsive = require('gulp-responsive');

var responsive_splash_config = [
    {
        width: 1600,
        rename: { suffix: '-1600px' }
    }, {
        width: 800,
        rename: { suffix: '-800px' }
    }, {
        width: 400,
        rename: {suffix: '-400px' }
    }]

var responsive_tile_config = [
    {
        width: 500,
        rename: { suffix: '-500px'}
    },
    {
        width: 250,
        rename: {suffix: '-250px'}
    }
]

gulp.task('images', function() {
    return gulp.src('images/*-cropped.jpg')
        .pipe(responsive({
            'cliffs-of-moher-cropped.jpg': responsive_splash_config,
            'proxy-falls-cropped.jpg': responsive_tile_config,
            'north-coyote-buttes-cropped.jpg': responsive_tile_config,
            'ice-cave-iceland-cropped.jpg': responsive_tile_config
            }))
        .pipe(gulp.dest('img'));
});
