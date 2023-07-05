// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button.

  //This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.

  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // const saveButton = document.querySelectorAll("#saveBtn")

  // let schedule = [
  //   {time: "9 AM", inputText: ""},
  //   {time: "10 AM", inputText: ""},
  //   {time: "11 AM", inputText: ""},
  //   {time: "12 PM", inputText: ""},
  //   {time: "1 PM", inputText: ""},
  //   {time: "2 PM", inputText: ""},
  //   {time: "3 PM", inputText: ""},
  //   {time: "4 PM", inputText: ""},
  //   {time: "5 PM", inputText: ""},
  // ]

  const hour9am = document.querySelector("hour-9")
  const hour10am = document.querySelector("hour-10")
  const hour11am = document.querySelector("hour-11")
  const hour12pm = document.querySelector("hour-12")
  const hour1pm = document.querySelector("hour-1")
  const hour2pm = document.querySelector("hour-2")
  const hour3pm = document.querySelector("hour-3")
  const hour4pm = document.querySelector("hour-4")
  const hour5pm = document.querySelector("hour-5")
  let differentTimes = [
    hour9am,
    hour10am,
    hour11am,
    hour12pm,
    hour1pm,
    hour2pm,
    hour3pm,
    hour4pm,
    hour5pm,
  ]

  let timeSlot = $(".time-block")
  localStorage.setItem("TimeKey", JSON.parse(differentTimes))

  $(".saveBtn").on("click", function () {
    for (var i = 0; i < differentTimes.length; i++) {
      timeSlot.innerHTML = localStorage.getItem("timeKey")
    }
  })

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
  time = dayjs()
  $("#currentDay").text(time)
})
function compareTime() {
  const timeBlock = parseInt("hour")
  const currentTime = dayjs().format("H")
  console.log(timeBlock)
  console.log(currentTime)
  if (timeBlock > currentTime) {
    $("time-block").addClass("future")
  } else if (timeBlock == currentTime) {
    $("time-block").addClass("present")
  } else {
    $("time-block").addClass("past")
  }
}
