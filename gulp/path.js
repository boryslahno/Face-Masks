export const projectFolder = './build';
export const sourceFolder = './src';

export const path = Object.freeze({
    build: {
        html: `${projectFolder}/`,
        css: `${projectFolder}/css/`,
        js: `${projectFolder}/js/`,
        images: `${projectFolder}/img/`,
        fonts: `${projectFolder}/fonts/`,
        iconFonts: `${projectFolder}/icons-font/`,
        manifest:`${projectFolder}/`
    },
    source: {
        html: `${sourceFolder}/*.html`,
        scss: `${sourceFolder}/sass/style.scss`,
        js: `${sourceFolder}/js/script.js`,
        images: `${sourceFolder}/images/**/*.{png,jpg,jpeg,gif,webp,svg}`,
        fonts: `${sourceFolder}/fonts/`,
        iconFonts: `${sourceFolder}/icons-font/*`,
        manifest: `${sourceFolder}/manifest.json`
    },
    watch: {
        html: `${sourceFolder}/**/*.html`,
        scss: `${sourceFolder}/sass/**/*.scss`,
        js: `${sourceFolder}/js/**/*.js`,
        images: `${sourceFolder}/images/**/*.{png,jpg,jpeg,gif,webp}`,
    },
    clean: projectFolder
});