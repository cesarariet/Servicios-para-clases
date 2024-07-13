const { task, src, dest, parallel, series } = require("gulp");
const math = require("gulp-mathjax-node")
const replace = require('gulp-replace')
const gulpWatch = require('gulp-watch')


require('dotenv').config();
DIR_SERVIDOR = process.env.DIR_SERVIDOR;
DIR_FUENTE = process.env.DIR_FUENTE;


task('latexToSvg', function(cb) {
  src(`${DIR_FUENTE}/**/*.html`)
    .pipe(replace(/\\\[/g, ' $$$$ '))
    .pipe(replace(/\\\]/g, ' $$$$ '))
    .pipe(replace(/\\\(/g, ' $$ '))
    .pipe(replace(/\\\)/g, ' $$ '))
    .pipe(math())
    .pipe(dest(DIR_SERVIDOR));
  cb();
})

task('copiarArchivos', function(cb) {
  src(
    [`${DIR_FUENTE}/**/*`, `!${DIR_FUENTE}/**/*.html`],
    { encoding: false }
  )
    .pipe(dest(DIR_SERVIDOR));
  cb();
})

task('escucharHTML', function() {
  return gulpWatch(`${DIR_FUENTE}/**/*.html`)
    .pipe(replace(/\\\[/g, ' $$$$ '))
    .pipe(replace(/\\\]/g, ' $$$$ '))
    .pipe(replace(/\\\(/g, ' $$ '))
    .pipe(replace(/\\\)/g, ' $$ '))
    .pipe(math())
    .pipe(dest(DIR_SERVIDOR));
})

task('escucharArchivos', function() {
  return gulpWatch(
    [`${DIR_FUENTE}/**/*`, `!${DIR_FUENTE}/**/*.html`],
    { encoding: false }
  )
    .pipe(dest(DIR_SERVIDOR));
})

task('build', series(
  task('latexToSvg'),
  task('copiarArchivos')
))

task('watch', parallel(
  task('escucharHTML'),
  task('escucharArchivos')
))


