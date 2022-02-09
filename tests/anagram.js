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

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно с англ словами и предложениями', function (assert) {
		const input = [
			'аз есмь строка живу я мерой остр.', 'ракета',
			'listen', 'за семь морей ростка я вижу рост.',
			'silent', 'карета'
		];

		const output = [
			[ 'listen', 'silent' ],
			[ 'аз есмь строка живу я мерой остр.', 'за семь морей ростка я вижу рост.' ],
			[ 'карета', 'ракета' ]
		];

		assert.deepEqual(anagram(input), output);
	});
});
