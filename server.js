const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(
  cors({
  origin: ["https://netflix-clone-frontend-kz6z.onrender.com/"],
  methods:["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());

mongoose.connect("mongodb+srv://Anshir:otjvkvV7BhABrd12@cluster0.t2b85ds.mongodb.net/?retryWrites=true", {
  dbName:"netflix",
}).then(() => {
  console.log("DB Connected Successfully");
}).catch((err) => {
  console.log(err.message);
});

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started"));