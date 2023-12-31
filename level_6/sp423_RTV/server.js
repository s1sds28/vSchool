const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const { expressjwt } = require('express-jwt');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
  'mongodb+srv://s1sds28:M16Xi7AwoG129ZU9@cluster0.um1fant.mongodb.net/',
  () => console.log('Connected to the DB')
);


app.use('/auth', require('./routes/authRouter.jsx'));
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })); // req.auth
app.use('/api/issue', require('./routes/issueRouter.jsx'))
app.use('/api/comment', require('./routes/commentRouter.jsx'))

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`);
});