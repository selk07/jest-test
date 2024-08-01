const week = require('../week');

test ('значення 1 = Понеділок', () => {
  expect(week(1)).toMatch('Понеділок');
});
test ('значення 3 = Середа', () => {
   expect(week(3)).toMatch('Середа');
});
test ('значення 7 = Неділя', () => {
   expect(week(7)).toMatch('Неділя');
});
test ('значення 9 = null', () => {
    expect(week(9)).toBeNull();
});
test ('значення 1.5 = null', () => {
   expect(week(1.5)).toBeNull();
});
test (`значення '2' = null`, () => {
   expect(week('2')).toBeNull();
});