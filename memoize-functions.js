///////// Implement the function `memoize` that memoizes a function in JS //////////
/* 
Implement the function memoize that takes another function(of one parameter) as 
it's argument and returns a memoized version of the function passed in. 
Useful for caching, avoiding duplicate computation, etc.

let memoizedFib = memoize(fib)
memoizedFib(1000) ==> result is computed
memoizedFib(1000) ==> no re-computation, the previous result has been cached and this call simply returns the value.
*/

function memoize(fn) {
  let map = {};
  return function (a) {
    if (map[a] !== undefined) {
      return map[a];
    } else {
      let result = fn.apply(this, arguments);
      map[a] = result;
      return result;
    }
  };
}
