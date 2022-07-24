
/* Write a program that requests a number from a user and finds 
   the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.*/

let num=prompt ('Give me a number, please.');

let sum=0;
let i=0;
while (i<num) {
    i++;
    sum+=i;
} 
alert (sum);