
const esbuild = require('esbuild');
const {sassPlugin} = require('esbuild-sass-plugin');

esbuild.build({
    entryPoints: ['build/js/jcrop.js'],
    bundle: true,
    sourcemap: true,
    format: 'iife',
    outfile: 'dist/jcrop.js',
    globalName: 'Jcrop'
}).catch(() => process.exit(1))


esbuild.build({
    entryPoints: ['build/css/jcrop.scss'],
    bundle: true,
    outfile: 'dist/jcrop.css',
    plugins: [sassPlugin()],
}).catch(() => process.exit(1))