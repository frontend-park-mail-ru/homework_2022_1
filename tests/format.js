'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format корректно отработает с некорректными данными', function (assert) {
		const input1 = "";
		const input2 = ["i'm", "not", "correct", "data"];
		const input3 = [ 0, 1, 2, 10, 100, 1, 1000, 10000, -10000 ];
		const input4 = [ "asd", 1, 2, 10, 100, 1, 1000, "asd", "asdasd", "asda123123", -10000 ];

		const expected1 = undefined;
		const expected2 = undefined;
		const expected3 = undefined;
		const expected4 = undefined;

		assert.strictEqual(format(input1, 200), expected1);
		assert.strictEqual(format(input2, 20), expected2);
		assert.strictEqual(format(input3, "i'm undefined :)"), expected3);
		assert.strictEqual(format(input4, 3000), expected4);
	});


	QUnit.test('format корректно отработает с количеством колонок больше, чем самих чисел', function (assert) {
		const input1 = [ 1, 2, 3];
		const input2 = [ 1 ];

		const expected1 = "1 2 3";
		const expected2 = "1";

		assert.strictEqual(format(input1, 50), expected1);
		assert.strictEqual(format(input2, 500), expected2);
	});

});
