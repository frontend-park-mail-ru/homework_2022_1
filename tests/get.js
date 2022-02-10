'use strict';

QUnit.module('Тестируем функцию get', function () {
    QUnit.test('get работает с объектом на разных уровнях', function (assert) {
        let obj = {
            name: 'Vasa',
            age: 47,
            mother: {
                name: 'Luda ot verbluda',
                age: 105,
            },
        }
         assert.strictEqual(get(obj, 'age'), 47, 'First level!');
         assert.strictEqual(get(obj, 'mother.name'), 'Luda ot verbluda', 'Second level!');
         assert.strictEqual(get(obj, 'name.length'), obj.name.length, 'Write len(name)');
         assert.strictEqual(get(obj, 'father.name'), undefined, 'Undefined!');
    });

    QUnit.test('передаём в функцию get плохие значения', function (assert) {
        let obj = {
            mark: 'audi',
            model: 'A3',
            year: 2001,
            price: {
                light: 1000000,
                hard: 2000000
            }
        }
        assert.strictEqual(get(null, 'mark'), undefined, 'Undefined!');
        assert.strictEqual(get(obj, 15), undefined, 'Undefined!');
    });
});