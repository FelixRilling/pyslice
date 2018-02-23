/**
 * Slices a string or array python-style
 *
 * @param {string|Array<any>} input
 * @param {number|false} start
 * @param {number|false|null} [end=null]  optional
 * @param {number|null}       [step=null]
 * @returns {string|Array<any>}
 */
declare const pyslice: (input: string, start: number | false, end?: number | false | null, step?: number | null) => any;
export default pyslice;
