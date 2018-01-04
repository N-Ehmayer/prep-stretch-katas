var talkingCalendar = function(date) {

  var year = date.slice(0, 4);
  var month = date.slice(5, 7);
  var day = date.slice(8, 10);

  if (month === '01') {
    month = "January";
  } else if (month === '02') {
    month = "February";
  } else if (month === '03') {
    month = "March";
  } else if (month === '04') {
    month = "April";
  } else if (month === '05') {
    month = "May";
  } else if (month === '06') {
    month = "June";
  } else if (month === '07') {
    month = "July";
  } else if (month === '08') {
    month = "Augest";
  } else if (month === '09') {
    month = "September";
  } else if (month === '10') {
    month = "October";
  } else if (month === '11') {
    month = "November";
  } else if (month === '12') {
    month = "December";
  }

  var dayHundredth = day % 10;

  if (day[0] == 0) {
    day = day.slice(1, 2);
  }

  if (dayHundredth == 1 && day != 11) {
    day += 'st';
  } else if (dayHundredth == 2 && day != 12) {
    day += 'nd';
  } else if (dayHundredth == 3 && day != 13) {
    day += 'rd';
  } else {
    day += 'th';
  }

  return month + ' ' + day + ', ' + year;

}

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));

console.log(talkingCalendar('1992/01/13'));

