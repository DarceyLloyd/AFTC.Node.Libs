/*
 * Author: Darcey.Lloyd@gmail.com
 * 
 * Resources
 * https://ourcodeworld.com/articles/read/298/how-to-show-colorful-messages-in-the-console-in-node-js
 * 
 */


// require / includes
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const dev = require("../utils/dev.js");

const log = require("./log.js");
const logStyle = require("./logStyle.js");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function dumpProcessEnv() {
    for (var i in process.env) {
        console.log(i + " = " + process.env[i]);
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function dumpObject(o) {
    for (var i in o) {
        console.log(i + " = " + o[i]);
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








// Methods, Aliases and Export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// let cloned = Object.assign({}, source);
var methods = {
    dumpProcessEnv: dumpProcessEnv,
    logProcessEnv: dumpProcessEnv,
    dumpObject: dumpObject,
    dumpArray: dumpObject
}

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -