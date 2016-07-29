/**
 * Created by plter on 7/26/16.
 */

const gulp = require("gulp");
const shell = require("gulp-shell");
const fs = require("fs");

const BASE_PACKAGE = "org/osdg/game2d";
const closureCompilerFileName = "closure-compiler-v20160713.jar";
const closureCompilerFile = `${__dirname}/tools/${closureCompilerFileName}`;
const distDir = `${__dirname}/dist`;
const gcc/*Google closure compiler*/ = `java -jar ${closureCompilerFile}`;
const libSrcFiles = [
    `${BASE_PACKAGE}/events/G2DEvent.js`,
    `${BASE_PACKAGE}/events/G2DMouseEvent.js`,
    `${BASE_PACKAGE}/events/G2DEventDispatcher.js`,
    `${BASE_PACKAGE}/display/Display.js`,
    `${BASE_PACKAGE}/display/Rectangle.js`,
    `${BASE_PACKAGE}/display/Text.js`,
    `${BASE_PACKAGE}/display/Container.js`,
    `${BASE_PACKAGE}/anim/PropertyAnim.js`,
    `${BASE_PACKAGE}/app/Game2dApp.js`
];

function cloneArray(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function insertLibSrcFilesToSrcFilesArray(srcFilesArr) {
    for (let i = libSrcFiles.length - 1; i >= 0; i--) {
        srcFilesArr.splice(0, 0, libSrcFiles[i]);
    }
}

function defineTasks(distFileName, srcFiles, taskName) {
    const distFile = `${distDir}/${distFileName}`;
    const distMapFileName = `${distFileName}.map`;
    insertLibSrcFilesToSrcFilesArray(srcFiles);

    const compileScript = `${gcc} --language_out=ES5 --js_output_file ${distFile} --create_source_map ${distMapFileName} --js ${srcFiles.join(" ")}`;

    const compileTaskName = `compile${taskName}`;
    const appendMapInfoTaskName = `appendMapInfoTo${taskName}`;

    gulp.task(compileTaskName, shell.task([
        `echo "${compileScript}"`,
        compileScript
    ], {cwd: "src"}));
    gulp.task(appendMapInfoTaskName, [compileTaskName], function () {
        fs.appendFileSync(distFile, `\n//# sourceMappingURL=../src/${distMapFileName}\n`);
    });

    gulp.task(taskName, [appendMapInfoTaskName]);
}


function init() {
    defineTasks("AnimDemos.min.js", [`${BASE_PACKAGE}/demos/anim/AnimDemo.js`], "AnimDemo");
    defineTasks("CardMemory.min.js", [
        `${BASE_PACKAGE}/demos/cardmemory/Card.js`,
        `${BASE_PACKAGE}/demos/cardmemory/CardMemory.js`
    ], "CardMemory");

    gulp.task("default", ["AnimDemo", "CardMemory"]);
}

init();

// gulp.watch("src/**/*.js", ["default"]);