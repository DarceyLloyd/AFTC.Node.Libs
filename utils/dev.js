/*
 * Author: Darcey.Lloyd@gmail.com
*/


// require / imports / libs
//const util = require('util');


// debug
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const debug = require("../debug/debug.js");
const log = debug.log;
const logStyle = debug.logStyle;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






function isArrayInString(string, array) {
	return (new RegExp('(' + array.join('|').replace(/\./g, '\\.') + ')$')).test(string);
}


function isArray(obj) {
	return !!obj && obj.constructor === Array;
	//return arr.constructor == Array;
}








// Methods, Aliases and Export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// let cloned = Object.assign({}, source);
const methods = {
    isArrayInString:isArrayInString,
	isArray:isArray
}

module.exports = methods;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

