const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')
const port = process.env.PORT || 5000;
const app = express();
const { errorHandler } = require('./middleware/errorMiddleWare');
const connectDB = require('./config/db')

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`server is run on port ${port}`))




//http://localhost:5000/api/goals