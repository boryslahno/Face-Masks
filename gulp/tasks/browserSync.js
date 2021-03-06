import sync from 'browser-sync';
import {projectFolder} from '../path.js';
import {watcher} from "./watcher.js";

export const browserSync = () => {
    sync.init({
        server: `${projectFolder}/`,
        port: 3000,
        notify: false,
    })

    watcher(sync);
}