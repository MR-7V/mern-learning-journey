/*
//The ugly way of doing validations and authentication

const express = require("express");
const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (!(username === "mohith" && password === "pass")) {
    res.status(400).json({ msg: "Invlaid User!" });
    return;
  }
  if (kidneyId != "1" && kidneyId != "2") {
    res.status(400).json({ msg: "Invalid Kidney Id" });
  } else {
    res.status(200).json({ msg: "Your kidney is fine!" });
  }
});*/

/*
//To understand how requests can have multiple call-backs and how the flow works.

const express = require("express");
const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("First Middleware");
    next();
  },
  (req, res, next) => {
    console.log("Second Middleware");
    next();
  },
  (req, res) => {
    res.status(200).json({ msg: "You are welcome!" });
  }
);*/

/*
//To understand how the middlewares works.

const express = require("express");
const app = express();

const validateUser = function (req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (!(username === "mohith" && password === "pass")) {
    res.status(400).json({ msg: "Invalid User" });
    return;
  } else {
    next();
  }
};

const validateKidney = function (req, res, next) {
  const kidneyId = req.query.kidneyId;
  console.log(kidneyId.length);
  if (!(kidneyId == 1 || kidneyId == 2)) {
    res.status(400).json({ msg: "Invalid Kidney" });
    return;
  } else {
    next();
  }
};

app.get("/", validateUser, validateKidney, (req, res) => {
  res.status(200).json({ msg: "Welcome Sir!" });
});

app.use(function (err, req, res, next) {
  res.json({
    msg: "Something with the server",
  });
});

app.listen(3000, () => {
  console.log("Listeing on port 3000");
});
*/

//To use zod
const express = require("express");
const zod = require("zod");
const app = express();
const arraySchema = zod.array(zod.string());

app.use(express.json());

app.post("/", (req, res) => {
  const array = req.body.array;
  const zodResponse = arraySchema.safeParse(array);
  res.send({
    zodResponse,
  });
});

app.listen(3000, () => {
  console.log("Listening to Port 3000!");
});
