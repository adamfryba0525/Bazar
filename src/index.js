import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import authRoutes from "./routes/authRoutes.js";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const client = new MongoClient(process.env.MONGO_URI);
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"))
app.use(express.json());
app.use(authRoutes);

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