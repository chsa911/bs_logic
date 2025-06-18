const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
   BMark: String,
   BBreite: Number
   }
);
module.exports = mongoose.model('books', BookSchema);