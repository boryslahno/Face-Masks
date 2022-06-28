import gulp from 'gulp';
import {path} from "../path.js";
import {html, css, jsTask, images} from './index.js';

const {watch} = gulp;

export const watcher = browser => {
    watch(path.watch.html, html).on('change', browser.reload);
    watch(path.watch.scss, css).on('change', browser.reload);
    watch(path.watch.js, jsTask).on('change', browser.reload);
    watch(path.watch.images, images).on('change', browser.reload);
}