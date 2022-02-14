QUnit.module('Тестируем функцию max', () => {
  QUnit.test('Возвращает максимальное из трёх положительных чисел', (assert) => {
    assert.strictEqual(max([1, 2, 3]), 3, 'max([1, 2, 3]) === 3');
    assert.strictEqual(max([3, 2, 1]), 3, 'max([3, 2, 1]) === 3');
  });

  QUnit.test('Возвращает максимальное из трёх отрицательных чисел', (assert) => {
    assert.strictEqual(max([-1, -2, -3]), -1, 'max([-1, -2, -3]) === -1');
    assert.strictEqual(max([-3, -2, -1]), -1, 'max([-3, -2, -1]) === -1');
  });

  QUnit.test('Возвращает максимальное из трёх чисел разных знаков', (assert) => {
    assert.strictEqual(max([-1, 0, 1]), 1, 'max([-1, 0, 1]) === 1');
    assert.strictEqual(max([1, 0, -1]), 1, 'max([1, 0, -1]) === 1');
  });

  QUnit.test('Работает правильно с одинаковыми числами', (assert) => {
    assert.strictEqual(max([0, 0, 0]), 0, 'max([0, 0, 0]) === 0');
    assert.strictEqual(max([42, 42, 42]), 42, 'max([42, 42, 42]) === 42');
  });

  QUnit.test('Работает правильно со специальными константами', (assert) => {
    assert.strictEqual(max([Infinity, 100000, 0]), Infinity);
    assert.strictEqual(max([0, -1000, -Infinity]), 0);
  });
});
