import gulp from "gulp";
import {path} from '../path.js';

const {src, dest} = gulp;

const iconFont = () =>
    src(path.source.iconFonts)
        .pipe(dest(path.build.iconFonts));

export default iconFont;