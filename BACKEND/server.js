"use static";

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

dbProperties = {
  user: "root",
  host: "localhost",
  password: "",
  database: "db_teste",
};

const db = mysql.createConnection(dbProperties);

// Testing connection
app.get("/", (re, res) => {
  return res.json("Hello World! Connection to the backend is sucessful");
});

// Query to get everything from "usuarios"
app.get("/users", (req, res) => {
  const query = "SELECT * FROM usuarios";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Post method to insert a new usr in "usuarios"
app.post("/insertUser", (req, res) => {
  // Defining values to be inserted
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  // Query
  const query = `INSERT INTO usuarios (nome_usuario, email_usuario, senha_usuario) VALUES (?,?,?)`;

  db.query(query, [name, email, password], (err, result) => {
    if (err) return res.status.send("Database error");
    res.send("Values Sent");
  });
});

// Checking port connection
app.listen(8081, () => {
  console.log("Listening");
});
