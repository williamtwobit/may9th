// noprotect
// ^^ `noprotect` is here to prevent a bug with jsbin and for loops.

function average(numbers) {
  var sum = 0;
  for (var i=0; i <= numbers.length-1; i++){
    sum = sum + numbers[i];
  }
  var result = sum / numbers.length;
  return result;
}




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(