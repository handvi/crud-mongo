require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const connectMongoose = require("./config/mongoose");

const authRoutes = require("./routes/authRoutes");
const userRoutesV1 = require("./routes/userRoutesV1");
const userRoutesV2 = require("./routes/userRoutesV2");

const app = express();
app.use(express.json());


app.use("/api/v1/users", userRoutesV1);
app.use("/api/v2/users", userRoutesV2);

connectDB().then(() => {
  connectMongoose();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
