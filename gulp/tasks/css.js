import gulp from 'gulp';
import {path} from '../path.js';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssOptimization from 'gulp-csso';
import mediaQueries from 'gulp-group-css-media-queries'
import browserSync from 'browser-sync';

const {dest, src} = gulp;
const scss = gulpSass(sass);

const css = () =>
    src(path.source.scss)
        .pipe(scss())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 version'],
            cascade:true,
        }))
        .pipe(mediaQueries())
        .pipe(cssOptimization())
        .pipe(dest(path.build.css));

export default css;