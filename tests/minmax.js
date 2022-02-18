'use strict';

QUnit.module('Тестируем функцию minmax', function () {
    QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
        assert.deepEqual(minmax(''), [undefined, undefined], 'Особый случай, когда в строке нет чисел');
        assert.deepEqual(minmax('мама мыла раму'), [undefined, undefined]);
    });

    QUnit.test('minmax правильно парсит отдельные числа', function (assert) {
        assert.deepEqual(minmax('0'), [0, 0]);
        assert.deepEqual(minmax('1'), [1, 1]);
        assert.deepEqual(minmax('Infinity'), [Infinity, Infinity]);
        assert.deepEqual(minmax('-Infinity'), [-Infinity, -Infinity]);
        assert.deepEqual(minmax('42'), [42, 42]);
        assert.deepEqual(minmax('.0'), [.0, .0]);
        assert.deepEqual(minmax('1.1'), [1.1, 1.1]);
        assert.deepEqual(minmax('.01'), [.01, .01]);
        assert.deepEqual(minmax('1.01'), [1.01, 1.01]);
        assert.deepEqual(minmax('1e5'), [1e5, 1e5]);
        assert.deepEqual(minmax('-1e-5'), [-1e-5, -1e-5]);
        assert.deepEqual(minmax('-.1e-5'), [-.1e-5, -.1e-5]);
    });

    QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
        assert.deepEqual(minmax('0 0 0 0'), [0, 0]);
        assert.deepEqual(minmax('1 1 1 1'), [1, 1]);
        assert.deepEqual(minmax('1 2 3 4'), [1, 4]);
        assert.deepEqual(minmax('-Infinity -1 0 1 Infinity'), [-Infinity, Infinity]);
        assert.deepEqual(minmax('-.01 0 .01'), [-.01, .01]);
    });

    QUnit.test('minmax игнорирует обычный текст', function (assert) {
        assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [-5.8, 73]);
    });

    QUnit.test('minmax игнорирует цифры включенные в слово', function (assert) {
        assert.deepEqual(minmax('см1 2 4'), [2, 4]);
    });

    QUnit.test('minmax без чисел', function (assert) {
        assert.deepEqual(minmax('\s'), [undefined, undefined]);
        assert.deepEqual(minmax('йцукенгшщшгнекуцй'), [undefined, undefined]);
    });
    QUnit.test('minmax не работает с объектами, через new', function (assert) {
        assert.deepEqual(minmax(new String('йцукпий11')), [undefined, undefined]);
    });

    QUnit.test('minmax игнорирует специальные символы', function (assert) {
        assert.deepEqual(minmax(';$  /  ### 0 2#%'), [0, 2]);
    });

    QUnit.test('minmax выводит 2 раза одно число, если было преедано только одно число', function (assert) {
        assert.deepEqual(minmax('йццц 0 арру'), [0, 0]);
    });

    QUnit.test('minmax игнорирует другие объекты', function (assert) {
        assert.deepEqual(minmax(1222, 345), [undefined, undefined]);
        assert.deepEqual(minmax({name: "json"}), [undefined, undefined]);
        assert.deepEqual(minmax(true), [undefined, undefined]);
        assert.deepEqual(minmax(null), [undefined, undefined]);
        assert.deepEqual(minmax(Symbol("id")), [undefined, undefined]);
        assert.deepEqual(minmax(Math), [undefined, undefined]);
        assert.deepEqual(minmax(undefined), [undefined, undefined]);
    });
});
