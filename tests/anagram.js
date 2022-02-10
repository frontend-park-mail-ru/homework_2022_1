'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		const secondInput = [ 
			'abc', 'bca', 'cab', 
			'def', 'dab'
		];

		const secondOutput = [
			[ 'abc', 'bca', 'cab' ]
		]

		const thirdInput = [
		]

		const thirdOutput = null;

		const forthInput = [
			'abc', 'abc', 'abc'
		];

		const forthOutput = [
			[ 'abc', 'abc', 'abc']
		];

		assert.deepEqual(anagram(input), output);
		assert.deepEqual(anagram(secondInput), secondOutput);
		assert.deepEqual(anagram(thirdInput), thirdOutput);
		assert.deepEqual(anagram(forthInput), forthOutput);
	});
});
