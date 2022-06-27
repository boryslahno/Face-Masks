import gulp from 'gulp';
import html from "./gulp/tasks/html.js";
import jsTask from "./gulp/tasks/jsTask.js";
import clean from "./gulp/tasks/clean.js";
import css from "./gulp/tasks/css.js";
import browserSync from "./gulp/tasks/browserSync.js";
import images from "./gulp/tasks/images.js";
import fonts from './gulp/tasks/font.js';
import iconFont from "./gulp/tasks/iconFont.js";

const {task, parallel, series} = gulp;

const tasks = parallel(html, css, jsTask, images, fonts, iconFont);

const compose = series(clean, tasks, browserSync);

task('default', compose);