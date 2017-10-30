/*
 * Author: Darcey.Lloyd@gmail.com
 * 
 * Resources
 * https://ourcodeworld.com/articles/read/298/how-to-show-colorful-messages-in-the-console-in-node-js
 * 
 */


// dev
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const dev = require("../utils/dev.js");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// var defs
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var colors = {
    reset: "\x1b[0m",
    special: {
        bright: "\x1b[1m",
        dim: "\x1b[2m",
        underline: "\x1b[4m",
        blink: "\x1b[5m",
        inverse: "\x1b[7m",
        hidden: "\x1b[8m",
    },
    text: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m"
    }
};


var logEnabled = true;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function enableLog() {
    logEnabled = true;
}

function disableLog() {
    logEnabled = false;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function log(arg1 = "", arg2 = "", arg3 = "", nest = 0, subVarLabel = "") {
    if (!logEnabled) {
        return;
    }
    
    // console.log("arg1 = " + arg1)
    // console.log("arg2 = " + arg2)
    // console.log("arg3 = " + arg3)

    if (arg1 == null || arg1 == undefined) {
        console.log("You attempted to log a datatype of " + typeof (arg1) + " with a value of [" + arg1 + "]");
        return;
    }

    // Encapsulate for recursion within this function
    function logit() {

        let arg1Type = typeof (arg1);
        let baseIndent = "";
        let subIndent = "";
        for (var i = 1; i <= (nest + 1); i++) {
            if (i <= nest) {
                baseIndent += "   ";
            }
            subIndent += "   ";
        }

        switch (arg1Type) {
            case "object":
                // JS calls array objects, but treats them differently!
                if (dev.isArray(arg1)) {
                    console.log(baseIndent + "[array]:");
                    for (var index = 0; index < arg1.length; index++) {
                        var v = arg1[index];
                        let itemType = typeof(v);
                        itemType = itemType.toLowerCase();
                        console.log(subIndent + subVarLabel + "index[" + index + "] = " + arg1[index]);
                        if (itemType == "object") {
                            let nextNest = nest + 1;
                            let nextSubVarLabel = subVarLabel + "index[" + index + "].";
                            log(v, "", "", nextNest, nextSubVarLabel);
                        }
                    }
                } else {
                    console.log(baseIndent + "[object]:");
                    Object.keys(arg1).forEach(function (key) {
                        let v = arg1[key];
                        let itemType = typeof(v);
                        itemType = itemType.toLowerCase();
                        // TODO: Handle "object Object" which is a typeof string!
                        // if (itemType == "string" && v == "[object Object]") {
                            
                        // }
                        //console.log(subIndent + subVarLabel + "key[" + key + "] = " + arg1[key] + " " + typeof(arg1[key]));
                        console.log(subIndent + subVarLabel + "key[" + key + "] = " + arg1[key]);
                        if (itemType == "object") {
                            let nextNest = nest + 1;
                            let nextSubVarLabel = subVarLabel + "key[" + key + "].";
                            log(v, "", "", nextNest, nextSubVarLabel);
                        }
                    });
                }

                break;
                // case "boolean":
                //     console.log(arg1 + " [boolean]");
                //     break;
                // case "number":
                //     console.log(arg1 + " [number]");
                //     break;
            default:
                console.log({arg1});
                break;
        }
        

        // When all is done add a new line (enhances readability)
        if (nest == 0){
            console.log("");
        }
    }


    if (arg2 == "" && arg3 == "") {
        //process.stdout.write(colors.reset);
        //process.stdout.write(arg1);
        //console.log(arg1);
        //console.log(""); // use console.log for \n so that it handles new lines
        logit();
    }

    if (arg2 != "" && arg3 == "") {
        process.stdout.write(colors.reset);
        process.stdout.write(colors.text[arg2]);
        //process.stdout.write(arg1);
        logit();
        process.stdout.write(colors.reset);
        //console.log(""); // use console.log for \n so that it handles new lines
    }

    if (arg2 != "" && arg3 != "") {
        process.stdout.write(colors.reset);
        process.stdout.write(colors.text[arg2]);
        process.stdout.write(colors.bg[arg3]);
        //process.stdout.write(arg1);
        logit();
        process.stdout.write(colors.reset);
        //console.log(""); // use console.log for \n so that it handles new lines
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function logStyle(styleType, styleName) {
    if (!logEnabled) {
        return;
    }

    if (styleType) {
        styleType = styleType.toLowerCase();
    }

    if (styleName) {
        styleName = styleName.toLowerCase();
    }

    // Quick process of reset
    if (styleType == "reset" || styleName == "reset") {
        process.stdout.write(colors.reset);
        return;
    }

    var usageMsg = "\n" + colors.reset;
    usageMsg += colors.text.green + "Usage: logStyle(styleType,styleName)" + "\n";
    usageMsg += colors.reset + "styleType options are:" + "\n";
    usageMsg += colors.text.green;
    usageMsg += "    " + "text || txt" + "\n";
    usageMsg += "    " + "background || bg" + "\n";
    usageMsg += "    " + "special" + "\n";
    usageMsg += colors.reset;
    usageMsg += "styleName options for styleType's of text and background are:" + "\n";
    usageMsg += colors.text.green;
    usageMsg += "    " + "black" + "\n";
    usageMsg += "    " + "red" + "\n";
    usageMsg += "    " + "green" + "\n";
    usageMsg += "    " + "yellow" + "\n";
    usageMsg += "    " + "blue" + "\n";
    usageMsg += "    " + "magenta" + "\n";
    usageMsg += "    " + "cyan" + "\n";
    usageMsg += "    " + "white" + "\n";
    usageMsg += colors.reset;
    usageMsg += "styleName options for styleType 'sepcial' are:" + "\n";
    usageMsg += colors.text.green;
    usageMsg += "    " + "reset" + "\n";
    usageMsg += "    " + "bright" + "\n";
    usageMsg += "    " + "dim (this is default)" + "\n";
    usageMsg += "    " + "underline" + "\n";
    usageMsg += "    " + "inverse" + "\n";
    usageMsg += colors.reset;


    function setTextStyle() {
        var style = colors.text[styleName];
        if (style) {
            process.stdout.write(style);
        } else {
            var msg = "\n";
            msg += colors.text.white + colors.bg.red;
            msg += "AFTC.Node.Libs > Debug.logStyle(styleType,styleName): USAGE ERROR!" + "\n";
            msg += "Unable to find a styleName of [" + styleName + "] for the styleType of [" + styleType + "]" + "\n";
            msg += usageMsg;
            console.log(msg);
        }
    }


    function setBgStyle() {
        var style = colors.bg[styleName];
        if (style) {
            process.stdout.write(style);
        } else {
            var msg = "\n";
            msg += colors.text.white + colors.bg.red;
            msg += "AFTC.Node.Libs > Debug.logStyle(styleType,styleName): USAGE ERROR!" + "\n";
            msg += "Unable to find a styleName of [" + styleName + "] for the styleType of [" + styleType + "]" + "\n";
            msg += usageMsg;
            console.log(msg);
        }
    }


    function setSpecial() {
        if (styleType == "reset") {
            process.stdout.write(colors.reset);
        } else {
            var style = colors.special[styleName];
            if (style) {
                process.stdout.write(style);
            } else {
                var msg = "\n";
                msg += colors.text.white + colors.bg.red;
                msg += "AFTC.Node.Libs > Debug.logStyle(styleType,styleName): USAGE ERROR!" + "\n";
                msg += "Unable to find a styleName of [" + styleName + "] for the styleType of [" + styleType + "]" + "\n";
                msg += usageMsg;
                console.log(msg);
            }
        }
    }


    switch (styleType) {
        case "text":
            setTextStyle();
            break;
        case "txt":
            setTextStyle();
            break;
        case "background":
            setBgStyle();
            break;
        case "bg":
            setBgStyle();
            break;
        case "special":
            setSpecial();
            break;

        default:
            var msg = "\n";
            msg += colors.text.white + colors.bg.red;
            msg += "AFTC.Node.Libs > Debug.logStyle(styleType,styleName): USAGE ERROR!" + "\n";
            msg += "Unable to find a styleType of [" + styleType + "]" + "\n";
            msg += usageMsg;
            console.log(msg);
            break;
    }


}
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
    logEnable: enableLog,
    logDisable: disableLog,
    enableLog: enableLog,
    disableLog: disableLog,
    log: log,
    logStyle: logStyle,
    dumpProcessEnv: dumpProcessEnv,
    logProcessEnv: dumpProcessEnv,
    dumpObject: dumpObject,
    dumpArray: dumpObject
}

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -