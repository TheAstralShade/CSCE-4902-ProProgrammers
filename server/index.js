const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bcrypt = require("bcryptjs");


app.use(express.json());
app.use(cors());

let addChild1 = {
    name: "",
    age: 0,
    height: "",
    weight: "",
  };

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'AstralSays1132000',
    database: 'babytrackerdb',
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
              return res.send({ message: "Welcome to the baby tracker" });
            }
          }
        );
      } else {
        return "No username and password was sent";
      }
  }

    db.query(
      "INSERT INTO restroom (Total, username) VALUES ('0',?)",
      [username],
      (err, result) => {
        if(err) {
          console.log(err)
        }
      }
    );

    db.query(
      "INSERT INTO eating_bottle (Total, username) VALUES ('0',?)",
      [username],
      (err, result) => {
        if(err) {
          console.log(err)
        }
      }
    );

    db.query(
      "INSERT INTO eating_breast (Total, username) VALUES ('0',?)",
      [username],
      (err, result) => {
        if(err) {
          console.log(err)
        }
      }
    );

    db.query(
      "INSERT INTO sleeping (Hours, username) VALUES ('0',?)",
      [username],
      (err, result) => {
        if(err) {
          console.log(err)
        }
      }
    );

    db.query(
      "INSERT INTO babyinfo (Name, Age, Height, Weight, username) VALUES ('N/A','0','N/A','N/A',?)",
      [username],
      (err, result) => {
        if(err) {
          console.log(err)
        }
      }
    );
  });

app.post('/get-bathroom', (req, res)=> {
    const username = req.body.user;

    db.query("SELECT * FROM restroom WHERE username = ?",
    [username],
    (err, result) => {
        if (result.length > 0) {
            res.send(result)
        }
        else {
            res.send({message: "No prior log entries!"})
        }
    });
})

app.post('/bathroom', (req, res)=> {

    const mondaySValue = req.body.mondaySolidSet;
    const tuesdaySValue = req.body.tuesdaySolidSet;
    const wednesdaySValue = req.body.wednesdaySolidSet;
    const thursdaySValue = req.body.thursdaySolidSet;
    const fridaySValue = req.body.fridaySolidSet;
    const saturdaySValue = req.body.saturdaySolidSet;
    const sundaySValue = req.body.sundaySolidSet;
    const mondayLValue = req.body.mondayLiquidSet;
    const tuesdayLValue = req.body.tuesdayLiquidSet;
    const wednesdayLValue = req.body.wednesdayLiquidSet;
    const thursdayLValue = req.body.thursdayLiquidSet;
    const fridayLValue = req.body.fridayLiquidSet;
    const saturdayLValue = req.body.saturdayLiquidSet;
    const sundayLValue = req.body.sundayLiquidSet;
    const totalValue = req.body.totalSet;
    const currentUser = req.body.user;
    //console.log(value)

    db.query("UPDATE restroom SET Monday_Solid = ?, Tuesday_Solid = ?, Wednesday_Solid = ?, Thursday_Solid = ?, Friday_Solid = ?, Saturday_Solid = ?, Sunday_Solid = ?, Monday_Liquid = ?, Tuesday_Liquid = ?, Wednesday_Liquid = ?, Thursday_Liquid = ?, Friday_Liquid = ?, Saturday_Liquid = ?, Sunday_Liquid = ?, Total = ? WHERE username = ?", 
    [mondaySValue, tuesdaySValue, wednesdaySValue, thursdaySValue, fridaySValue, saturdaySValue, sundaySValue, mondayLValue, tuesdayLValue, wednesdayLValue, thursdayLValue, fridayLValue, saturdayLValue, sundayLValue, totalValue, currentUser], 
    (err, result) => {
        console.log(err);
    });
});

app.post("/addBaby", (req, res) => {
    const { name, age, height, weight } = req.body;
    const username = req.body.user;

    db.query("UPDATE babyinfo SET Name = ?, Age = ?, Height = ?, Weight = ? WHERE username = ?",
    [name, age, height, weight,username],
    (err, result) =>{
      console.log(err);
    });
    //addChild1 = { name, age, height, weight };
    //console.log(name, age, height, weight);
  });
  app.post("/babyDetails", (req, res) => {
    const username = req.body.user
    //console.log(username)
    db.query("SELECT * FROM babyinfo WHERE username = ?",
    [username],
    (err, result) => {
      if(result.length > 0) {
        //addChild1.name = result[0];
        //addChild1.age = result[1];
        //addChild1.height = result[2];
        //addChild1.weight = result[3];
        //console.log("Test")
        res.send(result);
      }
      else {
        console.log(err);
      }
    });
  });

app.post('/eating-bottle', (req, res)=> {
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
    const totalValue = req.body.total;
    const username = req.body.user;

    db.query("UPDATE eating_bottle SET Date1 = ?, Amount1 = ?, Date2 = ?, Amount2 = ?, Date3 = ?, Amount3 = ?, Date4 = ?, Amount4 = ?, Date5 = ?, Amount5 = ?, Date6 = ?, Amount6 = ?, Date7 = ?, Amount7 = ?, Total = ? WHERE username = ?",
    [date1Value, amount1Value, date2Value, amount2Value, date3Value, amount3Value, date4Value, amount4Value, date5Value, amount5Value, date6Value, amount6Value, date7Value, amount7Value, totalValue, username],
    (err, result)=> {
        console.log(err);
    });
})

app.post('/get-eating-bottle', (req, res)=> {
    const username = req.body.user;

    db.query("SELECT * FROM eating_bottle WHERE username = ?",
    [username],
    (err, result) => {
        if (result.length > 0) {
            res.send(result)
        }
        else {
            res.send({message: "No prior log entries!"})
        }
    });
})

