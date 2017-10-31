// debug
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const debug = require("../debug/debug.js");
const log = debug.log;
const utils = debug.utils;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



function exec(programPath) {
    var exec = require('child_process').execFile;

    var execute = function () {
        console.log("process.exec(): starting " + programPath);
        exec(programPath, function (err, data) {
            const debug = require("../debug/debug.js");
            const log = debug.log;
            if (err) {
                log(err, "red");
            }
            log(data.toString());
        });
    }
    execute();
}


let o = {
    name:"Darcey Lloyd",
    job: "Web Developer",
    location: "UK"
}

//console.log( JSON.stringify(o) );

//console.log( JSON.stringify(process.argv) );

//console.log("hello");
log(process.argv);

var app = process.argv[2] + "";
exec(app)



// Methods, Aliases and Export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// let cloned = Object.assign({}, source);
const methods = {
    run: exec,
    exec: exec
}

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -