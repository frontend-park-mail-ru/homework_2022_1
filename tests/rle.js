'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('HHHHFCKKKKKKKKKVUUUUUUYDLLLDTNTNFTTTT'), 'H4FCK9VU6YDL3DTNTNFT4');
		assert.strictEqual(rle('KKKDDDGGKKDMDNNNTJFJFKKKK'), 'K3D3G2K2DMDN3TJFJFK4');
		assert.strictEqual(rle('AAAAAAAAAAAAAA'), 'A9A5');
		assert.strictEqual(rle('A1111'), 'A14');
		assert.strictEqual(rle('BACCCCCCCCCCCCCCCCCCCCSDD'), 'BAC9C9C2SD2');
		assert.strictEqual(rle(5), validationError);
		assert.strictEqual(rle(true), validationError);
	});
});
