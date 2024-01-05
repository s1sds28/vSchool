const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const { expressjwt } = require('express-jwt');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
  'mongodb+srv://s1sds28:K1paknXLAxVr52zA@cluster0.9giehtw.mongodb.net/',
  () => console.log('Connected to the DB')
);


app.use('/auth', require('./routes/authRouter.jsx'));
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })); // req.auth
app.use('/api/account', require('./routes/accountRouter.jsx'))
app.use('/api/bill', require('./routes/billRouter.jsx'))

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