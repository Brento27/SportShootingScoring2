require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

app.use(express.json());

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});

// const routes = require('./Routes/routes');

// app.use('/api', routes);
