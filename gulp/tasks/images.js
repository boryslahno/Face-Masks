import gulp from 'gulp';
import {path} from '../path.js';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';

const {src,dest} = gulp;

const images = () =>
    src(path.source.images)
        .pipe(newer(path.build.images))
        .pipe(webp())
        .pipe(dest(path.build.images))
        .pipe(src(path.source.images))
        .pipe(newer(path.build.images))
        .pipe(dest(path.build.images));

export default images;