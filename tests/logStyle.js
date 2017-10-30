/*
 * Author: Darcey.Lloyd@gmail.com
*/


// Give some room on the output for an easier reading experience
console.log("\n".repeat(100));


// Require AFTC.Node.Libs
const aftc = require ("../aftc.js");
const log = aftc.debug.log; // log!

// logStyle()
//const logStyle = require ("./aftc.js").debug.logStyle; // Could go straight for it
const logStyle = aftc.debug.logStyle;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Examples
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// This will dump out usage to console
logStyle();

logStyle("txt","red");
log("I am red text!");
log("I am also red text!");
logStyle("bg","white");
log("I am red text on a white background!");
logStyle("reset"); // Stop styling everything!
