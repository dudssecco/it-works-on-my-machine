require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configurações do banco de dados
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error: ', err);
    return;
  }
  console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.json("API Running")
})

// Rota para exibir a lista
app.get('/itens', (req, res) => {
  connection.query('SELECT * FROM itens', (err, results) => {
    if (err) {
      res.status(500).json('Error querying the database.');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
