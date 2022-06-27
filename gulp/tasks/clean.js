import del from 'del';
import {path} from "../path.js";

const clean = () =>
    del(path.clean);

export default clean;