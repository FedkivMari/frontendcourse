
/*Request 10 numbers from a user and count, how many are positive, negative, or zero.
  Also, count odd and even. Display the statistics. 
  There’s only one variable (not 10) needed for input by a user. 
*/

let numS = prompt('Enter 10 numbers in 1 line');

var countPos = 0;
var countNeg = 0;
var countNull = 0;
var countOdd = 0;
var countEven = 0;
var i=0;
while ((i-1)!=numS.length) {
    
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
       {if (num>0){
           countPos++;
           } else
            {countNeg++;}
        };

    if (num%2==0){
        countEven++;
    } else {countOdd++;};
    
}
console.log (`Your numbers = `+numS+` conteins: even=`+ countEven + `, odd=` + countOdd +`, negative=`+ countNeg + `, positive=` + countPos + `, null=` + countNull);
