
/*Execute a currency converter.
 A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. */

let sum = prompt('Enter amount in USD');
let num = prompt('Enter number of currency ( 1-EUR, 2-SEK, 3-UAH)');

const EUR=1.02;
const UAH=38;
const SEK=0.097;

let curSum=(num==1)? (sum*EUR):
                   (num==2)? (sum*SEK):
                   (num==3)? (sum*UAH):
                   (`Choose correct number!`);
alert(curSum);
