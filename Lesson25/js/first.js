/* Create an object that describes a car (manufacturer, model, year of release, average speed)
   and the following methods for working with this object:
A method that displays the car info 
A method for counting a time frame necessary to cover a given distance with the average speed.
Note that every 4 hours the driver has to take a 1-hour break. */


 const myCar = new Object();
 myCar.make = 'Ford';
 myCar.model = 'Mustang';
 myCar.year = 1969;
 myCar.speed = 150;
 
 console.log(myCar);

 let distance = prompt("Enter distance");
 let time = (distance/myCar.speed);
 let rest = ~~(time/4);
 
 console.log(`You need ${time+rest} hours`);
 

 