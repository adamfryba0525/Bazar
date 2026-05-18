import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const client = new MongoClient(process.env.MONGO_URI);
const app = express();

app.use(express.json());

console.log(process.env.MONGO_URI);
client.connect().then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});