'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно c корректными строками', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('HHHHFCKKKKKKKKKVUUUUUUYDLLLDTNTNFTTTT'), 'H4FCK9VU6YDL3DTNTNFT4');
		assert.strictEqual(rle('KKKDDDGGKKDMDNNNTJFJFKKKK'), 'K3D3G2K2DMDN3TJFJFK4');
	});
	QUnit.test('rle правильно преобразует строку, в которой есть последовательноть одинаковых символов длины больше 9', function (assert) {
		assert.strictEqual(rle('AAAAAAAAAAAAAA'), 'A9A5');
		assert.strictEqual(rle('A1111'), 'A14');
		assert.strictEqual(rle('AAAAAAAAAAAAAADAAAAAAAAAAAAAA'), 'A9A5DA9A5');
		assert.strictEqual(rle('AAAAAAAAAAAAAAAAAA'), 'A9A9');
		assert.strictEqual(rle('BACCCCCCCCCCCCCCCCCCCCSDD'), 'BAC9C9C2SD2');
	});
	QUnit.test('rle правильно обрабатывает невалидные данные', function (assert) {
		assert.strictEqual(rle(5), null);
		assert.strictEqual(rle(true), null);
		assert.strictEqual(rle(2345678901234567890n), null);
		assert.strictEqual(rle(null), null);
		assert.strictEqual(rle(undefined), null);
		assert.strictEqual(rle(confirm), null);
	});
});
