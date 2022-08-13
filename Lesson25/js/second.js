/* Create an object that contains separately the numerator and the denominator of a fraction,
   and the following functions for working with this object:

A function for adding two fraction objects.
A function for subtracting two fraction objects.
A function for multiplying two fraction objects.
A function for dividing two fraction objects.
A function for simplifying a fraction object.  */



const  calcFranction = {
       numerator: 4,
       denominator: 5,
       adding(numer, denomin)
       {
           if (denomin==this.denominator)      
           {let sumNum = numer + this.numerator;
              return console.log(`${sumNum} / ${denomin}`); 
           } else 
           {
              for (let i=1; i<=denomin||i<=this.denominator; i++)
              {
                  let checkNum = i*denomin;
                  if (checkNum%this.denominator==0)
                  {
                     let multipleNum = checkNum/this.denominator;
                     let sumNum = numer*i + this.numerator*multipleNum;
                     return console.log(`${sumNum} / ${checkNum}`);
                     break;
                  }
              }

           }
       },
       subtracting: function subtracting(numer, denomin)
       {
           if (denomin==this.denominator)      
           {let subNum = numer - this.numerator;
              return console.log(`${subNum} / ${denomin}`); 
           } else 
           {
              for (let i=1; i<=denomin||i<=this.denominator; i++)
              {
              let checkNum = i*denomin;
              if (checkNum%this.denominator==0)
              {
                     let multipleNum = checkNum/this.denominator;
                     let subNum = numer*i - this.numerator*multipleNum;
                     return console.log(`${subNum} / ${checkNum}`);
                     break;
              }
              }

           }    
       },
       multiplying(numer, denomin)
       {
           
              let multNumerator = numer * this.numerator;
              let multDenominator =denomin * this.denominator;
              for (let i=10; i>0; i--)
              {
                  if (multNumerator%i==0 && multDenominator%i==0)
                  {
                     multNumerator = multNumerator/i;
                     multDenominator = multDenominator/i;
                  }
              } 

              return console.log(`${multNumerator} / ${multDenominator}`);
   
       },
       dividing(numer, denomin)
       {
           
              let multNumerator = numer * this.denominator;
              let multDenominator =denomin * this.numerator;
              for (let i=10; i>0; i--)
              {
                  if (multNumerator%i==0 && multDenominator%i==0)
                  {
                     multNumerator = multNumerator/i;
                     multDenominator = multDenominator/i;
                  }
              } 

              return console.log(`${multNumerator} / ${multDenominator}`);
   
       },

}

calcFranction.adding(7, 8);
calcFranction.subtracting(7, 8);
calcFranction.multiplying(25, 72);
calcFranction.dividing(3, 7);