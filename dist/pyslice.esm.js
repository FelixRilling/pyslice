import { isString } from 'lightdash';

/**
 * Converts negative indexes.
 *
 * @private
 * @param {number} length
 * @param {number} index
 * @returns {number}
 */
const calcIndex = (length, index) => index < 0 ? length + index : index;
/**
 * Returns an array with every n-th item.
 *
 * @private
 * @param {Array<any>} arr
 * @param {number} step
 * @returns {Array<any>}
 */
const getStepped = (arr, step) => arr.filter((item, index) => index % step === 0);
/**
 * Slices a string or array python-style.
 *
 * @param {string|Array<any>} input
 * @param {number|false} start
 * @param {number|false|null} [end=null]
 * @param {number|null} [step=null]
 * @returns {string|Array<any>}
 */
const pyslice = (input, start, end = null, step = null) => {
    const inputIsString = isString(input);
    const arr = inputIsString ? input.split("") : input;
    const startVal = start === false ? 0 : calcIndex(arr.length, start);
    if (end !== null) {
        const endVal = end === false ? arr.length : calcIndex(arr.length, end);
        let result;
        result = arr.slice(startVal, endVal);
        if (step !== null) {
            if (step === 0) {
                throw new RangeError("slice step cannot be zero");
            }
            else if (step < 0) {
                result = getStepped(result.reverse(), step);
            }
            else {
                result = getStepped(result, step);
            }
        }
        return inputIsString ? result.join("") : result;
    }
    return arr[startVal];
};

export default pyslice;
