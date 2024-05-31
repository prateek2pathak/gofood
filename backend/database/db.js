const mongoose = require("mongoose");
const databaseUrl = "mongodb+srv://prateekpathak042:prateek2004@cluster0.iiynm78.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Failed to connect to Database");
  }
  const data = await mongoose.connection.db.collection("food_items");
  const data2= await mongoose.connection.db.collection('category');

  const cursor = data.find();
  const cursor2= data2.find();

  const allValues = await cursor.toArray();
  const category = await cursor2.toArray();

  global.food_items=allValues;
  global.category=category;
  
};

module.exports = connectToDB;
