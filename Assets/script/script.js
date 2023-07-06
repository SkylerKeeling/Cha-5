$(function () {
  $(".saveBtn").on("click", function () {
    var textValue = $(this).siblings(".description").val()
    var hourKey = $(this).parent().attr("id")
    localStorage.setItem(hourKey, textValue)
  })

  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-1 .description").val(localStorage.getItem("hour-1"))
  $("#hour-2 .description").val(localStorage.getItem("hour-2"))
  $("#hour-3 .description").val(localStorage.getItem("hour-3"))
  $("#hour-4 .description").val(localStorage.getItem("hour-4"))
  $("#hour-5 .description").val(localStorage.getItem("hour-5"))

  function compareTime() {
    const currentTime = dayjs().format("H")

    console.log(currentTime)
    $(".time-block").each(function () {
      const timeBlock = parseInt($(this).attr("id").split("-")[1])
      console.log(timeBlock)
      if (timeBlock > currentTime) {
        $(this).addClass("future")
      } else if (timeBlock == currentTime) {
        $(this).addClass("present")
      } else {
        $(this).addClass("past")
      }
    })
  }

  compareTime()

  time = dayjs()
  $("#currentDay").text(time)
})
