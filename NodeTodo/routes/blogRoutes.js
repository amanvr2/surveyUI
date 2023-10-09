const express = require("express");
const router = express.Router();
const Blog = require("../Models/Blog");
const blogController = require("../controllers/blogController");
const path = require("path");

router.get("/", blogController.getBlogs);

router.get("/add-blog", blogController.createBlog);

router.post("/add-blog", blogController.addBlog);

router.get("/edit-blog/:id", blogController.editBlog);

router.get("/delete-blog/:id", blogController.deleteBlog);

router.post("/update-blog/:id", blogController.updateBlog);

module.exports = router;
