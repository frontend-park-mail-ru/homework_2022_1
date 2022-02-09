'use strict';

var variableName = 'x';

/**
 * Evaluates one variable expression with a given argument.
 * @param {string} expr - The expression to evaluate.
 * @param {number} arg - The argument to the expression.
 */
function solve(expr, arg) {
    return eval(expr.replaceAll(variableName, arg.toString()));
};
