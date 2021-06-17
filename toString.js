///////// toString //////////
/* 
Usually the output of 1 + function x() {alert(1);} is "1function x(){alert(1);}". 
Can you write a code such that the output should be "1start:function x() {alert(1);}:end".
For that matter, it should work for any function by prepending 
'start:' at the beginning of function and appending ':end' at the end of the function.

*/
Function.prototype.toString = (function () {
  var origToString = Function.prototype.toString;

  return function () {
    return "start:" + origToString.apply(this, arguments) + ":end";
  };
})();
