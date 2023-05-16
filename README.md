# Work Day Scheduler

## Table of Contents

- [Description](#description)
- [My Task](#my-task)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

- My motivation with this project, was to provide many users an easy to plan out their day.
- I built this project to practice my new founding knowledge in the new technologies just learned.
- Instead of trying to plan your day through your head, you can quickly plan it out on the web.
- The biggest thing I learned is that you can't use jquery methods without calling the jquery syntax. Even though they equal
a Jquery variable.

## My Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Usage

To use this application. Access the index html or the provided url (). You should be provided with the image below.

![Main Page](Assets/work-day-scheduler-main.png)

Select any empty text box to begin typing what you want on that planner. 

![Text in text box](Assets/work-day-scheduler-text.png)

Then when are you satisfied with your text, then hit the save button to save it to your local storage. 

![Save button](Assets/work-day-scheduler-save.png)

When you are done saving all that you want and you may leave webpage. Your saved text will display back to where you saved 
it from. 

To remove what you have saved. Simply just delete the text and save. 

![Empty text boxes](assets/work-day-scheduler-main.png)

## Credits

To add the ordinal, I referenced: https://www.britannica.com/dictionary/eb/qa/How-To-Write-Ordinal-Numbers 

Technologies used: https://day.js.org/en/ 

## License

MIT License

Copyright (c) 2023 javieb5186

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.