var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        env:{
            port:80
        },
        extention:'js'
    });
});