/*
 * Author: Darcey.Lloyd@gmail.com
*/


// Give some room on the output for an easier reading experience
console.log("\n".repeat(100));


// Require AFTC.Node.Libs
const aftc = require ("../aftc.js");
const log = aftc.debug.log;



//const conv = aftc.conversion;
//log( conv.stringToBool("yes") );

log("BEFORE -- ")
//aftc.process.spawn("c:\\windows\\notepad.exe");
aftc.process.spawnExec("c:\\windows\\notepad.exe");
log("AFTER -- ")



function saySomething(){
    log("Yes, I am still running!")
}

setTimeout(saySomething,3000);