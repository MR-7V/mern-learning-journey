/*
File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/
const fs = require("fs");

fs.readFile("temp.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
  const fileContent = data.replace(/\s+/g, " ").trim();
  fs.writeFile("temp.txt", fileContent, (err) => {
    if (err) throw err;
    console.log("File has been written!");
  });
});
