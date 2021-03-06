import gulp from "gulp";
import {path} from "../path.js";
import browserSync from "browser-sync";

const {dest, src} = gulp;

export const jsTask = () =>
    src(path.source.js)
        .pipe(dest(path.build.js));