const Blog = require("../Models/Blog");
const path = require("path");

const getBlogs = (req, res) => {
  Blog.find()
    .then((result) => {
      //res.send(result);
      res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => console.log(err));
};

const createBlog = (req, res) => {
  res.render("createBlog", { title: "Create Blog" });
};

const addBlog = (req, res) => {
  const blog = new Blog(req.body);
  blog.save().then((result) => {
    res.redirect("/");
  });
};

const editBlog = (req, res) => {
  const id = req.params.id;
  Blog.findById(id).then((result) => {
    res.render("editBlog", { title: "Edit Blog", blog: result });
  });
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Blog.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBlog = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const options = { new: true };

  Blog.findByIdAndUpdate(id, data, options).then((result) => {
    res.redirect("/");
  });
};

const errorPage = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../", "views", "test.html"));
};

module.exports = {
  getBlogs,
  createBlog,
  addBlog,
  editBlog,
  deleteBlog,
  updateBlog,
  errorPage,
};
