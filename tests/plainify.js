'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('Возвращает plain для non-deep объекта', function (assert) {
		const simple = {
			foo: 58,
			baz: 12
		}

		const plain = {
			'foo': 58,
			'baz': 12
		}

		assert.deepEqual(plainify(simple), plain);
	});

	QUnit.test('Возвращает plain для объекта глубины 1-го уровня', function (assert) {
		const nested1 = {
			deep: {
				foo: 'bar',
				baz: 42
			}
		};

		const plain1 = {
			'deep.foo': 'bar',
			'deep.baz': 42
		};

		assert.deepEqual(plainify(nested1), plain1);
	});

	QUnit.test('Возвращает plain для объекта глубины 2-го уровня', function (assert) {
		const nested2 = {
			deep: {
				foo: 'bar',
				baz: {
					bar: 'baz'
				}
			}
		};

		const plain2 = {
			'deep.foo': 'bar',
			'deep.baz.bar': 'baz'
		};

		assert.deepEqual(plainify(nested2), plain2);
	});

	QUnit.test('Возвращает plain для объекта глубины 3-го уровня', function (assert) {
		const nested3 = {
			deep: {
				foobar: {
					baz: 42,
					foo: {
						bar: 'foo'
					}
				},
				foo: 'bar',
				baz: {
					bar: 'baz'
				}
			}
		};

		const plain3 = {
			'deep.foobar.baz': 42,
			'deep.foobar.foo.bar': 'foo',
			'deep.foo': 'bar',
			'deep.baz.bar': 'baz'
		};

		assert.deepEqual(plainify(nested3), plain3);
	});
	
	QUnit.test('Возвращает plain для объекта глубины 4-го уровня', function (assert) {
		const nested4 = {
			deep: {
				foobar: 0,
				nested: {
					object: {
						fields: {
							foo: 42,
							bar: 42,
							baz: 42
						}
					}
				}
			}
		};

		const plain4 = {
			'deep.foobar': 0,
			'deep.nested.object.fields.foo': 42,
			'deep.nested.object.fields.bar': 42,
			'deep.nested.object.fields.baz': 42
		};

		assert.deepEqual(plainify(nested4), plain4);
	});
});
