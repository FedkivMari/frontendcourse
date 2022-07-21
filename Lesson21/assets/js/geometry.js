let sideLenth = prompt('Enter the length of the side of a square:')
let perimetr =sideLenth*4;
console.log ('Perimeter of the square is : '  + perimetr);

let radius = prompt('Enter the a radius of a circle:')
const Pi=3.14;
let area =Pi*(radius*2);
console.log ('Area of a circle is: '  + area);


let question = confirm ('Do you want have some fun?');
if (question == 1){
    let distanse = prompt('Enter a distance in km between the two cities:');
    let time = prompt('Enter the time in wich you want to cover it within:');
    let speed = distanse/time;
    console.log('You should go with speed: ' + speed);
};
