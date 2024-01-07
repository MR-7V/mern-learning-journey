/*
Write to a file

Using the fs library again, try to write and read the same file after writing it.
Make sure the fs.readFile does not read file before fs.writeLine created the file.
*/

const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    await fsPromises.writeFile("./textWrite.txt", "This is File content!");
    console.log("File is successfully written!");
    const data = await fsPromises.readFile("./textWrite.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fileOps();

console.log("Next task!");

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught exception: ${err}`);
  process.exit(1);
});
