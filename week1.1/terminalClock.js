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
