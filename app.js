// countdown
// Write a function called countdown that accepts a number as a parameter and
//every 1000 milliseconds decrements the value and console.logs it.
//Once the value is 0 it should log “DONE!” and stop.

//create a function
//console.log value 3,2,1,DONE!
//decrease every 1 second - setTimeout 1 second

function countDown(num) {
  let timer = setInterval(function () {
    num--;
    if (num <= 0) {
      clearInterval(timer);
      console.log("DONE!");
    } else {
      console.log(num);
    }
  }, 1000);

  console.log("hello");
}

//randomGame
// Write a function called randomGame that selects a random number between 0 and 1
// every 1000 milliseconds and each time that a random number is picked, add 1 to a counter.
// If the number is greater than .75, stop the timer and console.log the number of tries it
// took before we found a number greater than .75.

//create a function
//since it happens every 1 second, you know you need to use setInterval(func, time apart)
//then you define your function
//also since it is just one time use, can use anonymous function instead of declaring a whole new one
//pick a random number Math.random()
//then if number is greater than .75, stop
//console log the number and tries

function randomGame() {
  let count = 0;
  let timer = setInterval(
    function () {
      num = Math.random();
      count++;
      if (num > 0.75) {
        clearInterval(timer);
        console.log(
          `It took ${count} to get a number greater than .75`
        );
      }
    },

    1000
  );
}
