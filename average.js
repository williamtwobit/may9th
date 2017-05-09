// noprotect
// ^^ `noprotect` is here to prevent a bug with jsbin and for loops.

// function average(numbers) {
//   var sum = 0;
//   for (var i=0; i <= numbers.length-1; i++){
//     sum = sum + numbers[i];
//   }
//   var result = sum / numbers.length;
//   return result;
// }

// function average(numbers){
//   let sum = 0;
//   let i = 0;
//   while (i < numbers.length){
//     sum += numbers[i];
//     i++;
//   }
//   return sum/numbers.length;
// }

function average(numbers){
  let sum = 0;
  numbers.forEach(n => sum += n);
  return sum / numbers.length;
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
       'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

(function runTests() {
  var numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var correctAns1 = 5.5;
  var numList2 = [0, -1, 1];
  var correctAns2 = 0;
  
  var testResults = [
    testFunctionWorks(average, numList1, correctAns1),
    testFunctionWorks(average, numList2, correctAns2)
  ];
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.')
})();