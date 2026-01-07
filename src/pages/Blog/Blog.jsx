import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiUser, FiCalendar } from "react-icons/fi";
import Feature1 from "../../images/feature.png";
import Feature2 from "../../images/feature2.png";
import Conference from "../../images/conference.png";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Virtual Conferences",
    excerpt:
      "Explore how virtual reality and AI are reshaping the landscape of global conferences and events.",
    date: "Jan 10, 2026",
    author: "Sarah Jenkins",
    image: Feature1,
    category: "Technology",
  },
  {
    id: 2,
    title: "Maximizing Attendee Engagement",
    excerpt:
      "Strategies and tools to keep your audience engaged and interactive during remote sessions.",
    date: "Jan 05, 2026",
    author: "Mike Ross",
    image: Feature2,
    category: "Guides",
  },
  {
    id: 3,
    title: "Hybrid Events: The Best of Both Worlds",
    excerpt:
      "Why hybrid events are becoming the standard and how you can implement them successfully.",
    date: "Dec 28, 2025",
    author: "Rachel Green",
    image: Conference,
    category: "Trends",
  },
    {
    id: 4,
    title: "Security in Digital Event Spaces",
    excerpt:
      "Ensuring your digital events are secure from cyber threats and unauthorized access.",
    date: "Dec 15, 2025",
    author: "David Kim",
    image: Feature1, // Reusing for demo
    category: "Security",
  },
  {
    id: 5,
    title: "Networking in a Virtual Age",
    excerpt:
      "Building meaningful connections without physical handshakes. Tips for virtual networking.",
    date: "Dec 02, 2025",
    author: "Emily Blunt",
    image: Conference, // Reusing for demo
    category: "Networking",
  },
  {
    id: 6,
    title: "Sustainable Events: Going Green Online",
    excerpt:
      "How moving events online contributes to a greener planet and reduces carbon footprints.",
    date: "Nov 20, 2025",
    author: "John Doe",
    image: Feature2, // Reusing for demo
    category: "Sustainability",
  },
];

const Blog = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-bg-darkest text-white pt-32 pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Insights & <span className="text-accent-darkest">Updates</span>
          </motion.h1>
          <motion.p
            className="text-bg-soft text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay ahead of the curve with our latest articles on event management,
            technology trends, and success stories.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-accent-darkest text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-bg-light mb-3 space-x-4">
                    <span className="flex items-center gap-1">
                      <FiUser /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-bg-darkest mb-3 leading-tight hover:text-accent-darkest transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-bg-mid mb-6 flex-1">{post.excerpt}</p>
                  <button className="flex items-center gap-2 text-accent-darkest font-semibold hover:text-accent-dark transition-colors self-start">
                    Read Article <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="border-2 border-bg-darkest text-bg-darkest hover:bg-bg-darkest hover:text-white font-medium px-8 py-3 rounded-md transition duration-300">
              Load More Posts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
