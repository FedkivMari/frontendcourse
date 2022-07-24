
/*Loop day input like this: «Day of the week. Would you like to see the next one?»
 which continues as long as the user clicks OK.
 */
 let i=+prompt(`Enter the day's number`);
 
 
do 
    if (i<8) {
        var day=(i==1)?`Monday`:
        (i==2)?`Tuesday`:
        (i==3)?`Wednesday`:
        (i==4)?`Thursday`:
        (i==5)?`Friday`:
        (i==6)?`Saturday`:
        `Sunday`;
        i++
    } else {
        i=2;
        var day = `Monday`;
    }

 while ( confirm(`${day} Would you like to see the next one?`)==true);
 