const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcryptjs");

app.use(express.json());
app.use(cors());
let addChild1 = {
  name: "baby1",
  age: 2,
  height: "2ft",
  weight: "120kg",
};
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password123",
  database: "babytrackerdb",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected");
  }
});

app.post("/register", async (req, res) => {
  const username = req.body.usernameSet;
  const password = req.body.passwordSet;
  let exits = false;
  db.query(
    "SELECT * FROM credentials WHERE username = ?",
    [username],
    (err, result) => {
      if (result.length > 0) {
        exits = true;
        return res.status(400).send("User with the username already exits");
      }
    }
  );
  if (!exits) {
    if (!username && !password) {
      return res.status(400).json({ message: "Come on fill in the damn form" });
    } else if (username && password) {
      const salt = await bcrypt.genSalt(10); //Hashed password with bcryptjs
      const hash = await bcrypt.hash(password, salt);

      db.query(
        "INSERT INTO credentials (username, password) VALUES (?,?)",
        [username, hash],
        (err, result) => {
          if (!err) {
            return res.send({ message: "Welcome to thw baby tracker" });
          }
        }
      );
    } else {
      return "No username and password was sent";
    }
  }
});

app.post("/get-bathroom", (req, res) => {
  const baby = req.body.babyName;

  db.query("SELECT * FROM restroom WHERE Baby = ?", [baby], (err, result) => {
    console.log(result, err);
    // if (result.length > 0) {

    //     res.send(result)
    // }
    // else {
    //     res.send({message: "No prior log entries!"})
    // }
  });
});

