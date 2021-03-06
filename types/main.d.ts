/**
 * Slices a string or array python-style.
 *
 * @param {string|Array<any>} input
 * @param {number|false} start
 * @param {number|false|null} [end=null]
 * @param {number|null} [step=null]
 * @returns {string|Array<any>}
 */
declare const pyslice: <T>(input: string | T[], start: number | false, end?: number | false | null, step?: number | null) => string | T | T[];
export default pyslice;
