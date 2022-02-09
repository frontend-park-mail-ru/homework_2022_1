'use strict';

QUnit.module('Тестируем функцию roman', function () {
	QUnit.test('roman правильно переводит из римской системы счисления', function (assert) {
		assert.strictEqual(roman('I'), 1);
		assert.strictEqual(roman('V'), 5);
		assert.strictEqual(roman('M'), 1000);
		assert.strictEqual(roman('l'), 50);
		assert.strictEqual(roman('d'), 500);

		assert.strictEqual(roman('iv'), 4);
		assert.strictEqual(roman('iiii'), 4);
		assert.strictEqual(roman('CM'), 900);

		assert.strictEqual(roman('MCMIV'), 1904);
		assert.strictEqual(roman('MCMXC'), 1990);
		assert.strictEqual(roman('mmxvii'), 2017);
	});

	QUnit.test('roman правильно переводит из десятичной системы счисления', function (assert) {
		assert.strictEqual(roman(1), 'I');
		assert.strictEqual(roman(5), 'V');
		assert.strictEqual(roman(1000), 'M');
		assert.strictEqual(roman(50), 'L');
		assert.strictEqual(roman(500), 'D');

		assert.strictEqual(roman(4), 'IV');
		assert.strictEqual(roman(900), 'CM');

		assert.strictEqual(roman(1904), 'MCMIV');
		assert.strictEqual(roman(1990), 'MCMXC');
		assert.strictEqual(roman(2017), 'MMXVII');
	});

	QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
		assert.strictEqual(roman('1904'), 'MCMIV');
		assert.strictEqual(roman('1990'), 'MCMXC');
		assert.strictEqual(roman('2017'), 'MMXVII');
	});

	QUnit.test('Перевод из римских в десятичную', function (assert) {
		assert.strictEqual(roman('II'), 2, 'nice');
		assert.strictEqual(roman('I'), 1, 'nice');
		assert.strictEqual(roman('IV'), 4, 'nice');
		assert.strictEqual(roman('V'), 5, 'nice');
		assert.strictEqual(roman('VI'), 6, 'nice');
		assert.strictEqual(roman('MMIX'), 2009, 'nice');
	});

	QUnit.test('Перевод из десятичной в римскую', function (assert) {
		assert.strictEqual(roman(2), 'II', 'nice');
		assert.strictEqual(roman(1), 'I', 'nice');
		assert.strictEqual(roman(4), 'IV', 'nice');
		assert.strictEqual(roman(5), 'V', 'nice');
		assert.strictEqual(roman(6), 'VI', 'nice');
		assert.strictEqual(roman(2009), 'MMIX', 'nice');
	});

	QUnit.test('Не валидные данные', function (assert) {
		assert.throws(() => roman(null), TYPE_ERROR);
		assert.throws(() => roman({'' : 7}), TYPE_ERROR);
		assert.throws(() => roman(''), TYPE_ERROR);
	});
});
