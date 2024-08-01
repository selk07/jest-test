const ageClassification = require('../ageClassification');

test ('значення -1 = null', () => {
  expect(ageClassification(-1)).toBeNull();
});
test ('значення 0 = Дитинство', () => {
   expect(ageClassification(0)).toMatch('Дитинство');
 });

test ('значення 1 = Дитинство', () => {
   expect(ageClassification(1)).toMatch('Дитинство');
 });
test ('значення 24 = Дитинство', () => {
   expect(ageClassification(24)).toMatch('Дитинство');
 });
test ('значення 24.01 = Молодість', () => {
   expect(ageClassification(24.01)).toMatch('Молодість');
 });
test ('значення 44 = Молодість', () => {
   expect(ageClassification(44)).toMatch('Молодість');
 });
test ('значення 44.01 = Зрілість', () => {
   expect(ageClassification(44.01)).toMatch('Зрілість');
 });
test ('значення 65 = Зрілість', () => {
   expect(ageClassification(65)).toMatch('Зрілість');
 });
test ('значення 65.1 = Старість', () => {
   expect(ageClassification(65.1)).toMatch('Старість');
 });
test ('значення 75 = Старість', () => {
   expect(ageClassification(75)).toMatch('Старість');
 });
test ('значення 75 = Довголіття', () => {
   expect(ageClassification(75.01)).toMatch('Довголіття');
 });
test ('значення 90 = Довголіття', () => {
   expect(ageClassification(90)).toMatch('Довголіття');
 });
test ('значення 90.01 = Рекорд', () => {
   expect(ageClassification(90.01)).toMatch('Рекорд');
 });
test ('значення 122 = Рекорд', () => {
   expect(ageClassification(122)).toMatch('Рекорд');
 });
test ('значення 122.01 = null', () => {
   expect(ageClassification(122.01)).toBeNull();
 });
test ('значення 150 = null', () => {
   expect(ageClassification(150)).toBeNull();
 });