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

  peekChar() {
    return (this.index < this.length ? this.expr.charAt(this.index) : TerminalChar);
  }

  nextChar() {
    let ch = TerminalChar;
    if (this.index < this.length) {
      ch = this.expr.charAt(this.index);
      ++this.index;
    }
    return ch;
  }

  scanSymbol() {
    let ch = this.peekChar();
    if (isSymbol(ch)) {
      this.nextChar();
      return new Token(TokenTypeSymbol, ch);
    }
    return;
  }

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

  scanNumber() {
    let ch = this.peekChar();
    if (!isDigit(ch) && (ch !== DecimalPoint)) {
      return;
    }

    let number = '';
    if (ch !== DecimalPoint) {
      number = this.nextChar();
      while (true) {
        ch = this.peekChar();
        if (!isDigit(ch)) {
          break;
        }
        number += this.nextChar();
      }
    }

    if (ch === DecimalPoint) {
      number += this.nextChar();
      while (true) {
        ch = this.peekChar();
        if (!isDigit(ch)) {
          break;
        }
        number += this.nextChar();
      }
    }

    return new Token(TokenTypeNumber, number);
  }

  next() {
    const token = this.#next();
    this.prevToken = token;
    return token;
  }

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

  peek() {
    const index = this.index;
    const token = this.next();
    this.index = index;
    return token;
  }

  reset(expr) {
    this.index = 0;
    this.expr = expr;
  }
}

class RPN {
  constructor(expr) {
    this.rpn = [];
    this.opStack = [];
    this.expr = expr;
    this.lexer = new Lexer(expr);
  }

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

  handleTokenTypeNumber(number) {
    this.rpn.push(number);
  }

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

  handleTokenTypeUnaryOperator(up) {
    this.rpn.push(up);
  }

  handleTokenTypeBinaryOperator(bp) {
    let topBp = this.opStack.at(-1);
    while (topBp instanceof BinaryOperator && topBp.precedence >= bp.precedence) {
      this.rpn.push(this.opStack.pop());
      topBp = this.opStack.at(-1);
    }
    this.opStack.push(bp);
  }
}

class RPNEvaluator {
  constructor(expr) {
    this.expr = expr;
    this.index = 0;
    this.stack = [];
  }

  evaluate() {
    while (this.index < this.expr.length) {
      this.#evaluate();
    }
    return this.stack.pop();
  }

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
  const variableName = 'x';
  expr = expr.replaceAll(variableName, arg.toString()).replaceAll(' ', '');

  if (expr.length === 0) {
    throw new Error('empty expression');
  }

  const rpn = new RPN(expr);
  const rpnEvaluator = new RPNEvaluator(rpn.getRPN());

  return rpnEvaluator.evaluate();
};
