
function exec(programPath) {
    var exec = require('child_process').execFile;

    var execute = function () {
        console.log("process.exec(): starting " + programPath);
        exec(programPath, function (err, data) {
            const debug = require("../debug/debug.js");
            const log = debug.log;
            if (err){
                log(err,"red");
            }
            log(data.toString());
        });
    }
    execute();
}


console.log("hello");



// Methods, Aliases and Export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// let cloned = Object.assign({}, source);
const methods = {
    run: exec,
    exec: exec
}

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -