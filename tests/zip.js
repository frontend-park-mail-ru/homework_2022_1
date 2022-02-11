'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});
		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test('Функция работает с объектами среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({count: 0}, {cost: '120$'}), obj);

		const obj2 = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: 5
		};
		assert.deepEqual(zip({a: 1}, {b: 2}, {c: null}, {d: 4}, {e: 5}), obj2);

		const obj3 = {
			name: 'age',
			value: 42
		};

		const obj4 = {
			prop: false,
			attr: null
		};

		const obj5 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null
		};

		assert.deepEqual(zip(obj3, obj4), obj5);
	});

	QUnit.test('Функция правильно работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj = {
			name: 'age',
			value: 42
		};
		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj);
	});

	QUnit.test('Функция не работает с пустым списком параметров', function (assert) {
		assert.throws(zip, new Error("Nothing to merge"));
	});

	QUnit.test('Функция не работает с примитивными типами', function (assert) {
        const error = new TypeError("Only pure objects can be merged");
		assert.throws(() => zip('1234', 'zzzz5'), error, 'Функция не работает со строками');
		assert.throws(() => zip(1), error, 'Функция не работает с целыми числами');
		assert.throws(() => zip(1.1), error, 'Функция не работает с вещественными числами');
		assert.throws(() => zip(NaN), error, 'Функция не работает с NaN');
		assert.throws(() => zip(Infinity), error, 'Функция не работает с Infinity');
		assert.throws(() => zip(undefined), error, 'Функция не работает с undefined');
	});

	QUnit.test('Функция не работает с null', function (assert) {
        const error = new TypeError("Only pure objects can be merged");
		assert.throws(() => zip(null), error, 'Функция не работает с null, несмотря на то, что typeof null === \'object\'');
	});

	QUnit.test('Функция не работает с экземплярами классов', function (assert) {
        const error = new TypeError("Only pure objects can be merged");
		assert.throws(() => zip([1, 2, 3, 4], ['z', 'z', 'z', 'z', 5]), error, 'Функция не работает с массивами');
	});
});
