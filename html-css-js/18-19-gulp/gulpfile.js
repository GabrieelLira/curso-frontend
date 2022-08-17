const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin');

function tarefasCSS(cb) {

    return gulp.src([
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

}

function tarefasJS(){

    return gulp.src([
    './vendor/jquery/jquery-3.6.0.min.js',
    './vendor/bootstrap/js/bootstrap.min.js',
    './vendor/owl/js/owl.js',
    './vendor/jquery-mask/jquery.mask.min.js',
    './vendor/jquery-ui/jquery-ui.min.js',
    'src/js/custom.js'
])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) //libs.min.js
        .pipe(gulp.dest('./dist/js'))
}


function tarefasImagem(){
    
    return gulp.src('./src/images/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem