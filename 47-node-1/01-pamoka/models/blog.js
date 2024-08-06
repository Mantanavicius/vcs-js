const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema - dokumento struktūra
const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    santrauka: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

// modelis - sukuria interface ryšiui su DB rinkiniu
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
