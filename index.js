const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');


const app = express();

var transport = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "il.vsl0110@gmail.com",
    pass: "Ilvas2006"
  }
})

app.use(express.static(path.join(__dirname, "express")));
app.use(express.urlencoded({
  extended: true
}))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "express/a.html"));
})

app.post("/submit", (req, res) => {
  transport.sendMail({
    "from": "il.vsl0110@gmail.com",
    "to": "gladio.dev@mail.ru",
    "text": `content: ${req.body.description}, name: ${req.body.name}, e-mail: ${req.body.email}`
  })
  res.sendFile(path.join(__dirname, "express/a.html"));
})

app.listen(3000);