app.post('/eating-breast', (req, res)=> {
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
    const totalValue = req.body.total;
    const username = req.body.user;

    db.query("UPDATE eating_breast SET Date1 = ?, Time1 = ?, Date2 = ?, Time2 = ?, Date3 = ?, Time3 = ?, Date4 = ?, Time4 = ?, Date5 = ?, Time5 = ?, Date6 = ?, Time6 = ?, Date7 = ?, Time7 = ?, Total = ? WHERE username = ?",
    [date1Value, time1Value, date2Value, time2Value, date3Value, time3Value, date4Value, time4Value, date5Value, time5Value, date6Value, time6Value, date7Value, time7Value, totalValue, username],
    (err, result)=> {
        console.log(err);
    });
})

app.post('/get-eating-breast', (req, res)=> {
    const username = req.body.user;

    db.query("SELECT * FROM eating_breast WHERE username = ?",
    [username],
    (err, result) => {
        if (result.length > 0) {
            res.send(result)
        }
        else {
            res.send({message: "No prior log entries!"})
        }
    });
})

app.post('/sleeping', (req, res)=> {
    const day = req.body.daySet;
    const hours = req.body.sleepSet;
    const comments = req.body.commentSet;
    const username = req.body.user;

    db.query("UPDATE sleeping SET Day = ?, Hours = ?, Comment = ? WHERE username = ?",
    [day, hours, comments, username],
    (err, result) => {
        console.log(err);
    });
})

app.post('/get-total', (req, res) => {
    const username = req.body.user;

    db.query("SELECT Total FROM eating_bottle WHERE username = ? UNION ALL SELECT Total FROM eating_breast WHERE username = ? UNION ALL SELECT Total FROM restroom WHERE username = ? UNION ALL SELECT Hours FROM sleeping WHERE username = ?",
    [username, username, username, username],
    (err, result) => {
        res.send(result);
    });
})

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

app.post('/importantEntries',(req,res) => {
    let items=req.body.tmp;
    let comments=req.body.comments;
    let username=req.body.user;
    
    db.query("INSERT INTO markedentry (entry, quantity, day, comment, username) VALUES (?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?)",
    ["Restroom",items[0][1]+items[0][2], items[0][0], comments, username,
    "Restroom",items[1][1]+items[1][2], items[1][0], comments, username,
    "Restroom",items[2][1]+items[2][2], items[2][0], comments, username,
    "Restroom",items[3][1]+items[3][2], items[3][0], comments, username,
    "Restroom",items[4][1]+items[4][2], items[4][0], comments, username,
    "Restroom",items[5][1]+items[5][2], items[5][0], comments, username,
    "Restroom",items[6][1]+items[6][2], items[6][0], comments, username ],
    (err, result) => {
        console.log(err);
    });

    db.query("DELETE FROM markedentry WHERE day IS NULL",(err, result) => {
        console.log(err);
    });
})

app.post('/importantEntriesEating',(req,res) => {
    const important1 = req.body.temp1;
    const important2 = req.body.temp2;
    const important3 = req.body.temp3;
    const important4 = req.body.temp4;
    const important5 = req.body.temp5;
    const important6 = req.body.temp6;
    const important7 = req.body.temp7;
    const important8 = req.body.temp8;
    const important9 = req.body.temp9;
    const important10 = req.body.temp10;
    const important11 = req.body.temp11;
    const important12 = req.body.temp12;
    const important13 = req.body.temp13;
    const important14 = req.body.temp14;
    const important15 = req.body.temp15;
    const username = req.body.user;
    
    db.query("INSERT INTO markedentry (entry, quantity, day, comment, username) VALUES (?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?)",
    ["Eating",important8, important1, important15, username,
    "Eating",important9, important2, important15, username,
    "Eating",important10, important3, important15, username,
    "Eating",important11, important4, important15, username,
    "Eating",important12, important5, important15, username,
    "Eating",important13, important6, important15, username,
    "Eating",important14, important7, important15, username],
    (err, result) => {
        console.log(err);
    });

    db.query("DELETE FROM markedentry WHERE day IS NULL",(err, result) => {
        console.log(err);
    });
})

app.post('/importantEntriesSleeping',(req,res) => {
    const important1 = req.body.temp1;
    const important2 = req.body.temp2;
    const important3 = req.body.temp3;
    const username = req.body.user;
    
    db.query("INSERT INTO markedentry (entry, quantity, day, comment, username) VALUES (?,?,?,?,?)",
    ["Sleeping",important2, important1, important3, username],
    (err, result) => {
        console.log(err);
    });

    db.query("DELETE FROM markedentry WHERE comment IS NULL",(err, result) => {
        console.log(err);
    });
})

app.post('/get-importantEntries', (req, res)=> {
    const username = req.body.user

    db.query("SELECT * FROM markedentry WHERE username = ?",
    [username],
    (err, result) => {
        if (result.length > 0) {
            res.send(result)
        }
        else {
            res.send({message: "No marked entries!"})
        }
    });
})

app.post('/remove-importantEntry', (req, res)=> {
    let entryId = req.body;
    console.log('This is the entry id: ' + entryId.id);
    db.query("DELETE FROM markedentry WHERE id=?",[entryId.id],(err,result) => {
        console.log(err);
    });
})

app.post('/appointments', (req, res)=> {
    const date = req.body.dateSet;
    const time = req.body.timeSet;
    const doctor = req.body.doctorSet;
    const location = req.body.locationSet;

    db.query("INSERT INTO appointments (baby, date, time, doctor, location) VALUES ('TKM',? , ?, ?, ?)",
    [date, time, doctor, location],
    (err, result) => {
        console.log(err);
    });
})

app.listen(5000, () => {
    console.log('running on port 5000');
});