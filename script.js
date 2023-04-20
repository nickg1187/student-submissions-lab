"use strict";
// 1.

const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

const oldSubmissions = [
  { name: "Nick", score: 20, date: "2018-04-22", passed: false },
];

// 2.

const addSubmission = (array, newName, newScore, newDate) => {
  // push to "placeholder array (parameter)"
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(newSubmission);
};

addSubmission(oldSubmissions, "James", 60, "2018-01-24");
console.log(oldSubmissions);
addSubmission(submissions, "James", 90, "2018-01-24");
console.log(submissions);

// 3.

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(oldSubmissions, 0);
console.log(oldSubmissions);
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

// 4.

const deleteSubmissionByName = (array, name) => {
  array.splice(name, 1);
};

deleteSubmissionByName(submissions, "Jane");
console.log(submissions);

// 5.

const editSubmission = (array, index, score) => {};

// 6.

const findSubmissionByName = (array, name) => {
  submissions.find((string) => {
    return string === name;
  });
};

console.log(findSubmissionByName("Joe"));
console.log(findSubmissionByName("Trevor"));

// 7. "The Superlative" (the most of something)
const findLowestScore = (array) => {
  let lowestScoreHolder = array[0];
  array.foreach((submissionFromArray) => {
    if (submissionFromArray.score < lowestScoreHolder.score) {
      lowestScoreHolder = submissionFromArray;
    }
  });
  return lowestScoreHolder;
};

console.log(findLowestScore(submissions));
