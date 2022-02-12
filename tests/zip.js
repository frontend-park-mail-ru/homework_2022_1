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

		const obj1 = {
			age: {
				isSetted: false,
			},
		};

		const obj2 = {
			age: {
				isSetted: true,
			},
		};

		assert.deepEqual(zip(obj1, obj2), obj1);

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
		const human = {
			data: {
				age : 32, 
				height : 178, 
				weight : 77, 
				sex : "male",
			},
		};
		const allWorkInfo = {
			experience : 7,
		};
		const currJobInfo = {
			experienceOnCurrentPlace : 2,
		};
		assert.deepEqual(zip(human, allWorkInfo, currJobInfo), worker);
	});

	QUnit.test('Функция не реагирует на то, являетси ли свойство объекта объектом, происходит поверхтностное сранение свойств', function (assert) {
		const objComplex = {
			a: {
				b : 1
			}
		};
		const objComplex2 = {
			a: {
				b : 2, 
				c : 1
			}
		};
		const objResult = {
			a: {
				b : 1
			}, 
			b: 2
		};
		const objOrdinary = {
			b: 2,
		};
		assert.deepEqual(zip(objComplex, objComplex2, objOrdinary), objResult);

		const obj1 = {
			name: 'data',
			year: 2007,
		};
		const obj2 = {
			name: 'data',
			value: 2017,
			month: 6,
		};
		const obj3 = {
			a: obj1,
		};
		const obj4 = {
			a: obj2,
		}
		const obj5 = {
			b: obj2,
		}
		const obj6 = {
			a: obj1,
			b: obj2,
		}
		const obj7 = {
			a: obj2,
			b: obj2,
		}
		assert.deepEqual(zip(obj3, obj4), obj3);

		assert.deepEqual(zip(obj3, obj5), obj6);

		assert.deepEqual(zip(obj4, obj5), obj7);
	});
	QUnit.test('Непредвиденные входные данные', function (assert) {
		const samsaraObj = {
			0:"S",
			1:"a",
			2:"m",
			3:"s",
			4:"a",
			5:"r",
			6:"a",
			7:"'",
			8:"s",
			9:" ",
			10:"s",
			11:"e",
			12:"c",
			13:"r",
			14:"e",
			15:"t",
		};
		assert.deepEqual(zip("Samsara's secret"), samsaraObj, 'Результат - массив символов');

		assert.deepEqual(zip(100), {}, 'Результат - пустой объект');
		assert.deepEqual(zip(1.3), {}, 'Результат - пустой объект');

		assert.deepEqual(zip(NaN), {}, 'Результат - пустой объект');
		assert.deepEqual(zip(Infinity), {}, 'Результат - пустой объект');

		assert.deepEqual(zip(undefined), {}, 'Результат - пустой объект');
		assert.deepEqual(zip(null), {}, 'Результат - пустой объект');
	});
});
