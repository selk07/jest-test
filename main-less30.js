console.log('#11. JavaScript homework example file')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною 
 * електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const isValidEmail = emailPattern.test(email);

return (`This email "${email}": ${isValidEmail}`);
}

console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL 
 * веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

function isValidUrl(url) {
  const urlPattern = new RegExp('^(https?:\\/\\/)?' + // проверка протокола
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // проверка имени домена
  '((\\d{1,3}\\.){3}\\d{1,3}))'                     + // проверка ip адреса (версия 4, не 6)
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'                 + // проверка порта и пути
  '(\\?[;&a-z\\d%_.~+=-]*)?'                        + // проверка параметров запроса
  '(\\#[-a-z\\d_]*)?$','i');                          // проверка хэша
  const isValidUrl = urlPattern.test(url)
  return (`This URL "${url}": ${isValidUrl}`)
}

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false

// Експорт функції для використання та тестування
export { isValidEmail, isValidUrl }