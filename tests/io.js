/*
 * Author: Darcey.Lloyd@gmail.com
*/


// Give some room on the output for an easier reading experience
console.log("\n".repeat(100));


// Require AFTC.Node.Libs
const aftc = require ("../aftc.js");
const log = aftc.debug.log; // log!

// IO Module
//const io = require ("./aftc.js").io; // Could go straight for the io module
const io = aftc.io;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// Check if file exists
var bFileExists1 = io.fileExists("./aftc.js");
log("bFileExists1 = " + bFileExists1);

// Check if dir exists
var bDirExists1 = io.dirExists("./io");
log("bDirExists1 = " + bDirExists1);



// Async and Sync usage examples
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