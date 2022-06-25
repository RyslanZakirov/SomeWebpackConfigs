const { src, dest, watch } = require("gulp");
const gulpSass = require("gulp-sass")(require("sass"));
const gulpSourceMaps = require("gulp-sourcemaps");
const gulpUglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const gulpConcat = require("gulp-concat");

const parseSASS = () => {
  return src("src/*.scss").pipe(gulpSass()).pipe(dest("res"));
};

const watchParseSASS = () => {
  watch("src/*.scss", parseSASS);
};

const initBrowserSync = () => {
  browserSync.init({
    server: {
      baseDir: "public/",
    },
  });
};

const parseJS = () => {
  return src("src/*.js")
    .pipe(gulpSourceMaps.init())
    .pipe(gulpConcat("bundle.js"))
    .pipe(gulpUglify())
    .pipe(gulpSourceMaps.write("."))
    .pipe(dest("res"));
};

exports.parseSASS = parseSASS;
exports.watchParseSASS = watchParseSASS;

exports.initBrowserSync = initBrowserSync;
exports.parseJS = parseJS;
