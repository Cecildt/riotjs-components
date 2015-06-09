'use strict';

var gulp = require('gulp');
var serve = require('gulp-serve');
var riot = require('gulp-riot');
 
gulp.task('serve', serve({
	root: ['public'],
  	port: 1337
}));

gulp.task('riot', function(){
	return gulp.src('src/*.html')
	.pipe(riot({
		compact: true,
		ext: '.html'
	}))
	.pipe(gulp.dest('public/js/tags/'));
});

gulp.task('watch', function(){
	gulp.watch('src/*.html', ['riot']);
});
