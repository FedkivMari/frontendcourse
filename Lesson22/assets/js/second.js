
// Request a five-unit number from a user and check whether it is a palindrome.

let num = (prompt ('Enter a five-unit number'));
let length =num.length;
let i=0;
let j=(length-1);
if (length%2!=0){
    while (i!=j) {
        if (num[i]!=num[j]) break;
        i++;
        j--;
    }
    var message=(i==j)?`Number is a palindrom`:`Number is not a palindrom`;
}
else {
    while (i!=j+1) {
        if (num[i]!=num[j]) break;
        i++;
        j--;
    }
    var message=(i==(j+1))?`Number is a palindrom`:`Number is not a palindrom`;
}

console.log(message);