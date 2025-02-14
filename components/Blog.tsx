"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt: "Explore cutting-edge strategies to boost your React application's performance and user experience.",
    date: "May 15, 2023",
    link: "/blog/optimizing-react-performance",
    category: "React",
    image: "/blog-react-performance.jpg",
  },
  {
    title: "Building Scalable Microservices with Node.js",
    excerpt: "A comprehensive guide to designing and implementing robust microservices architecture using Node.js.",
    date: "April 2, 2023",
    link: "/blog/scalable-microservices-nodejs",
    category: "Backend",
    image: "/blog-microservices.jpg",
  },
  {
    title: "Leveraging AI in Modern Web Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing web development and how you can integrate AI into your projects.",
    date: "March 10, 2023",
    link: "/blog/ai-in-web-development",
    category: "AI",
    image: "/blog-ai-web-dev.jpg",
  },
  {
    title: "The Future of Web3: Trends and Predictions",
    excerpt:
      "An in-depth look at the emerging trends in Web3 technology and what they mean for the future of the internet.",
    date: "February 22, 2023",
    link: "/blog/future-of-web3",
    category: "Blockchain",
    image: "/blog-web3-future.jpg",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Latest from the Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  <Link href={post.link}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <Link
                    href={post.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-block"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

