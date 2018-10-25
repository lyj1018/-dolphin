//先导入插件
let 
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');
	
	
//创建并发布任务
gulp.task('dolp',function(){
	
})

//编译sass
gulp.task('index',function(){
	gulp.src('haituncun/images').pipe(uglify()).pipe(rename("suffix",".min"))
})