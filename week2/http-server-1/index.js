const express = require("express");
const port = 3000;
const app = express();

function someTimeTakingTask() {
  return new Promise((resolve, reject) => {
    fsetTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ username: "Mohith", age: 22 });
      } else {
        reject("500 Error");
      }
    }, 1000);
  });
}

async function printResult() {
  try {
    const user = await someTimeTakingTask();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

app.get("/", function (req, res) {
  res.send("<h1>Good Evening</h1>");
  printResult();
});

app.listen(port);
