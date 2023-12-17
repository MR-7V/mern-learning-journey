const prompt = require("prompt-sync")();

function timer(seconds) {
  console.log(`Timer started for ${seconds} Seconds.`);

  const timeoutDuration = seconds * 1000;

  console.time("Timer");

  setTimeout(() => {
    clearInterval(intervelId);
    console.log("Time Up!");
    console.timeEnd("Timer");
  }, timeoutDuration);

  const intervelId = setInterval(() => {
    seconds -= 1;
    process.stdout.write("\x1Bc");
    console.log(seconds);
  }, 1000);
}

const noOfSeconds = prompt("Enter Timer in seconds:");
timer(noOfSeconds);
