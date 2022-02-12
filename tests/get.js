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
        assert.strictEqual(get(obj, '0.1.2.3'), undefined, 'Undefined!');
    });

    QUnit.test('get работа с объектами без свойств', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.strictEqual(get(object, '.foobar'), undefined, 'Undefined!');
		assert.strictEqual(get(object, '.foo.baz'), undefined, 'Undefined!');
		assert.strictEqual(get(object, '.baz.0'), undefined, 'Undefined!');
		assert.strictEqual(get(object, '.baz.length'), undefined, 'Undefined!');
		assert.strictEqual(get(object, '.0.1.2'), undefined, 'Undefined!');
	});


    QUnit.test('get работа с массивом', function (assert) {
        let obj = {
            name: 'Alex',
            subject: 'math',
            marks: [4, 4, 5],
            school: [
                {first: 'MBOY'}
            ]
        }
        assert.strictEqual(get(obj, 'marks.1'), obj.marks[1], 'Write mark');
        assert.strictEqual(get(obj, 'marks.length'), obj.marks.length, 'Write number of marks');
        assert.strictEqual(get(obj, 'school.0.first'), obj.school[0].first , 'Write school');
    });
});
