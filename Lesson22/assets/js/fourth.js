
/* Request a length of a circumference and a perimeter of
   a square from a user. Define whether that circumference can fit in that square.*/

   let circLenth = prompt(`Enter a length of a circumference:`)
   let perimetr = prompt(`Enter a length of a perimeter of a square:`)
   
   let sideLenth = perimetr / 4;
   const PI=3.1415;
   let digonal = circLenth / PI;
   let answ=(digonal<=sideLenth)? `yes`:`no`; 
   console.log (`Can circumference fit in this square: ` + answ);

