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
var log = require("./log.js").log;
const io = require("../io/io.js");
const path = require("path");
const fs = require("fs");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function logTo(msg,logFile,append=false){
    let savePath = logFile;

    //log("CURRENT DIR NAME = " + __dirname,"yellow");
    if (path.isAbsolute(logFile)) {
        //log("logFile [" + logFile + "] is absolute");
    } else {
        //log("logFile [" + logFile + "] is relative");
        savePath = __dirname + "\\..\\" + logFile;
    }

    //log("savePath [" + savePath + "] before normalize","yellow")
    savePath = path.normalize(savePath);
    //log("savePath normalized [" + savePath + "]","green")

    // var fd = fs.openSync(savePath, 'w');
    // fd.pipe(msg);
    // fs.closeSync(fs.openSync(savePath, 'w'));
    //io.writeFile(msg,savePath);

    var callBackHandler = function(e){
        log(e);
    }
    //fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
    //fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callBackHandler);

    var flag = "w";
    if (append){
        flag = "a";
    }
    fs.open(savePath, flag, function(err, fd) { 
        fs.writeFile(savePath, msg, {'flag':flag}, function(e){
            if (e){
                throw(e);
            }
        });
    });


    // // open the file in writing mode, adding a callback function where we do the actual writing
    // fs.open(savePath, 'w', function(err, fd) {  
    //     if (err) {
    //         throw 'could not open file: ' + err;
    //     }

    //     // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    //     fs.write(fd, msg, 0, msg.length, 'utf8', function(err) {
    //         if (err) throw 'error writing file: ' + err;
    //         fs.close(fd, function() {
    //             //console.log('wrote the file successfully');
    //             log("logTo has created or written to a file at location [" + savePath + "]","green")
    //         });
    //     });
    // });

}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






// Methods, Aliases and Export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// let cloned = Object.assign({}, source);
var methods = logTo;

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -