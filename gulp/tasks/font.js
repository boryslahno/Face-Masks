import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import gulp from 'gulp';
import {path} from "../path.js";

const {src, dest} = gulp;

export const font = () =>
    src(`${path.source.fonts}*.ttf`)
        .pipe(fonter({
            formats: ['woff']
        }))
        .pipe(dest(path.build.fonts))
        .pipe(src(`${path.source.fonts}*.ttf`))
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));