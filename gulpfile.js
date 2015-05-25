var gulp = require('gulp'),
	jade = require('gulp-jade'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	coffee = require('gulp-coffee'),
	es = require('event-stream'),

	connect = require('gulp-connect');

var outputDir = 'builds/development';

gulp.task('js', function () {
	var javaScriptFromCoffeeScript = gulp.src('src/js/**/*.coffee')
	  .pipe(coffee());

	var js = gulp.src('src/js/**/*.js');

	return es.merge(javaScriptFromCoffeeScript, js)
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest(outputDir + '/js'))
	.pipe(connect.reload());
});

gulp.task('jade', function() {
	return gulp.src('src/templates/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest(outputDir))
	.pipe(connect.reload());
});

// gulp.task('js', function() {
// 	return gulp.src('src/js/main.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest(outputDir + '/js'))
// 	.pipe(connect.reload());
// });

gulp.task('sass', function() {
	return gulp.src('src/sass/main.sass')
	.pipe(sass({
		indentedSyntax : true,
		outputStyle : 'compressed'
	}))
	.pipe(gulp.dest(outputDir + '/css'))
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('src/templates/**/*.jade', ['jade']);
	gulp.watch('src/js/**/*.{js,coffee}', ['js']);
	gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
})

gulp.task('connect', function() {
	connect.server({
		root: outputDir,
		livereload: true
	});
});



gulp.task('default', ['js', 'jade', 'sass', 'watch', 'connect']);