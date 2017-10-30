# AFTC.Node.Libs
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

A collection of utilities / functions I find useful when working with NodeJS features.


I don't want a 1000 different packages looked up and installed each time I start a project, so I made this for quick and easy install to give me what I consider the essentials and get on with development.

<br>

#### Want the version for websites? https://github.com/DarceyLloyd/AFTC.js



## A quick look at what's in the box

- <b>DEBUG</b> (log, colorLog, nicer log outputs of objects and arrays)
- <b>IO</b> (FileSystem utilities for downloading, reading, writing and existance checks)
- <b>UTILS</b> (Utiltiies to assist with rapid development)
- <b>PROCESS</b> (Utiltiies to assist with process, exec and fork)
- <b>CONVERSION</b> (Utilities to assist with conversion)
- <b>GFX</b> (Utilities to assist with anything graphical)
- <b>AUDIO</b> (Utilities to assist with audio playback and processing)
- <b>VIDEO</b> (Utiliteis to assist with video playback and processing)
- <b>SERVER</b> (Utilities to assist with anything server related)
- <b>EVENTS</b> (Utilities to assist with event handling)
- <b>PARSERS</b> (Utilities to assist with parsing)
- <b>ELECTRON</b> (Utilities to assis with electron)

So you can have access to them all via:
 <b>aftc.io.<function_name></b>

```
const aftc = require("./aftc.js");

// Then access each of the module from there
aftc.io.xxxx(args)
aftc.conversion.xxxx(args)
aftc.debug.xxxx(args)
aftc.events.xxxx(args)
aftc.gfx.xxxx(args)
aftc.server.xxxx(args)
// etc
```


<br>




## Installation
```
npm i aftc.node.libs
```

<br>


# Usage

Usage examples can be found in file tests folder, check package.json for npm run commands.

```
// Require AFTC.Node.Libs
const aftc = require("../node_modules/aftc.node.libs/aftc.js");
```

<br>

# AFTC.Node.Libs > Debug

## <b>log(arg)</b>
No more typing console.log, just type log from now on. Also has text and background color capabilities.
```
const debug = aftc.debug;
const log = debug.log;

log("Hello World");

// Coloring in things
// log(varToOutput,textColor,backgroundColor);

log("Black text on a white background","black","white");
log("White text on a red background","white","red");
log("Red text","red");
log("Ged text","green");
log("yellow text","yellow");
log("blue text","blue");
log("magenta text","magenta");
log("cyan text","cyan");
log("white text","white");
log("black text","black");
```



Options for <b>textColor</b> and <b>backgroundColor</b> are :
- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white


<br>





## logStyle(styleType,styleName)
Allows you to style your log before you output.

```
const debug = aftc.debug;
const log = debug.log;
const logStyle = debug.logStyle;

log("This text is white on black (your defaults)");

logStyle("txt","red");
logStyle("bg","yellow");
log("This text is red text on yellow background");

logStyle("reset");
log("This text is back to your defaults");

// I pref to just use log("hello",textColor,bgColor);
// eg log("hello","black","white")
```

### Usage: logStyle(styleType,styleName)
styleType options are:
- text
- txt
- background
- bg
- special

styleName options for styleType's of text and background are:
- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white

styleName options for styleType 'sepcial' are:
- reset
- bright
- dim (this is default)
- underline
- inverse



<br>





# AFTC.Node.Libs > IO (Input/Output)

## fileExists(filePath)
Checks if a file exists or not, returns a boolean.

```
// io
const io = require("./io/io.js");

// File exists check
var fileExists = io.fileExists("./io");

if (fileExists){
    // It exists!
} else {
    // Doesn't exist
}

```
<br>







## fileExists(filePath)
Checks if a file exists or not, returns a boolean.

```
// io
const io = require("./io/io.js");

// Dir exists check
var dirExists = io.dirExists("./io");

if (dirExists){
    // It exists!
} else {
    // Doesn't exist
}
```
<br>







## writeFile(filePath,data)
Writes data to a file

```
// io
const io = require("./io/io.js");

io.writeFile("./config.json",jsonData);
```
<br>







## readFile(filePath)
Reads a file.

```
// io
const io = require("./io/io.js");
var data = io.readFile("./config.json");

if (!data){
    // ERROR
}
```
<br>










## md(path) || mkdir(path)
Creates a directory

```
// io
const io = require("./io/io.js");

io.md("./src/");
```
<br>











<br><br><br><br>


## Found this useful? Please Donate...
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br><br><br><br>

[![Hire](https://www.allforthecode.co.uk/images/pph_widget.jpg)](http://pph.me/Darcey)

