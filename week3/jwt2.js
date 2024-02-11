const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const jwtPassword = "123456";

const app = express();
app.use(bodyParser.json());

const ALL_USERS = [
  {
    username: "mohith@gmail.com",
    password: "123",
    name: "mohith",
  },
  {
    username: "ram@gmail.com",
    password: "123321",
    name: "Ram",
  },
  {
    username: "kiran@gmail.com",
    password: "123321",
    name: "kiran",
  },
];

function userExists(username, password) {
  let userExistsFlag = false;
  ALL_USERS.forEach(function (obj) {
    if (username == obj.username && password == obj.password) {
      userExistsFlag = true;
    }
  });
  return userExistsFlag;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    return res.json(ALL_USERS).status(200);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Listening in port 3000!");
});
