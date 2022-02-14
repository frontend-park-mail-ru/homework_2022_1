'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', -1), 0);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
		assert.strictEqual(solve('(x - 42) * (x + 42)', 42), 0);
		assert.strictEqual(solve('x * (x - x * (x + 1))', 2), -8);
		assert.strictEqual(solve('42 + x', -12), 30);
		assert.strictEqual(solve('-1 - x', -1), 0);
		assert.strictEqual(solve('--1 - -x', -1), 0);
		assert.strictEqual(solve('2.5*2 + 5', 2.5), 10);
		assert.strictEqual(solve('x/2/5 + 1', 10), 2);
		assert.strictEqual(solve('(x/2)*5 + 1', 10), 26);

		// for some reason it catches errors only when the function is executed in another function
		assert.throws(() => solve('((x + 1)', 0));
		assert.throws(() => solve('(x *) + 1', 0));
		assert.throws(() => solve('(x /) - 1', 0));
		assert.throws(() => solve('x +', 0));
		assert.throws(() => solve('1 / (x*x - 2*x)', 2));
		assert.throws(() => solve('', 0));
	});
});