app.post("/bathroom", (req, res) => {
  const {
    mondaySValue,
    tuesdaySValue,
    wednesdaySValue,
    thursdaySValue,
    fridaySValue,
    saturdaySValue,
    sundaySValue,
    mondayLValue,
    tuesdayLValue,
    wednesdayLValue,
    thursdayLValue,
    fridayLValue,
    saturdayLValue,
    sundayLValue,
  } = req.body;
  // const mondaySValue = req.body.mondaySolidSet;
  // const tuesdaySValue = req.body.tuesdaySolidSet;
  // const wednesdaySValue = req.body.wednesdaySolidSet;
  // const thursdaySValue = req.body.thursdaySolidSet;
  // const fridaySValue = req.body.fridaySolidSet;
  // const saturdaySValue = req.body.saturdaySolidSet;
  // const sundaySValue = req.body.sundaySolidSet;
  // const mondayLValue = req.body.mondayLiquidSet;
  // const tuesdayLValue = req.body.tuesdayLiquidSet;
  // const wednesdayLValue = req.body.wednesdayLiquidSet;
  // const thursdayLValue = req.body.thursdayLiquidSet;
  // const fridayLValue = req.body.fridayLiquidSet;
  // const saturdayLValue = req.body.saturdayLiquidSet;
  // const sundayLValue = req.body.sundayLiquidSet;
  //console.log(value)

  db.query(
    "UPDATE restroom SET Monday_Solid = ?, Tuesday_Solid = ?, Wednesday_Solid = ?, Thursday_Solid = ?, Friday_Solid = ?, Saturday_Solid = ?, Sunday_Solid = ?, Monday_Liquid = ?, Tuesday_Liquid = ?, Wednesday_Liquid = ?, Thursday_Liquid = ?, Friday_Liquid = ?, Saturday_Liquid = ?, Sunday_Liquid = ? WHERE Baby = 'Test'",
    [
      mondaySValue,
      tuesdaySValue,
      wednesdaySValue,
      thursdaySValue,
      fridaySValue,
      saturdaySValue,
      sundaySValue,
      mondayLValue,
      tuesdayLValue,
      wednesdayLValue,
      thursdayLValue,
      fridayLValue,
      saturdayLValue,
      sundayLValue,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/addBaby", (req, res) => {
  const { name, age, height, weight } = req.body;
  addChild1 = { name, age, height, weight };
  console.log(name, age, height, weight);
});
app.get("/babyDetails", (req, res) => {
  res.send(addChild1);
});
app.post("/eating-bottle", (req, res) => {
  const date1Value = req.body.date1;
  const date2Value = req.body.date2;
  const date3Value = req.body.date3;
  const date4Value = req.body.date4;
  const date5Value = req.body.date5;
  const date6Value = req.body.date6;
  const date7Value = req.body.date7;
  const amount1Value = req.body.amount1;
  const amount2Value = req.body.amount2;
  const amount3Value = req.body.amount3;
  const amount4Value = req.body.amount4;
  const amount5Value = req.body.amount5;
  const amount6Value = req.body.amount6;
  const amount7Value = req.body.amount7;

  db.query(
    "UPDATE eating_bottle SET Date1 = ?, Amount1 = ?, Date2 = ?, Amount2 = ?, Date3 = ?, Amount3 = ?, Date4 = ?, Amount4 = ?, Date5 = ?, Amount5 = ?, Date6 = ?, Amount6 = ?, Date7 = ?, Amount7 = ? WHERE Baby = 'Test'",
    [
      date1Value,
      amount1Value,
      date2Value,
      amount2Value,
      date3Value,
      amount3Value,
      date4Value,
      amount4Value,
      date5Value,
      amount5Value,
      date6Value,
      amount6Value,
      date7Value,
      amount7Value,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/get-eating-bottle", (req, res) => {
  const baby = req.body.babyName;

  db.query(
    "SELECT * FROM eating_bottle WHERE Baby = ?",
    [baby],
    (err, result) => {
      console.log(result);
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "No prior log entries!" });
      }
    }
  );
});

app.post("/eating-breast", (req, res) => {
  const date1Value = req.body.date1;
  const date2Value = req.body.date2;
  const date3Value = req.body.date3;
  const date4Value = req.body.date4;
  const date5Value = req.body.date5;
  const date6Value = req.body.date6;
  const date7Value = req.body.date7;
  const time1Value = req.body.time1;
  const time2Value = req.body.time2;
  const time3Value = req.body.time3;
  const time4Value = req.body.time4;
  const time5Value = req.body.time5;
  const time6Value = req.body.time6;
  const time7Value = req.body.time7;

  db.query(
    "UPDATE eating_breast SET Date1 = ?, Time1 = ?, Date2 = ?, Time2 = ?, Date3 = ?, Time3 = ?, Date4 = ?, Time4 = ?, Date5 = ?, Time5 = ?, Date6 = ?, Time6 = ?, Date7 = ?, Time7 = ? WHERE Baby = 'Test'",
    [
      date1Value,
      time1Value,
      date2Value,
      time2Value,
      date3Value,
      time3Value,
      date4Value,
      time4Value,
      date5Value,
      time5Value,
      date6Value,
      time6Value,
      date7Value,
      time7Value,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/get-eating-breast", (req, res) => {
  const baby = req.body.babyName;

  db.query(
    "SELECT * FROM eating_breast WHERE Baby = ?",
    [baby],
    (err, result) => {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "No prior log entries!" });
      }
    }
  );
});

app.post("/sleeping", (req, res) => {
  const day = req.body.daySet;
  const hours = req.body.sleepSet;
  const comments = req.body.commentSet;

  db.query(
    "INSERT INTO sleeping (Baby, Day, Hours, Comment) VALUES ('Test', ?, ?, ?)",
    [day, hours, comments],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);

  if (username && password) {
    db.query(
      "SELECT * FROM credentials WHERE username = ?",
      [username],
      async (err, results) => {
        console.log(results);
        if (results.length === 0) {
          res.status(400).json({ message: "Username can't be found" });
        } else {
          const passwordChecker = await bcrypt.compare(
            password,
            results[0].password
          );
          console.log(passwordChecker);
          if (passwordChecker) {
            if (results) {
              res.send(username);
            }
          } else {
            res
              .status(400)
              .send({ message: "Wrong username/password combination" });
          }
        }
      }
    );
  } else {
    return res.status(400).send("Come on fill in the damn form");
  }
});

app.listen(5000, () => {
  console.log("running on port 5000");
});