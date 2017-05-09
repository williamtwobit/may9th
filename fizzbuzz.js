// noprotect
// ^^ `noprotect` is here to prevent a bug with jsbin and for loops.


function fizzBuzz(countTo) 
{
  var array = [];
  var i = 1;
  while (i <= countTo)
  {
    //console.log(array);
    if (i % 15 === 0)
    {
      array.push("fizzbuzz");
    }
    else if (i % 3 === 0)
    {
      array.push("fizz");
    }
    else if(i % 5 === 0)
    {
      array.push("buzz");
    }
    else
    {
      array.push(i);
    }
    i++;
  }
  return array;
}





/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  var countTo = 16;
  var expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];

  var actual = fizzBuzz(countTo) || [];
  
  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;}) ) {
    
      console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }  
})();