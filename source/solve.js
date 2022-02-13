'use strict';

// consider reading https://www.engr.mun.ca/~theo/Misc/exp%5fparsing.htm

const DecimalPoint = '.';
const TerminalChar = '\x00';
const SupportedOperators = '(+-*/)';

const TokenTypeNumber = 'number';
const TokenTypeOperator = 'operator';

class Token {
  constructor(type, value) {
    this.type = type
    this.value = value
  }
}

class UnaryOperator {
  constructor(op, expr) {
    this.op = op;
    this.expr = expr;
  }
}

class BinaryOperator {
  constructor(op, left, right) {
    this.op = op;
    this.left = left;
    this.right = right;
  }
}

function isDigit(ch) {
  return (ch >= '0') && (ch <= '9');
}

class Lexer {
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
    return undefined;
  }

  scanNumber() {
    let ch = this.peekChar();
    if (!isDigit(ch) && (ch !== DecimalPoint)) {
      return undefined;
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
    if (token !== undefined) {
      return token;
    }

    token = this.scanOperator();
    if (token !== undefined) {
      return token;
    }

    return undefined;
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
      let expr = this.parseAdditive();
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
    console.log(`syntax tree for [${this.parser.lexer.expr}]`, tree);
    return this.exec(tree);
  }

  exec(node) {
    if (node instanceof Token && node.type === TokenTypeNumber) {
      return parseFloat(node.value);
    }

    if (node instanceof BinaryOperator) {
      const left = this.exec(node.left);
      const right = this.exec(node.right);
      switch (node.op) {
        case '+':
          return left + right;
        case '-':
          return left - right;
        case '*':
          return left * right;
        case '/':
          return left / right;
        default:
          throw new SyntaxError(`unknown operator [${node.operator}]`);
      }
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

/**
 * Evaluates one variable expression with a given argument.
 * @param {string} expr - The expression to evaluate.
 * @param {number} arg - The argument to the expression.
 * @returns {number} - The result of evaluation.
 */
const solve = (expr, arg) => {
  const variableName = 'x';
  expr = expr.replaceAll(variableName, arg.toString()).replaceAll(' ', '');
  const evaluator = new Evaluator(expr);
  return evaluator.evaluate();
};
