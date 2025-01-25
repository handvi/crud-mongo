const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;
let client;
let db;

const connectDB = async () => {
  if (db) return db; 

  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log("MongoDB connected!");
    db = client.db("mongoTest"); 
    return db;
  } catch (err) {
    console.error("Database connection error:", err.message);
    throw new Error("Database connection failed");
  }
};

module.exports = { connectDB };
