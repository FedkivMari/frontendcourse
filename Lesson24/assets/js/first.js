/*Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second,
 1 if it is vice versa, and 0 if they are equal. */


 function checkNum(numOne, numTwo){
       if (numOne < numTwo)
       {
          console.log("-1");
       } else if (numOne>numTwo)
       {
          console.log ("1");
       } else if (numOne===numTwo)
       {
          console.log ("0");
       }
 }

 let numOne = prompt (`Enter first number`);
 let numTwo = prompt (`Enter second number`);

 checkNum(numOne, numTwo);