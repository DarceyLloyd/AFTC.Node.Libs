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
const logTo = require("./logTo.js");

const misc = require("./misc.js");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -









// Methods, Aliases and Export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// let cloned = Object.assign({}, source);
var methods = {
    logEnable: log.enableLog,
    logDisable: log.disableLog,
    enableLogToFile: log.enableLogToFile,
    disableLogToFile: log.disableLogToFile,
    enableLog: log.enableLog,
    disableLog: log.disableLog,
    log: log.log,
    logStyle: logStyle,
    logTo:logTo,
    dumpProcessEnv: misc.dumpProcessEnv,
    logProcessEnv: misc.dumpProcessEnv,
    dumpObject: misc.dumpObject,
    dumpArray: misc.dumpObject
}
//console.log(methods);

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -