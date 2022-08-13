// const myObject = {
//     name: 'Mary',
//     age:37,
// }
// const myCar = {
//     nameCar: 'Ford',
//     color:'white',
//     age:10,
// }

// let i=0;
// for (key in myCar){
//     i++
// }
// console.log(i);

//---------------------------------------------
// const newObject = {};
// for (key in myObject){
//     newObject[key]=myObject[key];
// }
// for (key in myCar){
//     newObject[key]=myCar[key];
// }

// console.log (newObject);

//----------------------------------------------
// const Car = {
//     nameCar: 'Ford',
//     color:'white',
//     age:10,
// }
// let newString ="";
// for ( let key in Car){
//         let propVal = myCar[key];
//         newString+=(key+": "+propVal+", ");
//     }
//     console.log ("{" + newString + "}");   
    

const array=['you','will','learn','will','learn'];
// let rez = array.indexOf(you);
 const tempArray= [...array].sort();
for (let i=0; i<tempArray.length; i++){
    if (tempArray[i]===tempArray[i+1]){
        tempArray.splice(i,1);
    }
}

console.log (tempArray);