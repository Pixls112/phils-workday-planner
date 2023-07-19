// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentdayEl = $("#currentDay")
var saveButton = $('.saveBtn')
var hour9 = $('#hour-nine')
var hour10 = $('#hour-ten')
var hour11 = $('#hour-eleven')
var hour12 = $('#hour-twelve')
var hour13 = $('#hour-thirteen')
var hour14 = $('#hour-fourteen')
var hour15 = $('#hour-fifteen')
var hour16 = $('#hour-sixteen')
var hour17 = $('#hour-seventeen')

var hour9Block = $('#hour-9')
var hour10Block = $('#hour-10')
var hour11Block = $('#hour-11')
var hour12Block = $('#hour-12')
var hour13Block = $('#hour-13')
var hour14Block = $('#hour-14')
var hour15Block = $('#hour-15')
var hour16Block = $('#hour-16')
var hour17Block = $('#hour-17')

var d = new Date()
var currentTime = d.getHours()
console.log(currentTime)


var setTime = function(){
  if (currentTime === 9) {
    hour9Block.addClass('present')
    hour10Block.addClass('future')
    hour11Block.addClass('future')
    hour12Block.addClass('future')
    hour13Block.addClass('future')
    hour14Block.addClass('future')
    hour15Block.addClass('future')
    hour16Block.addClass('future')
    hour17Block.addClass('future')
  } else if (currentTime ===10) {
    hour9Block.addClass('past')
    hour10Block.addClass('present')
    hour11Block.addClass('future')
    hour12Block.addClass('future')
    hour13Block.addClass('future')
    hour14Block.addClass('future')
    hour15Block.addClass('future')
    hour16Block.addClass('future')
    hour17Block.addClass('future')
  } else if (currentTime ===11) {
    hour9Block.addClass('past')
    hour10Block.addClass('past')
    hour11Block.addClass('present')
    hour12Block.addClass('future')
    hour13Block.addClass('future')
    hour14Block.addClass('future')
    hour15Block.addClass('future')
    hour16Block.addClass('future')
    hour17Block.addClass('future')
  } else if (currentTime ===12) {
    hour9Block.addClass('past')
    hour10Block.addClass('past')
    hour11Block.addClass('past')
    hour12Block.addClass('present')
    hour13Block.addClass('future')
    hour14Block.addClass('future')
    hour15Block.addClass('future')
    hour16Block.addClass('future')
    hour17Block.addClass('future')
  } else if (currentTime ===13) {
    hour9Block.addClass('past')
    hour10Block.addClass('past')
    hour11Block.addClass('past')
    hour12Block.addClass('past')
    hour13Block.addClass('present')
    hour14Block.addClass('future')
    hour15Block.addClass('future')
    hour16Block.addClass('future')
    hour17Block.addClass('future')
  } else if (currentTime ===14) {
    hour9Block.addClass('past')
    hour10Block.addClass('past')
    hour11Block.addClass('past')
    hour12Block.addClass('past')
    hour13Block.addClass('past')
    hour14Block.addClass('present')
    hour15Block.addClass('future')
    hour16Block.addClass('future')
    hour17Block.addClass('future')
  } else if (currentTime ===15) {
    hour9Block.addClass('past')
    hour10Block.addClass('past')
    hour11Block.addClass('past')
    hour12Block.addClass('past')
    hour13Block.addClass('past')
    hour14Block.addClass('past')
    hour15Block.addClass('present')
    hour16Block.addClass('future')
    hour17Block.addClass('future')
  } else if (currentTime ===16) {
    hour9Block.addClass('past')
    hour10Block.addClass('past')
    hour11Block.addClass('past')
    hour12Block.addClass('past')
    hour13Block.addClass('past')
    hour14Block.addClass('past')
    hour15Block.addClass('past')
    hour16Block.addClass('present')
    hour17Block.addClass('future')
  } else if (currentTime ===17) {
    hour9Block.addClass('past')
    hour10Block.addClass('past')
    hour11Block.addClass('past')
    hour12Block.addClass('past')
    hour13Block.addClass('past')
    hour14Block.addClass('past')
    hour15Block.addClass('past')
    hour16Block.addClass('past')
    hour17Block.addClass('present')
  } else {
    hour9Block.addClass('past')
    hour10Block.addClass('past')
    hour11Block.addClass('past')
    hour12Block.addClass('past')
    hour13Block.addClass('past')
    hour14Block.addClass('past')
    hour15Block.addClass('past')
    hour16Block.addClass('past')
    hour17Block.addClass('past')
  }
}

$(document).ready(function () {

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentdayEl.text(rightNow);
  }

  $(function () {
    saveButton.on('click', function () {
      console.log('button function works');
      localStorage.setItem('hour-9', hour9.val());
      localStorage.setItem('hour-10', hour10.val());
      localStorage.setItem('hour-11', hour11.val());
      localStorage.setItem('hour-12', hour12.val());
      localStorage.setItem('hour-13', hour13.val());
      localStorage.setItem('hour-14', hour14.val());
      localStorage.setItem('hour-15', hour15.val());
      localStorage.setItem('hour-16', hour16.val());
      localStorage.setItem('hour-17', hour17.val());
    })

    document.getElementById('hour-nine').innerText = localStorage.getItem('hour-9')
    document.getElementById('hour-ten').innerText = localStorage.getItem('hour-10')
    document.getElementById('hour-eleven').innerText = localStorage.getItem('hour-11')
    document.getElementById('hour-twelve').innerText = localStorage.getItem('hour-12')
    document.getElementById('hour-thirteen').innerText = localStorage.getItem('hour-13')
    document.getElementById('hour-fourteen').innerText = localStorage.getItem('hour-14')
    document.getElementById('hour-fifteen').innerText = localStorage.getItem('hour-15')
    document.getElementById('hour-sixteen').innerText = localStorage.getItem('hour-16')
    document.getElementById('hour-seventeen').innerText = localStorage.getItem('hour-17')

    displayTime()
    setInterval(displayTime, 1000);
  });

});

setTime()
