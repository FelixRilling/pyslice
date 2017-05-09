"use strict";

const isString = val => typeof val === "string";
const isArray = val => val instanceof Array;
const getStepped = (arr, step) => arr.filter((item, index) => index % step === 0);
const convertInput = function (input) {
    if (input) {
        return input.split("");
    } else if (isArray(input)) {
        return input;
    } else {
        throw new TypeError("can only slice arrays or strings");
    }
};

/**
 * Slices a string or array python-style
 * @param {String|Array} input
 * @param {Number|Boolean} start
 * @param {Number|Boolean} end
 * @param {Number|Boolean} step
 * @returns {String|Array}
 */
module.exports = function (input, start = false, end = false, step = false) {
    const inputIsString = isString(input);
    const inputVal=convertInput(input);
    const sliced = inputVal.slice(start, end);
    let result;

    if (step === false) {
        result = sliced;
    } else {
        if (step === 0) {
            throw new RangeError("slice step cannot be zero");
        } else if (step < 0) {
            result = getStepped(sliced.split("").reverse(), step).join("");
        } else {
            result = getStepped(sliced.split(""), step).join("");
        }
    }

    return inputIsString ? result.join("") : result;
};
