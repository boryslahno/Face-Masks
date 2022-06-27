import gulp from 'gulp';
import {path} from "../path.js";
import html from "./html.js";
import css from "./css.js";
import jsTask from "./jsTask.js";
import images from "./images.js";

const {watch} = gulp;

const watcher = browser => {
    watch(path.watch.html, html).on('change', browser.reload);
    watch(path.watch.scss, css).on('change', browser.reload);
    watch(path.watch.js, jsTask).on('change', browser.reload);
    watch(path.watch.images, images).on('change', browser.reload);
}

export default watcher;