let exercicio02 = require('../../capítulo03_estruturaCondicional/exercicio02');

test('1 * 2  * 3 = 6', () => {
  expect(exercicio02(1, 2, 3)).toBe(6);
})

test('1 * 1 * 0 = 0', () => {
  expect(exercicio02(1, 1, 0)).toBe(0);
})