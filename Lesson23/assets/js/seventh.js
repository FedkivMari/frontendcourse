
/*Request a number from a user and ask by how many digits to move it.
 Move the digits and display the result (if the number 123456 needs to be moved by 2 digits,
 the result will be 345612).*/

 let num = prompt(`Enter a number`);
 let numDigits = prompt (`How many digits to move it?`);
 let newNum = num.slice(numDigits) + num.slice(0,numDigits);;
 alert (newNum); 