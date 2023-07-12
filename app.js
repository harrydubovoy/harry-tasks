/*
 *
 * https://www.codewars.com/kata/59c633e7dcc4053512000073/javascript
 *
*/

const alphabetList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const alphabetMap = alphabetList.reduce((acc, letter, index) => {
  acc[letter] = index + 1;
  return acc;
}, {})

const compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);
const muteVolwesBySymbol = (symbol) => (string) => string.replace(/[aeiouy]/g, symbol);
const splitStringToArrayBySymbol = (symbol) => (string) => string.split(symbol);
const filter = (cb) => (array) => array.filter(cb);
const filterByExistedElement = (el) => Boolean(el);
const map = (cb) => (array) => array.map(cb);
const reduce = (cb, startValue) => (array) => array.reduce(cb, startValue);
const mapLetterToNumber = (alphabetMap) => (letter) => alphabetMap[letter];
const calculateSum = (letterAsNumber) => (acc, letter) => acc + letterAsNumber(letter);

const getMaxValueFremArray = (array) => Math.max(...array);

const MUTE_SYMBOL = '*';

const solve = compose(
  getMaxValueFremArray,
  map((strArray) => reduce(calculateSum(mapLetterToNumber(alphabetMap)), 0)(strArray)),
  map(splitStringToArrayBySymbol('')),
  filter(filterByExistedElement),
  splitStringToArrayBySymbol(MUTE_SYMBOL),
  muteVolwesBySymbol(MUTE_SYMBOL),
);

console.log('result', solve('zodiacs'));



/*
 *
 * https://www.codewars.com/kata/514b92a657cdc65150000006/javascript
 *
*/

const generateNumbersList = (length) => [...Array(length + 1).keys()]
const sumNumbers = (array) => array.reduce((acc, number) => acc + number, 0)
const multipleBy = (byNumber) => (number) => number%byNumber === 0;
const multipleBy3 = multipleBy(3);
const multipleBy5 = multipleBy(5);
const filterByMultipleNumbers = (number) => multipleBy3(number) || multipleBy5(number);
const positiveGuard = (number) => number > 0 ? number : [0]

const sum = compose(
  sumNumbers,
  filter(filterByMultipleNumbers),
  generateNumbersList,
  positiveGuard,
)

console.log(sum(15));