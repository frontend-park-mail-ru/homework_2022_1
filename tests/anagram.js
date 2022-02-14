'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const positiveFirstInput = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const positiveFirstOutput = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		const positiveSecondInput = [ 
			'abc', 'bca', 'cab', 
			'def', 'dab'
		];

		const positiveSecondOutput = [
			[ 'abc', 'bca', 'cab' ]
		];

		const positiveThirdInput = [
		];

		const positiveThirdOutput = null;

		const positiveForthInput = [
			'abc', 'abc', 'abc'
		];

		const positiveForthOutput = [
			[ 'abc', 'abc', 'abc']
		];

		const negativeFirstInput = [ 1, 2, 3]
		
		const negativeSecondInput = [ [ 'a', 'b'], ['c']]

		const negativeThirdInput = true

		const negativeFourthInput = undefined

		const negativeFifthInput = null

		const negativeOutput = null



		assert.deepEqual(anagram(positiveFirstInput), positiveFirstOutput);
		assert.deepEqual(anagram(positiveSecondInput), positiveSecondOutput);
		assert.deepEqual(anagram(positiveThirdInput), positiveThirdOutput);
		assert.deepEqual(anagram(positiveForthInput), positiveForthOutput);
		assert.deepEqual(anagram(negativeFirstInput), negativeOutput);
		assert.deepEqual(anagram(negativeSecondInput), negativeOutput);
		assert.deepEqual(anagram(negativeThirdInput), negativeOutput);
		assert.deepEqual(anagram(negativeFourthInput), negativeOutput);
		assert.deepEqual(anagram(negativeFifthInput), negativeOutput);
	});
});
