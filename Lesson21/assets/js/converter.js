const EXCHRATE = 1.2
let usdAmount = prompt ('Enter you amount in USD:');
let euroAmount=usdAmount*EXCHRATE;
console.log (euroAmount + 'EUR');

var memory = prompt('Enter you flash drive memory in GB:');
const FILESIZE = 820;
let numberOfFiles = Math.trunc(memory*1024/FILESIZE);
console.log ('In this flash drive can be stored '+ numberOfFiles +' files with size ' + FILESIZE + ' MB' );


let amountOfMoney = prompt('How much money do you have?');
let price = prompt('What is the price of one chocolate bar?');
let numberOfChocolate = parseInt(amountOfMoney/price);
let change = (amountOfMoney - numberOfChocolate * price);
console.log ('You can bye ' + numberOfChocolate + ' chocolate bars and you will have left ' + change);


let sumDeposit = prompt ('Enter a sum of bank deposits');
let term = prompt ('Enter a term of deposit in month');
let interestRate = prompt ('Enter a yearly interest rate');
let interest = ((sumDeposit*interestRate*term/365)/100);
console.log ('Your sum of interest will be '+ interest);