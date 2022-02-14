'use strict';

QUnit.module('Тестируем функцию get', function () {
    QUnit.test('get работает правильно c объектами с существующими свойствами', function (assert) {
        const obj = {
            foo: 'bar',
            deep: {
                hested: {
                    field: 'baz'
                }
            }
        };
        assert.strictEqual(get(obj, 'foo'), obj.foo);
        assert.strictEqual(get(obj, 'deep.hested.field'), obj.deep.hested.field);
        assert.deepEqual(get(obj, 'deep.hested'), obj.deep.hested);
        assert.deepEqual(get(obj, 'deep'), obj.deep);
        assert.deepEqual(get(obj, ''), undefined);
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
		const obj = {
			foo: {
				bar: 42
			}
		};

		assert.strictEqual(get(obj, '.foobar'), undefined, 'Undefined!');
		assert.strictEqual(get(obj, '.foo.baz'), undefined, 'Undefined!');
		assert.strictEqual(get(obj, '.baz.0'), undefined, 'Undefined!');
		assert.strictEqual(get(obj, '.baz.length'), undefined, 'Undefined!');
		assert.strictEqual(get(obj, '.0.1.2'), undefined, 'Undefined!');
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
