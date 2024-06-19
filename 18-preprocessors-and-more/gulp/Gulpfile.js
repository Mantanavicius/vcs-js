const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const concatCSS = require("gulp-concat-css");
const rename = require("gulp-rename");

function styles(cb) {
  gulp
    .src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concatCSS("style.css", { rebaseUrls: false }))
    .pipe(cleanCSS())
    .pipe(rename({ basename: "style", suffix: ".min" }))
    .pipe(gulp.dest("dest/"));
  cb();
}

function copyHtmlFile(cb) {
  gulp.src("src/index.html").pipe(gulp.dest("dest/"));
  cb();
}

function watch(cb) {
  gulp.watch("src/**/*.html", gulp.series(copyHtmlFile));
  gulp.watch("src/sass/**/*.scss", gulp.series(styles));
  cb();
}

exports.styles = styles;
exports.watch = watch;
exports.copyHtmlFile = copyHtmlFile;
exports.default = gulp.series(gulp.parallel(copyHtmlFile, styles), watch);
