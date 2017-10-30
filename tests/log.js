/*
 * Author: Darcey.Lloyd@gmail.com
*/


// Give some room on the output for an easier reading experience
console.log("\n".repeat(100));


// Require AFTC.Node.Libs
const aftc = require ("../aftc.js");

// Log
//const log = require ("./aftc.js").debug.log; // Could go straight for it
const log = aftc.debug.log;


// Examples
log("Console output default");
log("Console output of red text","red");
log("Console output of green text","green");
log("Console output of blue text","blue");
log("Console output of cyan text","cyan");
log("Console output of yellow text","yellow");
log("Console output of magenta text","magenta");
log("Console output of black text with a white background","black","white");
log("Console output of red text with a yellow background","red","yellow");
log("Console output of red text with a yellow background","white","red");


// Example of what happens when log meets an object
var o = {
    item1:1,
    item2:2,
    item3:{
        subItem1:"s1",
        subItem2:"s2",
    },
    item4:{
        subItem1:"s1",
        subItem2:"s2",
        subItem3:{
            subItem1:"s1",
            subItem2:"s2"
        }
    }
}
log(o);


// Example of what happens when AFTC log meets an array
var a = new Array();
a["item1"] = "car";
a["item2"] = "plane";
log(a);
log("a.length = " + a.length); // Will log zero (why? because you gone associative and the array behaves like both an array and an object now)
a.push("moo"); // Now you have index values as well as associative, my log will let you know about this
log(a);
console.log(a);




aftc.debug.disableLog();
log("You wont see me as I am disabled");

aftc.debug.logEnable();
log("You will see me");


// Why would I add this feature?
// I built something similar to log for actionscript 3 (ttrace), ttrace would allow trace aka log outputs
// per a class. If your JavaScript project is setup to be modular and you require aftc.debug.log in each
// you will be able to do the same.
// Why?
// When there is an issue, you can enable logging in only the areas that logging is required, which makes for
// great debugging when others have issues which you can't see as they can send you their log outputs


// TO DO: Log to local file
// TO DO: Log to online api

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -