require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const authRoute = require("./routes/auth");
const booksRoute = require("./routes/books");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

app.use(cors());
app.use(express.json());

//Route middleware
app.use("/api/user", authRoute);
app.use("/api/books", booksRoute);

app.listen(process.env.PORT || 80, () => console.log("Server started"));
