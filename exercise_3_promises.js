// Exercise 3 - Promises
// Write a function called `wait` that takes a number as an argument
// (representing milliseconds) and returns a Promise.
// The Promise should resolve after the given number of milliseconds, using `setTimeout`.
// The resolved value can be anything you choose.

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting!");
    }, milliseconds);
  });
}

wait(2000).then((result) => {
  console.log(result);
});
