"use strict";

const isString = val => typeof val === "string";
const getStartVal = function (val, arr) {
    if (val === false) {
        return 0;
    } else {
        return val < 0 ? arr.length + val : val;
    }
};
const getEndVal = function (val, arr) {
    if (val === false) {
        return arr.length;
    } else {
        return val < 0 ? arr.length + val : val;
    }
};
const getStepped = (arr, step) => arr.filter((item, index) => index % step === 0);

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
    const arr = inputIsString ? input.split("") : input;
    const startVal = getStartVal(start, arr);
    const endVal = getEndVal(end, arr);
    let result = arr.slice(startVal, endVal);

    if (step !== false) {
        if (step === 0) {
            throw new RangeError("slice step cannot be zero");
        } else if (step < 0) {
            result = getStepped(result.reverse(), step);
        } else {
            result = getStepped(result, step);
        }
    }

    return inputIsString ? result.join("") : result;
};
