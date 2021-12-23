'use strict';

const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"))

// sets the views directories to be the views
app.set("views", "./views");
app.set("view engine", "ejs")

const NODE_PORT = 8000;

app.get('/', (req, res) => {
  res.render("index");
});

app.get('/about', (req, res) => {
  res.render("about");
});

app.get('/resume', (req, res) => {
  res.render("resume");
});

app.get('/contact', (req, res) => {
  res.render("contact");
});


const PORT = process.env.port || NODE_PORT;
app.listen(PORT);