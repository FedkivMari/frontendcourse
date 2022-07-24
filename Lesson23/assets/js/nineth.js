
// Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10.

let i = 2;

while (i<10) {
    for (let j = 1;j<=10;j++){
        let num=i*j;
        console.log (`${i}*${j}=${num}`);
    }
    i++;
    alert(i)
};