"use static";

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

dbProperties = {
  host: "localhost",
  user: "root",
  password: "",
  database: "db_teste",
};

const db = mysql.createConnection(dbProperties);

app.get("/", (re, res) => {
  return res.json("Hello World! Connection to the backend is sucessful");
});

app.get("/usuarios", (req, res) => {
  const query = "SELECT * FROM usuarios";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening");
});
