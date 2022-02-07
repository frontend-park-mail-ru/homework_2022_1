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

	QUnit.test('Функция работает с пустым списком параметров', function (assert) {
		assert.deepEqual(zip(), {});
	});

	QUnit.test('Функция копирует временную объектную обёртку примитивных типов', function (assert) {
		assert.deepEqual(zip('1234', 'zzzz5'), {0: '1', 1: '2', 2: '3', 3: '4', 4: '5'}, 'Результат слияния строк - array-like объект символов');
		assert.deepEqual(zip(1), {}, 'Результат копирования целого числа - пустой объект');
		assert.deepEqual(zip(1.1), {}, 'Результат копирования вещественного числа - пустой объект');
		assert.deepEqual(zip(NaN), {}, 'Результат копирования NaN - пустой объект');
		assert.deepEqual(zip(Infinity), {}, 'Результат копирования Infinity - пустой объект');
	});

	QUnit.test('Функция интерпретирует null или undefined как пустые объекты', function (assert) {
		assert.deepEqual(zip(null), {}, 'Результат копирования null - пустой объект');
		assert.deepEqual(zip(undefined), {}, 'Результат копирования undefined - пустой объект');
	});

	QUnit.test('Функция копирует объектное представление массива', function (assert) {
		assert.deepEqual(zip([1, 2, 3, 4], ['z', 'z', 'z', 'z', 5]), {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}, 'Результат слияния массивов - array-like объект');
	});
});
