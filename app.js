// Task 1: Reverse a String
const reverseButton = document.getElementById('reverseButton');
const stringInput = document.getElementById('stringInput');
const reversedString = document.getElementById('reversedString');

reverseButton.addEventListener('click', () => {
  const input = stringInput.value;
  const reversed = input.split('').reverse().join('');
  reversedString.textContent = `Reversed: ${reversed}`;
});

// Task 2: == vs === Examples
console.log('// Example 1: Number and String Comparison');
console.log(5 == '5');  // true (string '5' is converted to number 5)
console.log(5 === '5'); // false (different types: number vs string)

console.log('// Example 2: Boolean and Number Comparison');
console.log(false == 0);  // true (false is converted to number 0)
console.log(false === 0); // false (different types: boolean vs number)

console.log('// Example 3: Special Cases with null and undefined');
console.log(null == undefined);  // true (both are considered "empty" values)
console.log(null === undefined); // false (different types)

console.log('// Example 4: Object References');
const obj1 = {};
const obj2 = {};
console.log(obj1 == obj2);   // false (different objects in memory)
console.log(obj1 === obj2);  // false (same reason)
const obj3 = obj1;
console.log(obj1 === obj3);  // true (same object reference)

console.log('// Example 5: Weird Type Conversion');
console.log('' == 0);       // true (empty string converted to 0)
console.log('' === 0);      // false (different types)
console.log(' \t\n' == 0);  // true (whitespace-only string converted to 0)

// Task 3: Toggle Visibility
const toggleButton = document.getElementById('toggleButton');
const myDiv = document.getElementById('myDiv');

toggleButton.addEventListener('click', () => {
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = 'none';
  }
});

