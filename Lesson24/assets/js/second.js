// Write a function that counts the factorial of a given number. 

function calcFactorial (num){
    let result = 1;
    for (let i=1; i<=num;i++){
        result*=i;
    } 
    return result;
}

let num = prompt (`Enter number`);
let rez = calcFactorial(num);
console.log(rez);