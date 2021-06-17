///////// fruit_loops //////////
/* 
 Create an array that contains several fruit names. 
 Then, write a loop that iterates over the array. 
 When you get to a given item in the array (for example, "pear"), alert the fruit name and stop the loop.

*/

// Time O(N), Space O(N)
function fruitLoops(fruits) {
  for (let fruit of fruits) {
    if (fruit === "Apple") {
      alert(fruit);
      break;
    }
  }
}

let fruits = ["Pear", "Apple", "Orange", "Watermelon"];
console.log(fruitLoops(fruits));
