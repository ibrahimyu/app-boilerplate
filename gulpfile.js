var gulp = require('gulp');
var cat = require('gulp-concat');
var server = require('gulp-server-livereload');

var paths = {
	scripts: ['src/js/*.js'],
	styles: ['src/css/*.css']
};

gulp.task('concat-scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(cat('all.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('concat-styles', function() {
	return gulp.src(paths.styles)
		.pipe(cat('all.css'))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['concat-scripts']);
	gulp.watch(paths.styles, ['concat-styles']);
});

gulp.task('concat', ['concat-scripts', 'concat-styles']);

gulp.task('webserver', function() {
	gulp.src('.')
		.pipe(server({
			livereload: true,
		    directoryListing: false,
			open: true,
			enable: true,
			filter: function(filePath, cb) {
				cb( !(/node_module|src/.test(filePath)) )
			}
		}));
});

gulp.task('default', ['watch', 'concat', 'webserver']);
