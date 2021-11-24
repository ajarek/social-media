const router = require("express").Router()
const Post = require("../models/Post")


router.get("/posts/:name", async (req, res) => {
  const {
    name
  } = req.params
  try {
    const post = await Post.find({
      name: name
    });
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err)
  }
})


router.post("/posts", async (req, res) => {
  const {
    name,
    desc,
    img,
    likes
  } = req.body
  const newPost = new Post({
    name,
    desc,
    img,
    likes
  })
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router