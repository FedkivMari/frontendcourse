/* Write a function that accepts the width and length of a rectangle and calculates its area.
 If there is only one parameter given, it counts as a square. */
let area = 0;
function caclArea(sideOne, sideTwo){
     if (sideTwo===undefined)
     {
        area= sideOne*sideOne;
     } else
     {
        area= sideOne*sideTwo;   
     }
     
}
caclArea(5,8);
console.log(area);

caclArea(5);
console.log(area);