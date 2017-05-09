"use strict";

/**
 * Calculate levenshtein string distance
 * @param  {String} str1 Input string 1
 * @param  {String} str2 Input string 2
 * @return {Number} String distance; the lower, the closer
 */
module.exports = function (input, start, end, step) {
    //Cache string length
    const str1_l = str1.length;
    const str2_l = str2.length;

    if (str1_l === 0) {
        return str2_l; //Exit early if str1 is emtpy
    } else if (str2_l === 0) {
        return str1_l; //Exit early if str2 is emtpy
    } else {
        /**
         * Create matrix that is (str2.length+1)x(str1.length+1) fields
         */
        const matrix = [];

        //Increment along the first column of each row
        for (let y = 0; y <= str2_l; y++) {
            matrix[y] = [y];
        }

        //Increment each column in the first row
        for (let x = 0; x <= str1_l; x++) {
            matrix[0][x] = x;
        }

        //Fill matrix
        for (let y = 1; y <= str2_l; y++) {
            const matrix_column_current = matrix[y];
            const matrix_column_last = matrix[y - 1];

            for (let x = 1; x <= str1_l; x++) {
                if (str2.charAt(y - 1) === str1.charAt(x - 1)) { //Check if letter at the position is the same
                    matrix_column_current[x] = matrix_column_last[x - 1];
                } else { //Check for substitution/insertion/deletion
                    const substitution = matrix_column_last[x - 1] + 1;
                    const insertion = matrix_column_current[x - 1] + 1;
                    const deletion = matrix_column_last[x] + 1;

                    matrix_column_current[x] = Math.min.apply(null, [substitution, insertion, deletion]); //Get smallest of values
                }
            }
        }

        return matrix[str2_l][str1_l]; //Return max value
    }
};
