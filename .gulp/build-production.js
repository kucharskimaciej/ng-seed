var gulp = require('gulp');
var html2js = require('gulp-ng-html2js');
var bowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var merge = require('gulp-merge');
var filesort = require('gulp-angular-filesort');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

var cfg = require('./config');

function buildTemplates () {
    return gulp.src(cfg.paths.templates)
        .pipe(html2js({
            moduleName: 'templates',
            declareModule: false
        }))
        .pipe(concat('templates.js'))
        .pipe(ngmin())
        .pipe(uglify({
            mangle: true
        }));
}

function buildVendor () {
    return gulp.src(bowerFiles())
        .pipe(concat('libs.js'))
        .pipe(uglify({
            mangle: true
        }));
}

function buildApp () {
    return gulp.src(cfg.paths.app)
        .pipe(filesort())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify({
            mangle: true
        }));
}

function buildRelease () {
    return merge(buildVendor(), buildApp(), buildTemplates())
        .pipe(concat('release.js'))
        .pipe(gulp.dest(cfg.paths.build));
}

function build () {
    return gulp.src(cfg.paths.main)
        .pipe(inject(buildRelease(), {relative: true, ignorePath: '../build'}))
        .pipe(gulp.dest(cfg.paths.build));
}

gulp.task('build', build);
