const express = require("express");
const bodyParser = require("body-parser");
var pg = require("pg");
var app = express();

var config = {
  user: "postgres",
  database: "DealerInfo",

  port: 5432
};

var pool = new pg.Pool(config);

app.get("/getData", (req, res) => {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("not able to get connection " + err);
      res.status(400).send(err);
    }
    client.query(
      "CREATE TABLE IF NOT EXISTS dealer(id SERIAL PRIMARY KEY,dealerid int, vehicleid text )",
      function(err, result) {
        done();
        if (err) {
          console.log(err);
        } else {
        }
      }
    );
    client.query("SELECT * FROM dealer", function(err, result) {
      done();
      if (err) {
        console.log(err);
        res.status(400).send({ message: "Unable to get Data" });
      }
      res.status(200).send({ reslt: result["rows"] });
    });
  });
});

app.post("/postData", bodyParser.json(), (req, res) => {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("not able to get connection " + err);
      res.status(400).send(err);
    }
    client.query(
      "CREATE TABLE IF NOT EXISTS dealer(id SERIAL PRIMARY KEY,dealerid int, vehicleid text )",
      function(err, result) {
        done();
        if (err) {
          console.log(err);
        }
      }
    );
    const driverId = req.body["driverId"];
    const vehicleId = req.body["vehicleId"];
    client.query(
      "INSERT INTO dealer VALUES(DEFAULT,'" +
        driverId +
        "','" +
        vehicleId +
        "')",
      function(err, result) {
        done();
        if (err) {
          console.log(err);
          res.status(400).send({ message: "Insertion Failed" });
        }
        res.status(200).send({ message: "Data Added Successfully!" });
      }
    );
  });
});
app.listen(3000, () => console.log("App listening on port 3000!"));
