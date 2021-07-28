require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// connecting to MongoDb
mongoose
  .connect(process.env.MONGO_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Conneced to Mongodb');
  })
  .catch((err) => console.error(err.message));

app.listen(PORT, console.log(`server is running on port ${PORT}`));
