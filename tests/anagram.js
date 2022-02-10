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

	QUnit.test('Доп тест на рускоязычные слова', function (assert) {
		const input = [
			'дорога', 'баян', 'кабан',
			'банка', 'города', 'нитка',
			'ткани', 'коробка', 'баня'
		];

		const output = [
			[ 'банка', 'кабан' ],
			[ 'баня', 'баян' ],
			[ 'города', 'дорога' ],
			[ 'нитка', 'ткани' ]
		];

		assert.deepEqual(anagram(input), output);
	});
	
	QUnit.test('Тест на тройные анаграммы', function (assert) {
		const input = [
			'парадокс', 'марочник', 'романчик',
			'распадок', 'просадка', 'курсант',
			'струнка', 'рамочник', 'баня'
		];

		const output = [
			[ 'курсант', 'струнка' ],
			[ 'марочник', 'рамочник', 'романчик' ],
			[ 'парадокс', 'просадка', 'распадок' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Тест на неверные входные данные', function (assert) {
		const input = 770;
		const output = "The input is incorrect!"

		try {
			anagram(input)
		} catch (error) {
			assert.deepEqual(error, output);
		}
	});

	QUnit.test('Функция работает правильно с англ словами', function (assert) {
		const input = [
			'listen', 'restful', 'santa', 'vile',
			'fluster', 'silent', 'evil',  'satan'
		];

		const output = [
			[ 'evil', 'vile' ],
			['fluster', 'restful'],
			['listen', 'silent'],
			[ 'santa', 'satan' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно со словосочетаниями и предложениями', function (assert) {
		const input = [
			'eleven plus two.', 'elegant man', 'over fifty',
			'a gentleman', 'twelve plus one.', 'bad credit', 
			'forty five', 'debit card', 'school master', 'the classroom'
		];

		const output = [
			[ 'a gentleman', 'elegant man' ],
			[ 'bad credit', 'debit card' ],
			[ 'eleven plus two.', 'twelve plus one.' ],
			[ 'forty five', 'over fifty' ],
			[ 'school master', 'the classroom' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно если нет анаграмм', function (assert) {
		const input = ['eleven plus two.', 'elegant man', 'over fifty'];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});
});
