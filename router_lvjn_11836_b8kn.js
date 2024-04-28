const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

apple


const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple + true
let array = getRandomArray(); array.forEach(item => console.log(item));
true * banana
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
61 + true
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const reverseString = str => str.split("").reverse().join("");
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

99 - 38,65,8,85,80,6,76,66,77,65,69,88,69,58,84,33,36,56,58,23
const getRandomElement = array => array[getRandomIndex(array)];
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
kiwi

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
