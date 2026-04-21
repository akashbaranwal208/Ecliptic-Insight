import Comment from "../models/Comment.js";

// ADD COMMENT
export const addComment = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const { blogSlug, comment } = req.body;

    const newComment = new Comment({
      blogSlug,
      userId: req.user.id,
      userName: req.user.name,
      comment,
    });

    console.log("NEW COMMENT OBJECT:", newComment);

    const saved = await newComment.save();

    console.log("SAVED COMMENT:", saved);

    res.status(201).json(saved);

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

// GET COMMENTS
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      blogSlug: req.params.slug,
    }).sort({ createdAt: -1 });

    res.json(comments);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};