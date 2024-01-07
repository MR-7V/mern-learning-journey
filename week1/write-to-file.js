/*
Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs");

fs.writeFile("./tempWrite.txt", "This is going to be great year!", (err) => {
  if (err) throw err;
  console.log("File has been successfully written!");
});

console.log("Next task!");

function someExpensiveOperation() {
  let temp = 0;
  for (let i = 0; i <= 10000000000; i++) {
    temp++;
  }
}
someExpensiveOperation();

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
});
