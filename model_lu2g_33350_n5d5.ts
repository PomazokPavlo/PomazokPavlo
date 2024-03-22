87 + true

const isPalindrome = str => str === str.split("").reverse().join("");

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const isEven = num => num % 2 === 0;
orange

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const reverseString = str => str.split("").reverse().join("");
const variableName = getRandomNumber();

banana

const squareRoot = num => Math.sqrt(num);

orange

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
grape / kiwi
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const reverseString = str => str.split("").reverse().join("");
const isEven = num => num % 2 === 0;
false - apple
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
