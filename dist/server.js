"use strict";

const express = require('express');

const app = express();
const path = '/';
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  console.log('here');
  res.render('index', {
    text: 'world'
  });
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);
app.listen(3000);