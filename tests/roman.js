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

QUnit.module('Тестируем функцию convertIntToRoman', function () {
	QUnit.test('convertIntToRoman правильно переводит из десятичной системы счисления', function (assert) {
		assert.strictEqual(convertIntToRoman(1), 'I');
		assert.strictEqual(convertIntToRoman(5), 'V');
		assert.strictEqual(convertIntToRoman(1000), 'M');
		assert.strictEqual(convertIntToRoman(50), 'L');
		assert.strictEqual(convertIntToRoman(500), 'D');

		assert.strictEqual(convertIntToRoman(4), 'IV');
		assert.strictEqual(convertIntToRoman(900), 'CM');

		assert.strictEqual(convertIntToRoman(1904), 'MCMIV');
		assert.strictEqual(convertIntToRoman(1990), 'MCMXC');
		assert.strictEqual(convertIntToRoman(2017), 'MMXVII');
	});

	QUnit.test('Перевод из десятичной в римскую', function (assert) {
		assert.strictEqual(convertIntToRoman(2), 'II', 'nice');
		assert.strictEqual(convertIntToRoman(1), 'I', 'nice');
		assert.strictEqual(convertIntToRoman(4), 'IV', 'nice');
		assert.strictEqual(convertIntToRoman(5), 'V', 'nice');
		assert.strictEqual(convertIntToRoman(6), 'VI', 'nice');
		assert.strictEqual(convertIntToRoman(2009), 'MMIX', 'nice');
	});

	QUnit.test('Не валидные данные', function (assert) {
		assert.throws(() => convertIntToRoman(null), TYPE_ERROR);
		assert.throws(() => convertIntToRoman({'' : 7}), TYPE_ERROR);
		assert.throws(() => convertIntToRoman(''), TYPE_ERROR);
	});
});

QUnit.module('Тестируем функцию convertRomanToInt', function () {
	QUnit.test('convertRomanToInt правильно переводит из римской системы счисления', function (assert) {
		assert.strictEqual(convertRomanToInt('I'), 1);
		assert.strictEqual(convertRomanToInt('V'), 5);
		assert.strictEqual(convertRomanToInt('M'), 1000);
		assert.strictEqual(convertRomanToInt('l'), 50);
		assert.strictEqual(convertRomanToInt('d'), 500);

		assert.strictEqual(convertRomanToInt('iv'), 4);
		assert.strictEqual(convertRomanToInt('iiii'), 4);
		assert.strictEqual(convertRomanToInt('CM'), 900);

		assert.strictEqual(convertRomanToInt('MCMIV'), 1904);
		assert.strictEqual(convertRomanToInt('MCMXC'), 1990);
		assert.strictEqual(convertRomanToInt('mmxvii'), 2017);
	});

	QUnit.test('Перевод из римских в десятичную', function (assert) {
		assert.strictEqual(convertRomanToInt('II'), 2, 'nice');
		assert.strictEqual(convertRomanToInt('I'), 1, 'nice');
		assert.strictEqual(convertRomanToInt('IV'), 4, 'nice');
		assert.strictEqual(convertRomanToInt('V'), 5, 'nice');
		assert.strictEqual(convertRomanToInt('VI'), 6, 'nice');
		assert.strictEqual(convertRomanToInt('MMIX'), 2009, 'nice');
	});

	QUnit.test('Не валидные данные', function (assert) {
		assert.throws(() => convertRomanToInt(null), TYPE_ERROR);
		assert.throws(() => convertRomanToInt({'' : 7}), TYPE_ERROR);
	});
});
