// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

var input = $('');
var saveBtn = $('.saveBtn');
currentHour = dayjs().hour();


getLocalStorage();
setClass();

function getLocalStorage() {
  var calendarEvent = localStorage.getItem("Calendar Event");
  input.textcontent = calendarEvent;
}

function saveInput(event) {
  event.preventDefault();

  var text = $(this).siblings('.description').val();
  var hour = $(this).parent().attr('id').split('-')[1];
  localStorage.setItem(text, hour);

  console.log(input);
 
};

function setClass() {

  console.log(currentHour);

  $('.time-block').each(function() {

    var hourID = $(this).attr('id');

    if (hourID < currentHour) { 

      $(hourID).addClass("past");
      $(hourID).removeClass("present");
      $(hourID).removeClass("future");

    } else if (hourID == currentHour) { 

      $(hourID).addClass("present");
      $(hourID).removeClass("past");
      $(hourID).removeClass("future");
    
    } else if (hourID > currentHour) {

      $(hourID).addClass("future");
      $(hourID).removeClass("past");
      $(hourID).removeClass("present");
    
    } else {

      alert("This shit didn't work");

    }

  })

  // if id hour < current hour, then apply past class
  // if id hour = current hour, then apply present class
  // if id hour > current hour, then apply future class
}

$(saveBtn).on('click', saveInput);


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
