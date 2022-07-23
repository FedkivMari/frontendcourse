let numOne = +(prompt ('Enter first number'));
let numTwo = +(prompt ('Enter second number'));
let gcd=1;

while ( numOne!=0 && numTwo!=0) {
    if (numOne>numTwo) {
        numOne=numOne%numTwo;
    }
    else if (numOne<numTwo) {
        numTwo=numTwo%numOne;
    }
} 


alert (numOne+numTwo);