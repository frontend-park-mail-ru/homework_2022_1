'use strict';

// consider reading https://www.engr.mun.ca/~theo/Misc/exp%5fparsing.htm

const DecimalPoint = '.';
const TerminalChar = '\x00';
const SupportedOperators = '(+-*/)';

const TokenTypeNumber = 'number';
const TokenTypeOperator = 'operator';

const PrecedenceMap = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

const OperatorsMap = {
  '+': (a, b) => (a + b),
  '-': (a, b) => (a - b),
  '*': (a, b) => (a * b),
  '/': (a, b) => {
    if (b === 0) {
      throw new Error('division by zero');
    }
    return a / b;
  },
}

// --------------------- Context Free Grammar Solution --------------------- //

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

/** Class representing an unary operator. */
class UnaryOperator {
  /**
   * Create an unary operator.
   * @param {string} op - The id of the operator.
   * @param {string} expr - The expression to be applied with the operator.
   */
  constructor(op, expr) {
    this.op = op;
    this.expr = expr;
  }
}

/** Class representing a binary operator. */
class BinaryOperator {
  /**
   * Create a binary operator.
   * @param {string} op - The id of the operator.
   * @param {string} left - The left argument to the operator.
   * @param {string} right - The right argument to the operator.
   */
  constructor(op, left, right) {
    this.op = op;
    this.left = left;
    this.right = right;
  }
}

const isDigit = (ch) => (ch >= '0') && (ch <= '9');

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

  scanOperator() {
    let ch = this.peekChar();
    if (SupportedOperators.indexOf(ch) >= 0) {
      return new Token(TokenTypeOperator, this.nextChar());
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
    let token = this.scanNumber();
    if (token) {
      return token;
    }

    token = this.scanOperator();
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
}

class Parser {
  constructor(expr) {
    this.lexer = new Lexer(expr);
  }

  parse() {
    return this.parseAdditive();
  }

  matchOp(token, op) {
    return token instanceof Token && token.type === TokenTypeOperator && token.value === op;
  }

  parseAdditive() {
    let expr = this.parseMultiplicative();
    let token = this.lexer.peek();
    while (this.matchOp(token, '+') || this.matchOp(token, '-')) {
      token = this.lexer.next();
      expr = new BinaryOperator(token.value, expr, this.parseMultiplicative());
      token = this.lexer.peek();
    }
    return expr;
  }

  parseMultiplicative() {
    let expr = this.parseUnary();
    let token = this.lexer.peek();
    while (this.matchOp(token, '*') || this.matchOp(token, '/')) {
      token = this.lexer.next();
      expr = new BinaryOperator(token.value, expr, this.parseUnary());
      token = this.lexer.peek();
    }
    return expr;
  }

  parseUnary() {
    let token = this.lexer.peek();
    if (this.matchOp(token, '-') || this.matchOp(token, '+')) {
      token = this.lexer.next();
      const expr = this.parseUnary();
      return new UnaryOperator(token.value, expr);
    }
    return this.parsePrimary();
  }

  parsePrimary() {
    const token = this.lexer.peek();
    if (token.type === TokenTypeNumber) {
      return this.lexer.next();
    }

    if (this.matchOp(token, '(')) {
      this.lexer.next();
      const expr = this.parseAdditive();
      if (!this.matchOp(this.lexer.next(), ')')) {
        throw new SyntaxError('expected closing bracket');
      }
      return expr;
    }

    throw new SyntaxError(`failed to parse`);
  }
}

class Evaluator {
  constructor(expr) {
    this.parser = new Parser(expr);
  }

  evaluate() {
    const tree = this.parser.parse();
    return this.exec(tree);
  }

  exec(node) {
    if (node instanceof Token && node.type === TokenTypeNumber) {
      return parseFloat(node.value);
    }

    if (node instanceof BinaryOperator) {
      if (!OperatorsMap[node.op]) {
        throw new SyntaxError(`unknown operator [${node.operator}]`);
      }
      const left = this.exec(node.left);
      const right = this.exec(node.right);
      return OperatorsMap[node.op](left, right);
    }

    if (node instanceof UnaryOperator) {
      const expr = this.exec(node.expr);
      switch (node.op) {
        case '+':
          return expr;
        case '-':
          return -expr;
        default:
          throw new SyntaxError(`unknown operator [${node.operator}]`);
      }
    }

    throw new SyntaxError('invalid syntax node');
  }
}

// --------------------- Reeverse Polish Notation Solution --------------------- //

class RPN {
  constructor(expr) {
    this.rpn = [];
    this.opStack = [];
    this.lexer = new Lexer(expr);
  }

  getRPN() {
    console.log(`getting rpn for [${this.lexer.expr}]`);
    let token = this.lexer.next();
    while (token) {
      switch (token.type) {
        case TokenTypeNumber:
          this.handleTokenTypeNumber(token.value);
          break;
        case TokenTypeOperator:
          this.handleTokenTypeOperator(token.value);
          break;
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

  handleTokenTypeOperator(op) {
    if (op === '(') {
      this.opStack.push(op);
    } else if (op === ')') {
      while (this.opStack.at(-1) !== '(') {
        this.rpn.push(this.opStack.pop());
      }
      this.opStack.pop();
    } else {
      let topOp = this.opStack.at(-1);
      while (topOp !== '(' && PrecedenceMap[topOp] >= PrecedenceMap[op]) {
        this.rpn.push(this.opStack.pop());
        topOp = this.opStack.at(-1);
      }
      this.opStack.push(op);
    }
  }
}

const calculateRPN = (expr) => {
  console.log(expr);
  const stack = [];

  // unary operators are not processed correctly :(
  expr.forEach(op => {
    if (OperatorsMap[op]) {
      if (stack.length == 1) {
        if (op === '-') {
          stack.push(-stack.pop());
        }
      } else {
        // passing two last elements from the stack
        stack.push(OperatorsMap[op](...stack.splice(-2)));
      }
    } else {
      stack.push(parseFloat(op));
    }
  });

  return stack.pop();
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

  // const evaluator = new Evaluator(expr);
  // let result = 0;
  // try {
  //   result = evaluator.evaluate();
  // } catch (err) {
  //   console.log(err);
  //   throw err;
  // }
  // return result;

  const rpn = new RPN(expr);
  return calculateRPN(rpn.getRPN());
};
