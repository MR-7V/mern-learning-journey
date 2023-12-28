const express = require("express");
const app = express();

const users = [
  {
    name: "Kiran",
    kidneys: [
      {
        healthy: "Good",
      },
      {
        healthy: "Bad",
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const kiranKidneys = users[0].kidneys;
  const noOfKidneys = kiranKidneys.length;
  let noOfGoodkidneys = 0;
  for (let i = 0; i < kiranKidneys.length; i++) {
    if (kiranKidneys[i].healthy == "Good") {
      noOfGoodkidneys++;
    }
  }
  const noOfBadKidneys = noOfKidneys - noOfGoodkidneys;
  res.json({
    noOfKidneys,
    noOfGoodkidneys,
    noOfBadKidneys,
  });
});

app.post("/", function (req, res) {
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy: ishealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = "Good";
  }
  res.json({});
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy == "Good") {
      newKidneys.push({
        healthy: "Good",
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({ msg: "done" });
});

app.listen(3000);
