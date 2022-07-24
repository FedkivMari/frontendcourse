
// Request two numbers and find only their largest common divisor.

let numOne = +(prompt ('Enter first number'));
let numTwo = +(prompt ('Enter second number'));

while ( numOne!=0 && numTwo!=0) {
    if (numOne>numTwo) {
        numOne=numOne%numTwo;
    }
    else if (numOne<numTwo) {
        numTwo=numTwo%numOne;
    }
} 


alert (`largest common divisor is` + (numOne+numTwo));