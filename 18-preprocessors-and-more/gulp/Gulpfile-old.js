// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }
const gulp = require("gulp");

function firstTask(done) {
  console.log("pirma užduotis");
  done();
}

function secondTask(done) {
  console.log("antra užduotis");
  done();
}

function thirdTask(done) {
  console.log("trečia užduotis");
  done();
}

exports.default = gulp.parallel(firstTask, secondTask, thirdTask);
