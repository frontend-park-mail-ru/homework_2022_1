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

	QUnit.test('Функция правильно работает со свойствами, которые являются объектами', function (assert) {
		assert.deepEqual(zip({age: {isSetted: false}}, {age: {isSetted: true}}), {age: {isSetted: false}});

		const worker = {
			data : {
				age : 32,
				height : 178,
				weight : 77,
				sex : "male",
			},
			experience : 7,
			experienceOnCurrentPlace : 2,
		};

		assert.deepEqual(zip(
			{data: {
				age : 32, 
				height : 178, 
				weight : 77, 
				sex : "male"}}, 			
			{experience : 7},
			{experienceOnCurrentPlace : 2}), worker);
	});

	QUnit.test('Функция не реагирует на то, являетси ли свойство объекта объектом, происходит поверхтностное сранение свойств', function (assert) {
		assert.deepEqual(zip({a: {b : 1}}, {a: {b : 2, c : 1}}, {b: 2}), {a: {b : 1}, b: 2});

		const obj1 = {
			name: 'data',
			year: 2007,
		};
		const obj2 = {
			name: 'data',
			value: 2017,
			month: 6,
		};
		assert.deepEqual(zip({a: obj1}, {a: obj2}), {a: obj1});
		assert.deepEqual(zip({a: obj1}, {b: obj2}), {a: obj1, b: obj2});
		assert.deepEqual(zip({a: obj2}, {b: obj2}), {a: obj2, b: obj2});
	});
});
