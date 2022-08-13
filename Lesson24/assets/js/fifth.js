/* 5-th: Write a function that checks if the given number is perfect.
    perfect number is a number equal to the sum of all its divisors.
    For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3. 
   6-th: Write a function that accepts the min and max values of a range, 
    and only puts out the perfect numbers within that range.
    Use the previous function to check, if numbers are perfect.
 */

 
 let res = checkPerfectNumber(parseInt(prompt(`Enter a number`)));
 if (res==true){
    console.log (`number is perfect`);
 } else {
    console.log (`number isn't perfect`);
 }


 
 //-----------------------------------------------------------

 let minNum =parseInt(prompt(`Enter min values of a range`));
 let maxNum =parseInt(prompt(`Enter max values of a range`));
 let checkResult=" ";
 findPerfectNumber(minNum, maxNum);
 console.log(checkResult);

 function findPerfectNumber(minNum,maxNum){
    for (let i=minNum; i<=maxNum; i++){
        if (checkPerfectNumber(i)){
            checkResult += (`${i}, `); 
        }
    } 
 }


 //----------------------------------------------------------

 function checkPerfectNumber(num){
    let sum = 0;
    for (let i=1; i<num; i++)
        {
           if (num%i===0){
            sum+=i;
           } 
        } 
    let res=((sum===num)? true: false);
    return (res);  
 } 

 
 
