// https://github.com/edralinavagrace-lang/cs81-module4a-reviewtracker
// Weekly reading log
//This provides a reading log by each day and includes submissions already made.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];
//This function above shows how much time was spent each day reading, and what the person might have been reading. The loops record this data and organize it so that each day is recorded, as well as how long each book was read.
//The data stored is the day, the book and the minutes spent reading said book.

//This function below allows us to add new data into the log, by the day, the book and the amount of minutes spent reading the book. This allows for new entries to be made quickly and easily.
// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}


//The function below uses the total amount of time reading across each day as an input. With this input it allows us to see the total time spent reading for the entire week.
// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}
//This equates how much total minutes were spent reading all week between all books, not just limited to one book or one day.


//The function below adds together all the minutes each book is read. By inputting the minutes, we receive the book that is read the most.
// Returns the book read most frequently
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}
//This reveals the book that is read the most overall. This adds together all the different values categorized by book and determines which one has the most minutes reading it.


// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}
//This shows how many total minutes were spent reading in one day, allowing us to see how long was spent on which day.

//Below shows the code to add a new entry. The input is the new data being submitted, and it prints out the amount of time reading and the most read book.
// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
//This code adds a book, alongside the minutes read and the day it was read. The book was Dune, the day was saturday and the amount of minutes were 50.
