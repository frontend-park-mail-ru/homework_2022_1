'use strict';

QUnit.module('Тестируем функцию set', function () {
	QUnit.test('set работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		const object2 = {
			deep: {
				hested: {
					field: 42
				}
			}
		};

		const object3 = {
			deep: {
				hested: {
					foo: 'bar'
				}
			}
		};

		const object4 = {
			deep: null
		};

		assert.deepEqual(set({foo: 'bar'}, '.foo', 'baz'), {foo: 'baz'});
		assert.deepEqual(set(object, '.deep.hested.field', 42), object2);

		assert.deepEqual(set(object, '.deep.hested', {foo: 'bar'}), object3);
		assert.deepEqual(set(object, '.deep', null), object4);
	});

	QUnit.test('set изменяет переданный объект', function (assert) {
		const object = {
			foo: 'bar'
		};

		const object1 = {
			foo: 'baz'
		};

		const object2 = set(object, '.foo', 'baz');
		assert.deepEqual(object, object1);
		assert.deepEqual(object2, object1);
	});

	QUnit.test('set работает правильно c массивами', function (assert) {
		const object1 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const object2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new1 = {
			foo: [ 42, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: 'baz'}
			]
		};

		assert.deepEqual(set(object1, '.foo.0', 42), new1);
		assert.deepEqual(set(object2, '.bar.0.foobar', 'baz'), new2);
	});

	QUnit.test('set работает правильно c объектами без свойств', function (assert) {
		const object = {
			deep: {
				nested: {
					field: null
				}
			}
		};

		assert.deepEqual(set({}, '.deep.nested.field', null), object);
	});

	QUnit.test('set работает правильно c неправильными путями', function (assert) {
		const object = {
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		const object2 = {
			deep: {
				hested: {
					field: 42
				}
			}
		};

		const object3 = {
			deep: {
				hested: {
					foo: 'bar'
				}
			}
		};

		const object4 = {
			deep: null
		};

		const object5 = {
			deep: {
				hested: {
					foo: 'bar'
				}
			}
		};

		assert.throws(function () {
				set(object, 1, 1)
			}, 'The second argument is not a string');

		assert.throws(function () {
				set(object2, 1, 1)
			}, 'The second argument is not a string');

		assert.throws(function () {
				set(object3, 1, 1)
			}, 'The second argument is not a string');

		assert.throws(function () {
				set(object4, 1, 1)
			}, 'The second argument is not a string');

		assert.throws(function () {
			set(object5, null, 1)
		}, 'The second argument is not a string');

		assert.throws(function () {
			set(object5, 'depfanfa', 1)
		}, 'The path is wrong');

		assert.throws(function () {
			set(object5, '', 1)
		}, 'The path is wrong');
	});

	QUnit.test('set работает правильно c плохими объектами', function (assert) {
		const obj1 = 2;

		const obj2 = 'string';

		const obj3 = null;

		assert.throws(function () {
			set(obj1, 1, 1)
		}, 'The first argument is not an object');

		assert.throws(function () {
			set(obj2, 1, 1)
		}, 'The first argument is not an object');

		assert.throws(function () {
			set(obj3, 1, 1)
		}, 'The first argument is not an object');
	});

	QUnit.test('set правильно создаёт свойства у объектов', function (assert) {
		const object = {
			deep: {
				hested: {
						field: 'baz'
				}
			}
		};

		const newObject = {
			deep: {
				hested: {
					field: 'baz'
				}
			},
			band: 1
		};

		const object2 = {
			deep: 1,
		};

		const newObject2 = {
			deep: 1,
			band: 'good'
		}

		const object3 = {
			deep: null,
		};

		const newObject3 = {
			deep: null,
			band: null
		}

		assert.deepEqual(set(object, '.band', 1), newObject);
		assert.deepEqual(set(object2, '.band', 'good'), newObject2);
		assert.deepEqual(set(object3, '.band', null), newObject3);
	});
});
