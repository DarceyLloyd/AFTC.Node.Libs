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
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// var defs
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
if (!colors) {
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
}



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







// Methods, Aliases and Export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// let cloned = Object.assign({}, source);
var methods = logStyle;

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -