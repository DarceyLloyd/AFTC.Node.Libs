# <b>AFTC.Node.Libs</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

A collection of utilities / functions I find useful when working with <b>NodeJS</b>.

I don't want a 1000 different packages looked up and installed each time I start a project, so I made this for quick and easy install to give me what I consider the essentials and get on with development.

## NOTE: I am in the early stages of implementing all that is available in AFTC.js for the NodeJS version, main requirements will be completed soon.


<br>

#### <b>Want the version for websites? https://github.com/DarceyLloyd/AFTC.js

<br>


## <b>Details</b>
I don't want to go hunting for the latest and greates libraries or utilities all the time, so this gets deployed before any development starts and I know if I need file io, download, debug, development utilities 


## <b>Installation</b>
```
npm install aftc.node.libs
```

<br><br>


# <b>Usage</b>

Usage example can be found in file tests.js, which can be run via npm run test. Edit the file and uncomment out the test lines to see examples working.

```
// Require AFTC.Node.Libs
const aftc = require ("./AFTC.Node.Libs.js");
````



# <b>AFTC.Node.Libs > Debug</b>

## log()
No more typing console.log, just type log from now on. Also has text and background color capabilities.
```
const debug = aftc.debug;
const log = debug.log;

log("Console output default");

// Colors
// log("Console output of red text",textColor,backgroundColor);
log("Console output of black text with a white background","black","white");
log("Console output of white text with a red background","white","red");
```
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

<br><br>





# <b>AFTC.Node.Libs > IO (Input/Output)</b>

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
<br><br>







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
<br><br>







## writeFile(filePath,data)
Writes data to a file

```
// io
const io = require("./io/io.js");

io.writeFile("./config.json",jsonData);
```
<br><br>







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
<br><br>










## md(path) || mkdir(path)
Creates a directory

```
// io
const io = require("./io/io.js");

io.md("./src/");
```
<br><br>











<br><br><br><br><br><br>


## <b>Found this useful? Please Donate...</b>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

<br><br><br><br><br><br>

[![Hire](https://www.allforthecode.co.uk/images/pph_widget.jpg)](http://pph.me/Darcey)

