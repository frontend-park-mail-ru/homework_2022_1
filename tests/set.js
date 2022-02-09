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

	QUnit.test('set работает правильно c объектами одинаковых свойств разной вложенности', function (assert) {
		const object = {
			deep: {
				nested: {
					field: null
				},
				field : true
			}
		};

		const object1 = {
			deep: {
				nested: {
					field: false
				},
				field : true
			}
		};

		const object2 = {
			deep: {
				nested: {
					field: false
				},
				field : null
			}
		};

		assert.deepEqual(set(object, '.deep.nested.field', false), object1);
		assert.deepEqual(set(object, '.deep.field', null), object2);
	});

    QUnit.test('set работает правильно c невалидными данными', function (assert) {

		const class1 = new class{};
		const func1 = () => {return true};
		const func2 = function () {};
		const error1 = Error("it is not an object!");
		const error2 = Error("wrong path type!");
		const error3 = Error("invalid path!");

		assert.throws(
			function () {
				set(class1, '.foo12', 1)
			}, error1);

		assert.throws(
			function () {
				set(func1, '.foo', 1)
			}, error1);

		assert.throws(
			function () {
				set(func2, '.foo', 1)
			}, error1);

		assert.throws(
			function () {
				set(4, '.foo', 1)
			}, error1);

		assert.throws(
			function () {
				set(undefined, 'foo.', 1)
			}, error1);

		assert.throws(
			function () {
				set({}, 4, 1);
			}, error2);

		assert.throws(
			function () {
				set({}, 'foo', 1)
			}, error3);
	});
});
