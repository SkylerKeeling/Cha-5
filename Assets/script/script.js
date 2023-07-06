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

  const hour9am = document.getElementById("hour-9").value
  const hour10am = document.getElementById("hour-10").value
  const hour11am = document.getElementById("hour-11").value
  const hour12pm = document.getElementById("hour-12").value
  const hour1pm = document.getElementById("hour-1").value
  const hour2pm = document.getElementById("hour-2").value
  const hour3pm = document.getElementById("hour-3").value
  const hour4pm = document.getElementById("hour-4").value
  const hour5pm = document.getElementById("hour-5").value
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
  //save to storage
  $(".saveBtn").on("click", function () {
    for (var i = 0; i < differentTimes.length; i++) {
      localStorage.setItem("timeSlots", JSON.stringify(differentTimes[i]))
      console.log(differentTimes)
      differentTimes[i].textContent = JSON.parse(
        localStorage.getItem("timeSlots")
      )
    }
  })
  //print from storage

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  //
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

  compareTime()

  //
  time = dayjs()
  $("#currentDay").text(time)
})
