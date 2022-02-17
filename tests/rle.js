'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('Валидные входные данные', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('BBBBBBBBBBBBBBBH'), 'B15H');
		
	});
	QUnit.test('Невалидные входные данные', function (assert) {
		assert.strictEqual(rle(1000), '-1');
		assert.strictEqual(rle(null), '-1');
		assert.strictEqual(rle(true), '-1');
		assert.strictEqual(rle('$2123#'), '-1');
		assert.strictEqual(rle('111333'), '-1');
		assert.strictEqual(rle('sdasdasd'), '-1');
	});
});
