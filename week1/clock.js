/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;

  process.stdout.write("\x1Bc"); // ANSI escape code to clear the terminal
  console.log(`Current Time: ${currentTime}`);
}

setInterval(updateClock, 1000);

updateClock();

// NOTE: padStart() - This ensures that even if the hour, minute, or second is a single-digit number, it will be padded with a '0' at the beginning to maintain a consistent two-digit representation.
