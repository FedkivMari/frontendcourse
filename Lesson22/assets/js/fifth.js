let numS = prompt('Enter 10 numbers in 1 line');

var countPos = 0;
var countNeg = 0;
var countNull = 0;
var countOdd = 0;
var countEven = 0;
var i=0;
while (i!=numS.length) {
    debugger
    let num = "";
    // let j=0;
    for (var j=i; numS[j]!= " "; j++) {
        
        if (numS[j]==undefined) break;
        num+=numS[j];
    }
    i=j+1;
    if (num == 0){
        countNull++;
    }  else
       {if (+num>0){
           countPos++;
           } else
            {countNeg++;}
        };

    if (+num%2==0){
        countEven++;
    } else {countOdd++;};
    debugger
}
console.log (countEven, countOdd, countNeg, countPos, countNull);