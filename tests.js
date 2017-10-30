/*
 * Author: Darcey.Lloyd@gmail.com
*/


// Give some room on the output for an easier reading experience
console.log("\n".repeat(100));


// Require AFTC.Node.Libs
const aftc = require ("./AFTC.Node.Libs.js");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Debug module
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const debug = aftc.debug;
const log = debug.log;
const logStyle = debug.logStyle;

// debug examples
// log("Console output default");
// log("Console output of red text","red");
// log("Console output of green text","green");
// log("Console output of blue text","blue");
// log("Console output of cyan text","cyan");
// log("Console output of yellow text","yellow");
// log("Console output of magenta text","magenta");
// log("Console output of black text with a white background","black","white");
// log("Console output of red text with a yellow background","red","yellow");
// log("Console output of red text with a yellow background","white","red");

// logStyle("txt","red");
// log("I am red text!");
// log("I am also red text!");
// logStyle("bg","white");
// log("I am red text on a white background!");
// logStyle("reset"); // Stop styling everything!


// Example of what happens when AFTC log meets an object
// var o = {
//     item1:1,
//     item2:2,
//     item3:{
//         subItem1:"s1",
//         subItem2:"s2",
//     },
//     item4:{
//         subItem1:"s1",
//         subItem2:"s2",
//         subItem3:{
//             subItem1:"s1",
//             subItem2:"s2"
//         }
//     }
// }
// log(o);


// Example of what happens when AFTC log meets an array
// var a = new Array();
// a["item1"] = "car";
// a["item2"] = "plane";
// log(a);
// log(a.length); // Will log zero (why? because you gone associative and the array behaves like both an array and an object now)
// a.push("moo"); // Now you have index values as well as associative, my log will let you know about this
// log(a);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// IO Module
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const io = aftc.io;

// Check if file exists
var bFileExists1 = io.fileExists("./AFTC.Node.Libs.js");
//log("bFileExists1 = " + bFileExists1);

// Check if dir exists
//var bDirExists1 = io.dirExists("./io");
//log("bDirExists1 = " + bDirExists1);


var dirs1 = [
    {path:"./io",exists:"unknown"},
    //{path:"./debug",exists:"unknown"},
    {path:"./gfx",exists:"unknown",rgb:{r:0,g:1,b:2}},
    //{path:"./utils/quantum_processor_tools",exists:"unknown"},
    //{path:"./fluffy/stuff",exists:"unknown"}
];

var dirs2 = [
    {path:"./io",exists:"unknown"},
    //{path:"./debug",exists:"unknown"},
    {path:"./gfx",exists:"unknown",rgb:{r:0,g:1,b:2}},
    //{path:"./utils/quantum_processor_tools",exists:"unknown"},
    //{path:"./fluffy/stuff",exists:"unknown"}
];

log(dirs1);
log(dirs2);

for (var index = 0; index < dirs1.length; index++) {
    dirs1[index].exists = io.dirExists(dirs1[index].path,false);
}

// dirs.forEach(function(dir) {
//     dir.exists = io.dirExists(dir.path,false);
// }, this);

function checkDirs(){
    log("----");
    log(dirs1);
    log(dirs2);
}

//setTimeout(checkDirs, 2000);





//var bDirExists1 = io.dirExists("./io",false);
/*
bDirExists2.then(function (e) {
    console.log("Promise then");
}).catch(function (e) {
    log(e);
});
*/
// bDirExists2.then(function(res){
//     log("moo");
// });
//p2.then((res) => console.log(res)); 

//log("bDirExists1 = " + bDirExists1);
//log("moooo");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -