/*
 * Author: Darcey.Lloyd@gmail.com
 */


// Give some room on the output for an easier reading experience
console.log("\n".repeat(100));


// Require AFTC.Node.Libs
const aftc = require("../aftc.js");

// Log
//const log = require ("./aftc.js").debug.log; // Could go straight for it
const log = aftc.debug.log;
const logTo = aftc.debug.logTo;


// Examples
log("Darcey@AllForTheCode.co.uk");

var msg = "\n";
msg += "dateTime = " + new Date().toString() + "\n";
msg += "__dirname = " + __dirname + "\n";
msg += "process.env.LOCALAPPDATA = " + process.env.LOCALAPPDATA + "\n";
msg += "process.env.APPDATA = " + process.env.APPDATA + "\n";
msg += "process.env.npm_config_cache = " + process.env.npm_config_cache + "\n";
msg += "process.env.xxxxxxxxx = " + process.env.xxxxxxxxx + "\n";


//msg += "process.env = \n"
//msg += log(process.env);


// Example of what happens when log meets an object
var o = {
    item1: 1,
    item2: 2,
    item3: {
        subItem1: "s1",
        subItem2: "s2",
    },
    item4: {
        subItem1: "s1",
        subItem2: "s2",
        subItem3: {
            subItem1: "s1",
            subItem2: "s2"
        }
    }
}



logTo(msg,"debug.txt");


log(msg);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -