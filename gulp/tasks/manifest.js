import gulp from 'gulp';
import {path} from "../path.js";

const {src, dest} = gulp;

export const copyManifest = () =>
    src(path.source.manifest)
        .pipe(dest(path.build.manifest));