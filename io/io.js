/*
 * Author: Darcey.Lloyd@gmail.com
 */


const debug = require("../debug/debug.js");
const log = debug.log;
const fs = require('fs');


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function fileExists(path) {

    try {
        return fs.statSync(path).isFile();
    } catch (e) {

        if (e.code == 'ENOENT') { // no such file or directory. File really does not exist
            log("File does not exist.");
            return false;
        }

        log("Exception fs.statSync (" + path + "): " + e);
        throw e; // something else went wrong, we don't have rights, ...
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function dirExists(path, async = true) {

    if (async) {
        return new Promise((resolve, reject) => {
            fs.stat(filePath, (err, stats) => {
                if (err && err.code === 'ENOENT') {
                    return resolve(false);
                } else if (err) {
                    return reject(err);
                }
                if (stats.isFile() || stats.isDirectory()) {
                    return resolve(true);
                }
            });
        });
    } else {
        // fs.stat errors if file doesn't exist
        try {
            fs.statSync(path);
            return true;
        } catch (e) {
            return false;
        }
    }


}


function xxxx(path) {
    fs.stat(path, function (err, stats) {
        log("------");
        log("err = ");
        log(err);
        log("stats = ");
        log(stats);
        log("------");
    });
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function writeFile(path, data) {
    fs.writeFile(path, data, function (e) {
        if (e) {
            log(e);
            return false;
        } else {
            return true;
        }
    });
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function readFile(path, data) {
    fs.readFile(path, function (e, data) {
        if (e) {
            //log(e);
            return false;
        } else {
            return data;
        }
    });
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function md(dir) {
    try {
        fs.mkdirSync(dir);
    } catch (e) {
        if (e.code == 'EEXIST') throw e;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// Methods, Aliases and Export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// let cloned = Object.assign({}, source);
var methods = {
    md: md,
    mkdir: md,
    fileExists: fileExists,
    dirExists: dirExists,
    readFile: readFile,
    writeFile: writeFile,
}

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -