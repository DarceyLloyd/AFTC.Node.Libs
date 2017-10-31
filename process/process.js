/*
 * Author: Darcey.Lloyd@gmail.com
 */

// Resouce:
// https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a
// https://stackoverflow.com/questions/12871740/how-to-detach-a-spawned-child-process-in-a-node-js-script
// child.stdout.pipe(wc.stdin);


// require / imports / libs
//const util = require('util');


// debug
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const debug = require("../debug/debug.js");
const log = debug.log;
const utils = debug.utils;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






function fork(app) {
    //parent.js
    const cp = require('child_process');
    //const n = cp.fork(`${__dirname}/sub.js`);
    const n = cp.fork(app);
    n.on('message', (m) => {
        console.utils.dev('PARENT got message:', m);
    });
    n.send({
        hello: 'world'
    });


    //sub.js
    /*
    process.on('message', (m) => {
        console.log('CHILD got message:', m);
    });
    process.send({
        foo: 'bar'
    });
    */
}



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



function spawnExec(path) {
    const spawn = require('child_process').spawn;
    let params = [
        './process/forkedExec.js',
        "c:\\windows\\notepad.exe",
        "c:\\bdlog.txt"
    ];

    let p = __dirname + "\\forkedExec.js";
    p = "./forkedExec.js";

    //spawn('ping', ['"8.8.8.8"'], { windowsVerbatimArguments: true });


    try {
        //var child = spawn("dir");
        const child = spawn('node', params);



        child.stdout.on('data', (data) => {
            log(`child stdout:\n${data}`, "green");
        });

        child.stderr.on('data', (data) => {
            log(`child stderr:\n${data}`, "red");
        });
        child.on('exit', function (code, signal) {
            log("on(exit):", "green");
            log("child process exited with code [" + code + "] and signal [" + signal + "]");
        });
        child.on('error', function (e) {
            log("on(error):", "red");
            log(e);
        });
    } catch (e) {
        log("Catch(e):", "red");
        log(e);
    }

}







// Methods, Aliases and Export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// let cloned = Object.assign({}, source);
const methods = {
    run: exec,
    exec: exec,
    spawnExec: spawnExec,
    fork: fork
}

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -