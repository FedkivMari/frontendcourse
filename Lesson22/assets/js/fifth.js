
/*Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month,
  new year, and also leap years.*/

  let curentDate=prompt(`Enter a date (dd:mm:yy)`);
  let dd = curentDate.slice(0,2);
  let mm = curentDate.slice(3,5);
  let yy = curentDate.slice(6);
  if (mm==02){
    var nextDate = (dd<28)? ((+dd+1)+ `:` + mm + `:` + yy):
                   (+yy%4!=0)||(dd==29)? (`01:03:` + yy):
                   (`29:02:` + yy);
  } else if (mm==(04||06||09||11)) {
    var nextDate = (dd<30)?
                   ((+dd+1)+ `:` + mm + `:` + yy):
                   (`01:` + (+mm+1) + `:` + yy);
  } else if (mm==12) {
    var nextDate = (dd<31)?
                   ((+dd+1)+ `:` + mm + `:` + yy):
                   (`01:01:` + (+yy+1));
  }
   else {
    var nextDate = (+dd<31)?
                   ((+dd+1)+ `:` + mm + `:` + yy):
                   (`01:` + (+mm+1) + `:` + yy);
  }

  alert (`Next date: ` + nextDate);