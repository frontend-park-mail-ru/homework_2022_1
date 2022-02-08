'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
		assert.strictEqual(chess('1'), null);
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});

	QUnit.test('Шахматная доска 5 на 5', function (assert) {
		const expected = 
			'* * *\n' +
			' * * \n' +
			'* * *\n' +
			' * * \n' +
			'* * *\n';
		assert.strictEqual(chess(5), expected);
		assert.strictEqual(chess('5'), expected);
	});

	QUnit.test('Шахматная доска 7 на 7', function (assert) {
		const expected = 
			'* * * *\n' +
			' * * * \n' +
			'* * * *\n' +
			' * * * \n' +
			'* * * *\n' +
			' * * * \n' +
			'* * * *\n';
 		assert.strictEqual(chess(7), expected);
		assert.strictEqual(chess('7'), expected);
	});

	QUnit.test('Шахматной доски 0 на 0 не бывает', function (assert) {
		assert.strictEqual(chess(0), null);
		assert.strictEqual(chess('0'), null);
	});

	QUnit.test('Невалидные данные для построения шахматной доски', function(assert) {
		assert.strictEqual(chess('Девять'), null);
		assert.strictEqual(chess('Nine'), null);
		assert.strictEqual(chess('*'), null);
		assert.strictEqual(chess('#'), null);
		assert.strictEqual(chess('.'), null);
		assert.strictEqual(chess('!'), null);
		assert.strictEqual(chess('&'), null);
		assert.strictEqual(chess('?'), null);
		assert.strictEqual(chess(''), null);
		assert.strictEqual(chess(1 / 2), null);
		assert.strictEqual(chess('1 / 2'), null);
		assert.strictEqual(chess('12$'), null);
		assert.strictEqual(chess('5.2'), null);
		assert.strictEqual(chess(5.2), null);
		assert.strictEqual(chess(null), null);
		assert.strictEqual(chess(Object), null);
		assert.strictEqual(chess(-5), null);
		assert.strictEqual(chess('-5'), null);
		assert.strictEqual(chess(-10), null);
		assert.strictEqual(chess('-10'), null);
	});
});
