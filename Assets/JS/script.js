
$(function () {

var input = $('');
var saveBtn = $('.saveBtn');
currentHour = dayjs().hour();
currentDate = dayjs().format('MM/DD/YYYY');

setDate();
getLocalStorage();
setClass();
console.log(currentDate);


function setDate() {
  var dateElement = $('<h2>');
  $(dateElement).text(currentDate);
  $("#header").append(dateElement);
}


function getLocalStorage() {
  var calendarEvent = localStorage.getItem("Calendar Event");
  input.textcontent = calendarEvent;
}

function saveInput(event) {
  event.preventDefault();

  var text = $(this).siblings('.description').val();
  var hour = $(this).parent().attr('id');
  localStorage.setItem(hour, text);

  console.log(input);
 
};

function setClass() {

  console.log(currentHour);

  $('.time-block').each(function() {

    var hourID = $(this).attr('id');
    $(this).children('.description').val(localStorage.getItem(hourID));

    if (hourID < currentHour) { 

      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");

    } else if (hourID == currentHour) { 

      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    
    } else if (hourID > currentHour) {

      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    
    } else {

      alert("This didn't work");

    }

  })

}

$(saveBtn).on('click', saveInput);

});
