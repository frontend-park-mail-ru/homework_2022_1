// Consider reading this article about Shunting-Yard Algorithm with unary operators:
// https://www.andr.mu/logs/the-shunting-yard-algorithm

'use strict';

const isDigit = (ch) => (ch >= '0') && (ch <= '9');

const DecimalPoint = '.';
const TerminalChar = '\x00';

const UnaryOperators = '+-';
const BinaryOperators = '+-*/';
const SupportedOperators = '+-*/';
const SupportedSymbols = '()';

const isOperator = (ch) => (SupportedOperators.indexOf(ch) >= 0);
const isSymbol = (ch) => (SupportedSymbols.indexOf(ch) >= 0);

const TokenTypeNumber = 'number';
const TokenTypeSymbol = 'symbol';
const TokenTypeUnaryOperator = 'unary operator';
const TokenTypeBinaryOperator = 'binary operator';

class Operator {
  constructor(op, func, precedence) {
    this.op = op;
    this.func = func;
    this.precedence = precedence;
  }
}

class UnaryOperator extends Operator { }
class BinaryOperator extends Operator { }

const UnaryOperatorPlus = new UnaryOperator('+', (a) => (a), 3);
const UnaryOperatorMinus = new UnaryOperator('-', (a) => (-a), 3);

const UnaryOperatorsMap = {
  '+': UnaryOperatorPlus,
  '-': UnaryOperatorMinus,
};

const BinaryOperatorPlus = new BinaryOperator('+', (a, b) => (a + b), 1);
const BinaryOperatorMinus = new BinaryOperator('-', (a, b) => (a - b), 1);
const BinaryOperatorMult = new BinaryOperator('*', (a, b) => (a * b), 2);
const BinaryOperatorDiv = new BinaryOperator('/', (a, b) => {
  if (b === 0) {
    throw new Error('division by zero');
  }
  return a / b;
}, 2);

const BinaryOperatorsMap = {
  '+': BinaryOperatorPlus,
  '-': BinaryOperatorMinus,
  '*': BinaryOperatorMult,
  '/': BinaryOperatorDiv,
};

/** Class representing a token.
 * Token is a unit (building block) of an expression.
*/
class Token {
  /**
   * Create a token.
   * @param {string} type - The type of the token.
   * @param {any} value - The value of the token.
   */
  constructor(type, value) {
    this.type = type
    this.value = value
  }
}

/** Class representing a lexer for math expressions. */
class Lexer {
  /**
   * Create a lexer;
   * @param {string} expr - The math expression to parse.
   */
  constructor(expr) {
    this.index = 0;
    this.expr = expr;
    this.length = expr.length;
    this.prevToken = undefined;
  }

  /**
    * Get the current character of expr without shifting forward.
    * @return {string} The current character.
    */
  peekChar() {
    return (this.index < this.length ? this.expr.charAt(this.index) : TerminalChar);
  }

  /**
    * Get the current character of expr with shifting forward.
    * @return {string} The current character.
    */
  nextChar() {
    let ch = TerminalChar;
    if (this.index < this.length) {
      ch = this.expr.charAt(this.index);
      ++this.index;
    }
    return ch;
  }

  /**
    * Look for a symbol in the expression starting from this.index.
    * @return {Token} The symbol if found.
    */
  scanSymbol() {
    let ch = this.peekChar();
    if (isSymbol(ch)) {
      this.nextChar();
      return new Token(TokenTypeSymbol, ch);
    }
    return;
  }

  /**
    * Look for an operator in the expression starting from this.index.
    * @return {Token} The operator if found.
    */
  scanOperator() {
    let ch = this.peekChar();
    if (isOperator(ch)) {
      this.nextChar();
      if (!this.prevToken || isOperator(this.prevToken.value.op) || this.prevToken.value === '(') {
        return new Token(TokenTypeUnaryOperator, UnaryOperatorsMap[ch]);
      }
      return new Token(TokenTypeBinaryOperator, BinaryOperatorsMap[ch]);
    }
    return;
  }

  /**
    * Look for a number in the expression starting from this.index.
    * @return {Token} The number if found.
    */
  scanNumber() {
    let ch = this.peekChar();
    if (!isDigit(ch) && (ch !== DecimalPoint)) {
      return;
    }

    let number = '';
    if (this.peekChar() !== DecimalPoint) {
      number += this.scanNumberPiece();
    }

    if (this.peekChar() === DecimalPoint) {
      number += this.scanNumberPiece();
    }

    return new Token(TokenTypeNumber, number);
  }

  /**
    * Look for a number piece (integer or floating part) in the expression starting from this.index.
    * @return {string} The symbol.
    */
  scanNumberPiece() {
    let piece = this.nextChar();
    while (true) {
      const ch = this.peekChar();
      if (!isDigit(ch)) {
        break;
      }
      piece += this.nextChar();
    }
    return piece;
  }

