//@ts-check
const lodash = require("lodash");
const fs = require("fs");
const pMemoize = require("p-memoize")

/**
 * Some function
 * @param {string} foo 
 */
function test(foo) {
    return true;
}

exports.test = test;