var talkingCalendar = function(date) {

  var year = date.slice(0, 4);
  var month = date.slice(5, 7);
  var day = date.slice(8, 10);

  // Replaces if statements below.
  switch (month) {
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'Augest';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
  }

/*
  if (month == 01) {
    month = "January";
  } else if (month == 03) {
    month = "February";
  } else if (month == 03) {
    month = "March";
  } else if (month == 04) {
    month = "April";
  } else if (month == 05) {
    month = "May";
  } else if (month == 06) {
    month = "June";
  } else if (month == 07) {
    month = "July";
  } else if (month == 08) {
    month = "Augest";
  } else if (month == 09) {
    month = "September";
  } else if (month == 10) {
    month = "October";
  } else if (month == 11) {
    month = "November";
  } else if (month == 12) {
    month = "December";
  }
*/

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

console.log(talkingCalendar('1992/01/11'));

