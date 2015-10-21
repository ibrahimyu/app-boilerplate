var gulp = require('gulp');
var cat = require('gulp-concat');

var paths = {
	scripts: ['src/js/*.js']
}

gulp.task('concat', function() {
	return gulp.src(paths.scripts)
		.pipe(cat('all.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['concat']);
