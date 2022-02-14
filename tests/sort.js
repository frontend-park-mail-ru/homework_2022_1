QUnit.module('Тестируем функцию sort', () => {
  QUnit.test('Функция делает первую букву слова прописной', (assert) => {
    assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
    assert.strictEqual(sort('Бббббб'), 'Бббббб');
    assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
    assert.strictEqual(sort('Rrrrrrrr'), 'Rrrrrrrr');
  });

  QUnit.test('Функция делает все буквы, кроме первой, строчными', (assert) => {
    assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
    assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
  });

  QUnit.test('Функция работает с предложениями', (assert) => {
    assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
    assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
  });

  QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', (assert) => {
    assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
    assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
    assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
    assert.strictEqual(sort('вбава'), 'Аабвв');
  });

  QUnit.test('Функция сортирует слова в предложении по алфавиту', (assert) => {
    assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
    assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
    assert.strictEqual(sort('ж ё е д г в б а'), 'А Б В Г Д Е Ё Ж', 'Работает с русским алфавитом');
    assert.strictEqual(sort('в б а в а'), 'А А Б В В');
  });

  QUnit.test('Функция работает правильно', (assert) => {
    assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
    assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
    assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
    assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
  });

  QUnit.test('Функция верно обрабатывает одну букву', (assert) => {
    assert.strictEqual(sort('ё'), 'Ё', 'Работает с русским алфавитом');
    assert.strictEqual(sort('x'), 'X', 'Работает с английским алфавитом');
    assert.strictEqual(sort('Ё'), 'Ё', 'Изначально заглавная русская буква');
    assert.strictEqual(sort('X'), 'X', 'Изначально заглавная английская буква');
  });

  QUnit.test('Выбрасывает исключение при неправильном аргументе', (assert) => {
    assert.throws(() => sort(null), ARG_IS_NOT_STRING_ERROR_MSG);
    assert.throws(() => sort(), ARG_IS_NOT_STRING_ERROR_MSG);
    assert.throws(() => sort(123), ARG_IS_NOT_STRING_ERROR_MSG);
    assert.throws(() => sort(undefined), ARG_IS_NOT_STRING_ERROR_MSG);
  });
});
