'use strict';

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});

	QUnit.test('Ёлочка высотой NaN', function (assert) {
		const expected = null;
		assert.strictEqual(tree(NaN), expected);
		assert.strictEqual(tree("nya"), expected);
	});

	QUnit.test('Ёлочка высотой null', function (assert) {
		const expected = null;
		assert.strictEqual(tree(null), expected);
	});

	QUnit.test('Ёлочка высотой undefined', function (assert) {
		const expected = null;
		assert.strictEqual(tree(undefined), expected);
	});


	QUnit.test('Ёлочка высотой float', function (assert) {
		const expected = null;
		assert.strictEqual(tree(4.4), expected);
		assert.strictEqual(tree('4.4'), expected);
	});

	QUnit.test('Ёлочка высотой infinity', function (assert) {
		const expected = null;
		assert.strictEqual(tree(1 / 0), expected);
		assert.strictEqual(tree(-1 / 0), expected);
	});


});
