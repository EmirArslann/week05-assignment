/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function(date) {
  // Your code here
  switch (date){
    case 1:
      return "January";
    case 2: 
      return "February";
    case 3: 
      return "Mart"; 
    case 4: 
      return "April";
    case 5:
      return "May";
    case 6: 
      return "June";
    case 7: 
      return "July";
    case 8: 
      return "August";
    case 9: 
      return "September";
    case 10: 
      return "October";
    case 11: 
      return "November";
    case 12:
      return "December"           
         

  }



  
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
