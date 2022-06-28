import gulp from 'gulp';
import {html, css, jsTask, images, font, iconFont, copyManifest, clean, browserSync} from './gulp/tasks/index.js';

const {task, parallel, series} = gulp;

const tasks = parallel(html, css, jsTask, images, font, iconFont, copyManifest);

const compose = series(clean, tasks, browserSync);

task('default', compose);