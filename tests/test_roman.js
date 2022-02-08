'use strict';

QUnit.module('Тестируем функцию roman', function () {
    QUnit.test('даги в москве', function (assert) {
        assert.strictEqual(roman('II'), 2, 'nice');
        assert.strictEqual(roman('I'), 1, 'nice');
        assert.strictEqual(roman('IV'), 4, 'nice');
        assert.strictEqual(roman('V'), 5, 'nice');
        assert.strictEqual(roman('VI'), 6, 'nice');
        assert.strictEqual(roman('MMIX'), 2009, 'nice');
    });

    QUnit.test('даги не в москве', function (assert) {
        assert.strictEqual(roman(2), 'II', 'nice');
        assert.strictEqual(roman(1), 'I', 'nice');
        assert.strictEqual(roman(4), 'IV', 'nice');
        assert.strictEqual(roman(5), 'V', 'nice');
        assert.strictEqual(roman(6), 'VI', 'nice');
        assert.strictEqual(roman(2009), 'MMIX', 'nice');
    });
});