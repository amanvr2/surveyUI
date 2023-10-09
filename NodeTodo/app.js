const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const blogRoutes = require("./routes/blogRoutes");
const path = require("path");
const blogController = require("./controllers/blogController");

const app = express();

// DB URI
const dbURI =
  "mongodb+srv://amanvr2:1234@blogsite.b8appnh.mongodb.net/blogDatabase?retryWrites=true&w=majority";

// connection to MongoDB
mongoose.connect(dbURI).then(() => {
  app.listen(3000, () => {
    console.log("server running and Db connected");
  });
});

// register view engine
app.set("view engine", "ejs");

// for getting post data
app.use(express.urlencoded({ extended: true }));

app.use(blogRoutes);
app.use(blogController.errorPage);
