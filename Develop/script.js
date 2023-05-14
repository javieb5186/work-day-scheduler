// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  // const day = dayjs().date();
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
