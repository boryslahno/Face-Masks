import gulp from 'gulp';
import {path} from '../path.js';
import fileInclude from 'gulp-file-include';

const {dest, src} = gulp;

export const html = () =>
    src(path.source.html)
        .pipe(fileInclude())
        .pipe(dest(path.build.html));
