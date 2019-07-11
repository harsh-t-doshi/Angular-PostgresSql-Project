const pg = require("pg");

const config = {
  user: "", //this is the db user credential
  database: "moxiData",
  password: "test123",
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to the Database");
});

const createTables = () => {
  const dealerInfo = `CREATE TABLE IF NOT EXISTS
      dealerInfo(
        id SERIAL PRIMARY KEY,
        driverId VARCHAR(128),
        vehicleId VARCHAR(128)
      )`;
  pool
    .query(dealerInfo)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

pool.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

//export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool
};

require("make-runnable");
