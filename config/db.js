const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI; // Simpan URI di .env
const client = new MongoClient(uri);

let db;

const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB connected!");
    db = client.db("mongoTest");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };
