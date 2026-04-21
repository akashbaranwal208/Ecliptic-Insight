import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import blog1 from "../assets/images/hero.jpg";

const blogs = [
  {
    slug: "bookkeeping-vs-accounting",
    title: "Bookkeeping vs Accounting: Key Differences Explained",
    description:
      "Understand the key differences between bookkeeping and accounting, and how each plays a role in business success.",
    image: blog1,
    date: "July 2025",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE]">

      {/* HERO */}
      <section className="pt-28 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0F172A] mb-4">
          Insights & Blogs
        </h1>

        <p className="text-[#475569] max-w-xl mx-auto">
          Explore expert insights, industry trends, and knowledge to help your business grow.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-[1100px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">

          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="cursor-pointer rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl transition"
              onClick={() => navigate(`/blog/${blog.slug}`)}
            >

              {/* IMAGE */}
              <div className="h-[220px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-3">
                <p className="text-sm text-blue-600">{blog.date}</p>

                <h2 className="text-xl font-semibold text-[#0F172A]">
                  {blog.title}
                </h2>

                <p className="text-[#475569] text-sm leading-relaxed">
                  {blog.description}
                </p>

                <span className="text-blue-600 text-sm font-medium">
                  Read More →
                </span>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Blog;