'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('HHHHFCKKKKKKKKKVUUUUUUYDLLLDTNTNFTTTT'), 'H4FCK9VU6YDL3DTNTNFT4');
		assert.strictEqual(rle('KKKDDDGGKKDMDNNNTJFJFKKKK'), 'K3D3G2K2DMDN3TJFJFK4');
	});
});
