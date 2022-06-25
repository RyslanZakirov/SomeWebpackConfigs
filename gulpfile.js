const { src, dest, watch } = require("gulp");
const gulpSass = require("gulp-sass")(require("sass"));
const gulpSourceMaps = require("gulp-sourcemaps");
const gulpUglify = require("gulp-uglify");
const browserSync = require("browser-sync");
const gulpConcat = require("gulp-concat");

const parseSASS = () => {
  return src("src/*.scss").pipe(gulpSass()).pipe(dest("res"));
};

const watchParseSASS = () => {
  watch("src/*.scss", parseSASS);
};

exports.parseSASS = parseSASS;
exports.watchParseSASS = watchParseSASS;
