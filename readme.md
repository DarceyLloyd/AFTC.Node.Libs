# AFTC.Node.Libs
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

A collection of utilities / functions I find useful when working with NodeJS.


I don't want a 1000 different packages looked up and installed each time I start a project, so I made this for quick and easy install to give me what I consider the essentials and get on with development.

<br>

#### Want the version for websites? https://github.com/DarceyLloyd/AFTC.js

<br>

## A quick look at what's in the box

- <b>DEV / DEBUG</b> (log, colorLog, nicer log outputs of objects and arrays)
- <b>IO</b> (Utils/Tools to assist with downloading, reading, writing, exists, streaming etc)
- <b>UTILS</b> (Utils/Tools to assist with common function & rapid development)
- <b>PROCESS</b> (Utils/Tools to assist with process, exec and fork)
- <b>CONVERSION</b> (Utils/Tools to assist with conversion


<br><br><br>

- Log (auto file logging when enabled)
```
    const aftc = require("aftc.node.libs");
    aftc.debug.enableLogToFile();
    // log will now also log to a file "out.txt"
    log("hello world");
```
- Added readFileAsync(path,callback); // returns data or error object
- Added readFileSync(path,callback); // returns data or error object




# Installation
```
npm i aftc.node.libs
```

<br>
<br>


# Usage

Usage examples can be found in file tests folder, check package.json for npm run commands.

```
// Require AFTC.Node.Libs
const aftc = require("../node_modules/aftc.node.libs/aftc.node.libs.js");
//or 
const aftc = require("aftc.node.libs");

const log = aftc.debug.log;
const logTo = aftc.debug.logTo;
```



So you can have access to them all via:
```
// Everything
const aftc = require("../node_modules/aftc.node.libs/aftc.node.libs.js");
//or 
const aftc = require("aftc.node.libs");

aftc.debug.log
aftc.debug.logTo
aftc.io.writeFile
//etc
```


Or just grab the module with all its sub functions:
```
// Pick your modules
const debug = require("./node_modules/aftc.node.libs/debug);
const io = require("./node_modules/aftc.node.libs/io);
const utils = require("./node_modules/aftc.node.libs/utils);

// you can then use
debug.log
debug.logTo
debug.logStyle
```


Or you can pick exactly what you want:

```
// Precision picking
const log = require("./node_modules/debug/log.js).log; // log.js has multiple functions exports
const logTo = require("./node_modules/debug/logTo.js);
const logStyle = require("./node_modules/debug/logStyle.js);

const readFile = require("./node_modules/io/readFile.js);
const writeFile = require("./node_modules/io/writeFile.js);
```

## I pref to use it like this

```
const aftc = require("./node_modules/aftc.js");
const log = aftc.debug.log;
const logTo = aftc.debug.logTo;
```




<br><br><br>




# <b>What's new?</b>
- new addtion <b>logTo(string,file,append)</b>
- enhanced log further, now returns what it logs, useful for dumping what it logs to logTo
- added now module to the todo list <b>detection</b>, I will be adding detection for:
    - windows
    - linux
    - osx

<br>

## What will I be working on next?
Further progress on the io module, I will be writing wrappers for:
- writeFile
- writeFileSync
- write
- writeSync
- writeStream

and

- read
- readSync
- readDir
- readDirSync
- readFile
- readFileSync
- readStream

Then a bit of clean up...


<br>
<br>
<br>
<br>
<br>


# <b>What's really in the box and how to use it</b>
<br>

# AFTC.Node.Libs > Debug

## <b>log(arg)</b>
No more typing console.log, just type log from now on. Also has text and background <b>color capabilities</b>.
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


<br><br>





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



<br><br>





## <b>NEW: logTo(message,file,append)</b>
- message : string
- file : string (relative or absolute)
- append : boolean (default false)

NOTE: If you supply a relative path logTo will attempt to write to the directory where package.json resides, it does this via relative pathing, if it gets it wrong let me know and where it goes to on your system. Works fine for me in Windows and Ubuntu.

```
var a = 1;
var b = 2;
var c = "hello world";
var msg = "";
msg += "a = " + a + "\n";
msg += "b = " + b + "\n";
msg += "c = " + c + "\n";

logTo(msg,"./out.txt");
```


Want to append to your file instead of clean each time you use logTo? Use it with the 3rd paramater set to true eg.

```
var line1 = "Email: Darcey@AllForTheCode.co.uk\n";
var line2 = "Location: UK\n";
logTo(line1,"./out.txt",true);
logTo(line2,"./out.txt",true);

```

<br><br><br>






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



<a href="http://pph.me/Darcey" target="_blank" title="I am available for hire, click here!">![Hire](http://www.allforthecode.com/images/pph_widget.jpg)</a>

