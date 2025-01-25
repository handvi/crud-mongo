const { getDB } = require("../config/db");

exports.getUsers = async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection("users").find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, role } = req.body;

  try {
    const db = getDB();
    const result = await db.collection("users").updateOne(
      { _id: new MongoClient.ObjectId(id) },
      { $set: { username, role } }
    );

    res.json({ message: "User updated successfully", modifiedCount: result.modifiedCount });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const db = getDB();
    const result = await db.collection("users").deleteOne({ _id: new MongoClient.ObjectId(id) });
    res.json({ message: "User deleted successfully", deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
};
