//先导入插件
 
	var gulp = require('gulp');
	var sass = require('gulp-sass');
	var cssnano = require('gulp-cssnano');
	var rename = require('gulp-rename');
	var uglify = require('gulp-uglify');
	var concat = require('gulp-concat');
	var imagemin =require('gulp-imagemin');
	var watch = require('gulp-watch');
	
	
// 创建并发布任务
// gulp.task('dolp',function(){
// 	console.log('hello');
// })
// 
//编译sass
gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss').pipe(sass()).pipe(cssnano()).pipe(gulp.dest('cssnano/css'));
})

gulp.task('images',function(){
	 gulp.src('./src/images/*').pipe(imagemin()).pipe(gulp.dest('cssnano/img'));  
})
//监听
gulp.task('watch',function(){
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/images/*',['images']);
})


// gulp.task('index',function(){
// 	gulp.src('./src/images/*').pipe(rename({'suffix':'.min'})).pipe(imagemin()).pipe(gulp.dest('cssnano/img'));
// })

// gulp.task('watch',function(){
// 	 gulp.watch('./src/sass/*.scss',['index']);
// })

// gulp.task('watch',function(){
// 	 gulp.watch('./src/images/*',['index']);
// })



