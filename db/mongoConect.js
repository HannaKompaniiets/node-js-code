const mongoose = require("mongoose");
const { DB_URL } = process.env;

async function dbConnect() {
 
  await mongoose.connect(DB_URL);
}

module.exports = dbConnect;
