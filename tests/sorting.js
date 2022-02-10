'use strict';

QUnit.module('Тестируем функцию sorting', function () {
    QUnit.test('sorting не меняет пустой массив', function (assert) {
        const initial = [];
        const actual = sorting(initial, []);

        const expected = [];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
        const initial = [
            { prop1: 1 },
            { prop1: 2 },
            { prop1: 3 },
            { prop1: 4 }
        ];
        const actual = sorting(initial, []);

        const expected = [
            { prop1: 1 },
            { prop1: 2 },
            { prop1: 3 },
            { prop1: 4 }
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
        const initial = [
            { prop1: 30 },
            { prop1: 1000 },
            { prop1: 4 },
            { prop1: 200 }
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            { prop1: 4 },
            { prop1: 30 },
            { prop1: 200 },
            { prop1: 1000 }
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует массив по строковому свойству', function (assert) {
        const initial = [
            { prop1: '30' },
            { prop1: '1000' },
            { prop1: '4' },
            { prop1: '200' }
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            { prop1: '1000' },
            { prop1: '200' },
            { prop1: '30' },
            { prop1: '4' }
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting реализует устойчивую сортировку', function (assert) {
        const initial = [
            { prop1: 3, id: 1 },
            { prop1: 3, id: 2 },
            { prop1: 1, id: 1 },
            { prop1: 1, id: 2 },
            { prop1: 4, id: 1 },
            { prop1: 4, id: 2 },
            { prop1: 2, id: 1 },
            { prop1: 2, id: 2 }
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            { prop1: 1, id: 1 },
            { prop1: 1, id: 2 },
            { prop1: 2, id: 1 },
            { prop1: 2, id: 2 },
            { prop1: 3, id: 1 },
            { prop1: 3, id: 2 },
            { prop1: 4, id: 1 },
            { prop1: 4, id: 2 }
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует по нескольким полям', function (assert) {
        const initial = [
            { prop1: 3, id: '1' },
            { prop1: 3, id: '2' },
            { prop1: 1, id: '1' },
            { prop1: 1, id: '2' },
            { prop1: 4, id: '1' },
            { prop1: 4, id: '2' },
            { prop1: 2, id: '1' },
            { prop1: 2, id: '2' }
        ];
        const actual = sorting(initial, ['id', 'prop1']);

        const expected = [
            { prop1: 1, id: '1' },
            { prop1: 2, id: '1' },
            { prop1: 3, id: '1' },
            { prop1: 4, id: '1' },
            { prop1: 1, id: '2' },
            { prop1: 2, id: '2' },
            { prop1: 3, id: '2' },
            { prop1: 4, id: '2' }
        ];

        assert.deepEqual(actual, expected);
    });
});

QUnit.module('Дополнительно тестируем функцию sorting', function () {
    QUnit.test('sorting не испугается и строк и чиселок вперемешку', function (assert) {
        const initial = [
            { prop1: 30 },
            { prop1: '1000' },
            { prop1: 4 },
            { prop1: '200' }
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            { prop1: 4 },
            { prop1: 30 },
            { prop1: '1000' },
            { prop1: '200' }
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting не испугается и строк и чиселок вперемешку с двумя фильтрами', function (assert) {
        const initial = [
            { prop1: 4, id: 0 },
            { prop1: '1000', id: 1 },
            { prop1: 4, id: 2 },
            { prop1: '200', id: 3 }
        ];
        const actual = sorting(initial, ['prop1', 'id']);

        const expected = [
            { prop1: 4, id: 0 },
            { prop1: 4, id: 2 },
            { prop1: '1000', id: 1 },
            { prop1: '200', id: 3 }
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting не испугается кириллицы в строках', function (assert) {
        const initial = [
            { prop1: 'зачтите' },
            { prop1: 'позязя' },
            { prop1: 'мое' },
            { prop1: 'дэзэ' }
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            { prop1: 'дэзэ' },
            { prop1: 'зачтите' },
            { prop1: 'мое' },
            { prop1: 'позязя' }
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting работает с uppercase/lowercase в строках', function (assert) {
        const initial = [
            { prop1: 'a' },
            { prop1: 'A' },
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            { prop1: 'A' },
            { prop1: 'a' },
        ];

        assert.deepEqual(actual, expected);
    });
});
