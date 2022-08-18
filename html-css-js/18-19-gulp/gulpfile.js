const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload


function tarefasCSS(cb) {

    gulp.src([
    './vendor/bootstrap/css/bootstrap.min.css',
    './vendor/owl/css/owl.css',
    './vendor/fonts/*.css',
    './vendor/fontawesome/fontawesome.css',
    './vendor/jquery-ui/jquery-ui.min.css',
    'src/css/style.css'])
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css'))
    return cb()
}

function tarefasJS(cb){

    gulp.src([
    './vendor/jquery/jquery-3.6.0.min.js',
    './vendor/bootstrap/js/bootstrap.min.js',
    './vendor/owl/js/owl.js',
    './vendor/jquery-mask/jquery.mask.min.js',
    './vendor/jquery-ui/jquery-ui.min.js',
    'src/js/custom.js'
])
        .pipe(babel({
            comments: false,
        }))
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) //libs.min.js
        .pipe(gulp.dest('./dist/js'))
    return cb()
}


function tarefasImagem(cb){
    
    gulp.src('./src/images/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/images'))
    return cb()
}


function tarefasHTML(cb){
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
    return cb()
}


gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./src/**/*').on('change', reload)
})


const process = series( tarefasHTML, tarefasJS, tarefasCSS )

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem

exports.default = process