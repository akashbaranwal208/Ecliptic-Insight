import { useParams } from "react-router-dom";
import blogImage from "../assets/images/hero.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const blogData = {
  "bookkeeping-vs-accounting": {
    title: "Bookkeeping vs Accounting: Key Differences Explained",
    image: blogImage,
    content: [
      {
        type: "paragraph",
        text: "When managing finances, many people confuse bookkeeping and accounting. While both are essential, they serve different purposes.",
      },
      {
        type: "heading",
        text: "What is Bookkeeping?",
      },
      {
        type: "paragraph",
        text: "Bookkeeping involves recording daily financial transactions such as sales, purchases, and receipts.",
      },
      {
        type: "heading",
        text: "What is Accounting?",
      },
      {
        type: "paragraph",
        text: "Accounting focuses on analyzing, interpreting, and summarizing financial data to make informed decisions.",
      },
      {
        type: "heading",
        text: "Key Differences",
      },
      {
        type: "paragraph",
        text: "Bookkeeping is transactional, while accounting is analytical. Both work together to ensure financial accuracy.",
      },
    ],
  },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData[slug];

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // 🔥 FETCH COMMENTS
  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/comments/${slug}`
      );
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [slug]);

  // 🔥 ADD COMMENT
  const handleComment = async () => {
    const token = localStorage.getItem("token");

    // ❌ NOT LOGGED IN
    if (!token) {
      alert("Please login to post a comment");
      window.location.href = "/login";
      return;
    }

    if (!newComment.trim()) return;

    try {
      await axios.post(
        "http://localhost:5000/api/comments",
        {
          blogSlug: slug,
          comment: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNewComment("");
      fetchComments();

    } catch (err) {
      console.log(err);
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE]">

      {/* HERO */}
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0F172A] max-w-3xl mx-auto">
          {blog.title}
        </h1>
      </section>

      {/* IMAGE */}
      <div className="max-w-[900px] mx-auto px-6 mb-10">
        <img
          src={blog.image}
          alt="blog"
          className="w-full h-[350px] object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* CONTENT */}
      <section className="max-w-[800px] mx-auto px-6 pb-16 space-y-6">
        {blog.content.map((item, index) => {
          if (item.type === "heading") {
            return (
              <h2
                key={index}
                className="text-2xl font-semibold text-[#0F172A]"
              >
                {item.text}
              </h2>
            );
          }

          return (
            <p key={index} className="text-[#475569] leading-relaxed">
              {item.text}
            </p>
          );
        })}
      </section>

      {/* 🔥 COMMENTS SECTION */}
      <section className="max-w-[800px] mx-auto px-6 pb-20">

        <h2 className="text-2xl font-semibold text-[#0F172A] mb-6">
          Comments
        </h2>

        {/* ✅ ALWAYS SHOW COMMENT BOX */}
        <div className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="w-full p-4 border border-gray-200 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />

          <button
            onClick={handleComment}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Post Comment
          </button>
        </div>

        {/* COMMENTS LIST */}
        <div className="space-y-4">
          {comments.length === 0 && (
            <p className="text-sm text-gray-400">No comments yet</p>
          )}

          {comments.map((c) => (
            <div
              key={c._id}
              className="p-4 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <p className="font-semibold text-[#0F172A]">
                {c.userName}
              </p>
              <p className="text-sm text-[#475569] mt-1">
                {c.comment}
              </p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default BlogDetail;