//   1. **Print "Hello, World!"**  
//    - Write a function `helloWorld()` that prints `"Hello, World!"`.  
function helloWorld(){
    console.log("hello world");
}

// 2. **Add Two Numbers**  
//    - Write a function `add(a, b)` that returns the sum of `a` and `b`.  
function add(a,b){
    return a+b;
}
console.log(add(9+9));

// 3. **Multiply Two Numbers**  
//    - Write a function `multiply(a, b)` that returns the product of `a` and `b`.  
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4))

// 4. **Check Even or Odd**  
//    - Write a function `isEven(num)` that returns `true` if `num` is even, otherwise `false`.  
function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(5));
console.log(isEven(22));

// 5. **Find Maximum of Two Numbers**  
//    - Create a function `maxOfTwo(a, b)` that returns the larger number.  
function maxOfTwo(a,b){
    return a>b ? a:b;
}
console.log(maxOfTwo(50,70));

// 6. **Convert Celsius to Fahrenheit**  
//    - Write a function `celsiusToFahrenheit(celsius)` that converts Celsius to Fahrenheit.  
function celsiusToFahrenheit(celsius){
    return (celsius * 9/5)+32;
}
console.log(celsiusToFahrenheit(1.9));

// 7. **Find the Length of a String**  
//    - Write a function `stringLength(str)` that returns the length of `str`.  
function stringLength(str){
    return str.length;
}
console.log(stringLength("coding"));

// 8. **Check if a String Contains a Specific Word**  
//    - Create a function `containsWord(sentence, word)` that checks if `word` exists in `sentence`.  
function containsWord(sentence,word){
    return sentence.includes(word);
}
console.log(containsWord("hello world", "world"));

// 9. **Return First Character of a String**  
//    - Write a function `firstChar(str)` that returns the first character of `str`.  
function firstChar(str){
    return str.charAt(0);
}
console.log(firstChar("Maharjan"));

// 10. **Repeat a String**  
//    - Create a function `repeatString(str, times)` that returns the string repeated `times` times.  
function repeatString(str,times){
    return str.repeat(times);
}
console.log(repeatString("canon,5"));

// 11. **Calculate Factorial**  
//    - Write a function `factorial(n)` that returns the factorial of `n`.  
function factorial(n){
    if(n === 0 || n === 1) 
        return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));

// 12. **Reverse a String**  
//    - Implement `reverseString(str)` that reverses the given string.  
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

// 13. **Check if a Number is Prime**  
//    - Write a function `isPrime(n)` that returns `true` if `n` is prime, otherwise `false`.  
function isPrime(n){
    if(n<2)
        return false;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0)
            return false;
    }
    return true;
}
console.log(isPrime(7));

// 14. **Count Vowels in a String**  
//    - Write a function `countVowels(str)` that returns the number of vowels in `str`.  
function countVowels(str){
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("hello world"));


// 15. **Find the Largest Number in an Array**  
//    - Create a function `largestNumber(arr)` that returns the largest number in an array.  
function largestNumber(arr){
    return Math.max(...arr);
}
console.log(largestNumber([1, 3, 5, 7, 2]));

// 16. **Remove Duplicates from an Array**  
//    - Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// 17. **Find the Sum of All Numbers in an Array**  
//    - Implement `sumArray(arr)` that returns the sum of all elements in an array.  
function sumArray(arr){
    return arr.reduce((sum,num)=> sum +num,0);
}
console.log(sumArray([1, 2, 3, 4]));

// 18. **Check if a String is a Palindrome**  
//    - Write a function `isPalindrome(str)` that returns `true` if `str` is a palindrome.  
function isPalindrome(str){
    let reverse = str.split('').reverse().join('');
    return str === reverse;
}
console.log(isPalindrome("madam"));


// 19. **Merge Two Arrays**  
//    - Create a function `mergeArrays(arr1, arr2)` that merges two arrays into one.  
function mergeArrays(arr1, arr2){
    return [...arr1, ... arr2];
}
console.log(mergeArrays([1, 2], [3, 4]));

// 20. **Find the Second Largest Number in an Array**  
//    - Implement `secondLargest(arr)` that returns the second largest number in an array.  
function secondLargest(arr){
    let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueArr.length > 1 ? uniqueArr[1] : null;
}
console.log(secondLargest([10, 5, 30, 20, 50]));