  /**
    * Get the token wrapper and shift forward (keeps track of previous token).
    * @return {Token} The token if exists.
    */
  next() {
    const token = this.#next();
    this.prevToken = token;
    return token;
  }

  /**
    * Get the next token internals.
    * @return {Token} The token if exists.
    */
  #next() {
    let token = this.scanNumber();
    if (token) {
      return token;
    }

    token = this.scanOperator();
    if (token) {
      return token;
    }

    token = this.scanSymbol();
    if (token) {
      return token;
    }

    return;
  }

  /**
    * Get the token wrapper without shifting forward (keeps track of previous token).
    * @return {Token} The token if exists.
    */
  peek() {
    const index = this.index;
    const token = this.next();
    this.index = index;
    return token;
  }

  /**
    * Reset the lexer with an expression.
    * @param {string} expr - An expression.
    */
  reset(expr) {
    this.index = 0;
    this.expr = expr;
  }
}

/** Class representing a RPN constructor */
class RPN {
  constructor(expr) {
    this.rpn = [];
    this.opStack = [];
    this.expr = expr;
    this.lexer = new Lexer(expr);
  }

  /**
    * Get the RPN.
    * @return {Object[]} The token if exists.
    */
  getRPN() {
    let token = this.lexer.next();
    while (token) {
      switch (token.type) {
        case TokenTypeNumber:
          this.handleTokenTypeNumber(token.value);
          break;
        case TokenTypeSymbol:
          this.handleTokenTypeSymbol(token.value);
          break;
        case TokenTypeUnaryOperator:
          this.handleTokenTypeUnaryOperator(token.value);
          break;
        case TokenTypeBinaryOperator:
          this.handleTokenTypeBinaryOperator(token.value);
          break;
        default:
          throw new Error('unexpected token type');
      }
      token = this.lexer.next();
    }

    while (this.opStack.length > 0) {
      const op = this.opStack.pop();
      if (op === '(') {
        throw new SyntaxError('mismatching brackets');
      }
      this.rpn.push(op);
    }

    return this.rpn;
  }

  /**
    * Handle token type number.
    */
  handleTokenTypeNumber(number) {
    this.rpn.push(number);
  }


  /**
    * Handle token type symbol.
    */
  handleTokenTypeSymbol(symbol) {
    switch (symbol) {
      case '(':
        this.opStack.push(symbol);
        break;
      case ')':
        while (this.opStack.at(-1) !== '(') {
          this.rpn.push(this.opStack.pop());
        }
        this.opStack.pop();
        break;
      default:
        throw new SyntaxError('unexpected symbol');
    }
  }

  /**
    * Handle token type unary operator.
    */
  handleTokenTypeUnaryOperator(op) {
    this.rpn.push(op);
  }

  /**
    * Handle token type binary operator.
    */
  handleTokenTypeBinaryOperator(op) {
    let topOp = this.opStack.at(-1);
    while (topOp instanceof BinaryOperator && topOp.precedence >= op.precedence) {
      this.rpn.push(this.opStack.pop());
      topOp = this.opStack.at(-1);
    }
    this.opStack.push(op);
  }
}

/** Class representing an RPN Evaluator */
class RPNEvaluator {
  constructor(expr) {
    this.expr = expr;
    this.index = 0;
    this.stack = [];
  }

  /**
    * Evaluate the RPN expression.
    * @return {Number} The result of evaluation.
    */
  evaluate() {
    while (this.index < this.expr.length) {
      this.#evaluate();
    }
    return this.stack.pop();
  }

  /**
    * Eevaluate the RPN expression.
    */
  #evaluate() {
    const op = this.expr[this.index];
    ++this.index;

    if (op instanceof BinaryOperator) {
      if (this.stack.length < 2) {
        throw new SyntaxError('unmatched binary operator');
      }
      // passing two last elements from the stack
      this.stack.push(op.func(...this.stack.splice(-2)));
    } else if (op instanceof UnaryOperator) {
      // recurse
      this.#evaluate();
      this.stack.push(op.func(this.stack.pop()));
    } else {
      this.stack.push(parseFloat(op));
    }
  }
}

/**
 * Evaluates one variable expression with a given argument.
 * @param {string} expr - The expression to evaluate.
 * @param {number} arg - The argument to the expression.
 * @returns {number} - The result of evaluation.
 */
const solve = (expr, arg) => {
  if (typeof expr !== 'string') {
    throw new TypeError('[expr] is expected to be a string')
  }

  if (typeof arg !== 'number') {
    throw new TypeError('[arg] is expected to be a number')
  }

  const variableName = 'x';
  expr = expr.replaceAll(variableName, arg.toString()).replaceAll(' ', '');

  if (expr.length === 0) {
    throw new Error('empty expression');
  }

  const rpn = new RPN(expr);
  const rpnEvaluator = new RPNEvaluator(rpn.getRPN());

  return rpnEvaluator.evaluate();
};
