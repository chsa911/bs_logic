const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/getBMark', (req, res) =>{
        BookModel.find()
        .then
}



const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));