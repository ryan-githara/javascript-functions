// JS
function reverseString(str) {
  // split into array -> reverse array -> join back
  return str.split('').reverse().join('');
}

// count characters

function countCharacters(str) {
  // Don't use.length directly if teacher wants loop
  let count = 0;
  for (let char of str) {
    count++; // count each character
  }
  return count;
}

//capitalize

function capitalizeWords(sentence) {
  // "hello world" -> "Hello World"
  return sentence.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

//ARRAY FUNCTIONS
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

// minimumvalue in array
function findMin(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}

//SUMM OF ARRAY
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

//MATHEMATCAL FUNCTONS
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// factorial(5) = 120

//prime number check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // divisible = not prime
  }
  return true;
}