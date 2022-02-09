'use strict';

QUnit.module('Тестируем функцию sortLetters', function () {
    QUnit.test('Функция делает первую букву слова прописной', function (assert) {
        assert.strictEqual(sortLetters('яяя'), 'Яяя', 'Работает с русским алфавитом');
        assert.strictEqual(sortLetters('Бббббб'), 'Бббббб');
        assert.strictEqual(sortLetters('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
        assert.strictEqual(sortLetters('Rrrrrrrr'), 'Rrrrrrrr');
    });

    QUnit.test('Функция делает все буквы, кроме первой, строчными', function (assert) {
        assert.strictEqual(sortLetters('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
        assert.strictEqual(sortLetters('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
    });

    QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
        assert.strictEqual(sortLetters('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
        assert.strictEqual(sortLetters('zyxwvu'), 'Uvwxyz');
        assert.strictEqual(sortLetters('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
        assert.strictEqual(sortLetters('вбава'), 'Аабвв');
    });

    QUnit.test('Функция верно обрабатывает одну букву', function (assert) {
        assert.strictEqual(sortLetters('ё'), 'Ё', 'Работает с русским алфавитом');
        assert.strictEqual(sortLetters('x'), 'X', 'Работает с английским алфавитом');
        assert.strictEqual(sortLetters('Ё'), 'Ё', 'Изначально заглавная русская буква');
        assert.strictEqual(sortLetters('X'), 'X', 'Изначально заглавная английская буква');
    });

    QUnit.test('Выбрасывает исключение при неправильном аргументе', function (assert) {
        assert.throws(() => sort(null), ARG_IS_NOT_STRING_ERROR_MSG);
        assert.throws(() => sort(), ARG_IS_NOT_STRING_ERROR_MSG);
        assert.throws(() => sort(123), ARG_IS_NOT_STRING_ERROR_MSG);
        assert.throws(() => sort(undefined), ARG_IS_NOT_STRING_ERROR_MSG);
    });

});
