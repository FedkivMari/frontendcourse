/* Write a function that accepts three separate digits and makes them a number.
 For example, 1, 4, and 9 will become 149. */

 function concatNumber(numOne, numTwo, numThree){
    let rez =numOne + numTwo + numThree;
    return rez;  
 }

 let numOne = prompt (`Enter first number`);
 let numTwo = prompt (`Enter second number`);
 let numThree = prompt (`Enter third number`);

 console.log(concatNumber(numOne, numTwo, numThree));


 //------------------------ var 2.-------------------

 function concatNum(numOne, numTwo, numThree){
    let rez = (`${numOne}${numTwo}${numThree}`);
    return parseInt(rez);  
 }

  console.log(concatNum(2, 3, 5));