///////// is_palindrome //////////
/* 
Write a JS function that will test if a string is a palindrome. A palindrome is a word that is the same forwards and backwards:

Consider the following use cases: 

console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("dog"))     // false
*/

// Get rid of spaces = use cont regex = /\W/gm => s.replace(regex,"")

// Two-Pointer Method
// Time O(N), Space: O(1)
function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }

  if (!str) {
    return false;
  }

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// Array Reverse Method
// Time O(N), Space: O(N)
function isPalindrome2(str) {
  if (str.length === 0) {
    return true;
  }

  if (!str) {
    return false;
  }
  let reverse = str.split("").reverse().join("");
  return reverse === str;
}

console.log(isPalindrome("racecar")); // true
