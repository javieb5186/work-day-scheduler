$(function () {

  const buttons = $(".time-block").children("button");

  for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).click(function() {
      let value = $(buttons[i]).parent().children("textarea").val();
      let id = $(buttons[i]).parent().attr("id");
      localStorage.setItem(id, value);
    });
  }

  const time = dayjs().format('H');
  const timeBlocks = $(".time-block").children("div:first-child");

  for (let i = 0; i < timeBlocks.length; i++) {

    const length = timeBlocks[i].innerText.length;
    const amPm = timeBlocks[i].innerText.slice(length - 2, length);
    let timeNum = Number(timeBlocks[i].innerText.slice(0, length - 2));

    if(amPm === "PM") {
      if(timeNum !== 12)
        timeNum = timeNum + 12;

      if(timeNum < time)
        $(timeBlocks[i]).parent().addClass("past");
      else if (timeNum > time)
        $(timeBlocks[i]).parent().addClass("future");
      else if (timeNum == time)
        $(timeBlocks[i]).parent().addClass("present");
    }
    else if (amPm === "AM") {
      if(timeNum < time)
        $(timeBlocks[i]).parent().addClass("past");
      else if (timeNum > time)
        $(timeBlocks[i]).parent().addClass("future");
      else if(timeNum == time)
        $(timeBlocks[i]).parent().addClass("present");
    }
  }

  for (let i = 1; i < 25; i++) {
    try {
      let item = localStorage.getItem("hour-" + i);
      if(item !== null)
        $("#hour-" + i).children("textarea").val(item);
    } catch (error) {
      console.log(error); 
    }
  }

  const day = dayjs().date();
  const dayString = String(day);
  var lastNumber;

  if(dayString.length === 2) {
    if(dayString < 20 && dayString > 10)
      lastNumber = dayString;
    else
      lastNumber = dayString[dayString.length - 1];
  }
  else 
    lastNumber = dayString[dayString.length - 1];

  var ordinal;
  switch (lastNumber) {
    case "1":
      ordinal = "st";
      break;
    case "2":
      ordinal = "nd"
      break;
    case "3":
      ordinal = "rd";
      break;
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case "10":
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
    case "20":
      ordinal = "th";
      break;
    default:
      console.log("Error Occured.");
      break;
  }

  const currentDay = $("#currentDay");
  const todaysDate = new dayjs().format("dddd, MMMM D");
  currentDay.text(todaysDate + ordinal);
});
