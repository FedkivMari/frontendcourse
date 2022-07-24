let num = prompt('Enter a number');

let i=1;
let  k = `d=`;

for (let i=1; i<=num; i++) {
    if (num%i==0){
        k +=i+`, `;
    }
}
console.log(k);