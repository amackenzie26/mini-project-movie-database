const express = require("express");

//make sure you require path lol
const path = require('path');

const mysql = require("mysql");
var app = express();
var PORT = 3006;


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'movies_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );
//Routes
  app.get('/api/movies', (req, res) => {
      console.log('great success');
  });
//Root route
  app.get('/', (req, res) => {
      console.log('welcome!')
  });
//Queries go inside above routes

app.post('/api/movies', (req, res) => {
    console.log('this was posted')
});

