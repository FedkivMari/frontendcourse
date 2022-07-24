
// Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

let num = prompt('Enter a number');

let i=1;
let  k = `d=`;

for (let i=1; i<=num; i++) {
    if (num%i==0){
        k +=i+`, `;
    }
}
console.log(k);