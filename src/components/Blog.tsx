import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: "SOLID Principles Explained with Complete Java Examples (Violations + Refactoring)",
      excerpt: "Mastering SOLID principles is essential for writing clean, maintainable, and scalable Java code. Explore practical examples of design violations and refactoring techniques to level up your software architecture.",
      image: "/images/solid.png",
      date: "Jan 26, 2026",
      readTime: "5 min read",
      category: "Concepts",
      url: "https://medium.com/@rusirud49/solid-principles-explained-with-complete-java-examples-violations-refactoring-c634662dda49"
    },
    {
      title: "Password Hashing Explained: How to Secure Passwords with bcrypt in Node.js",
      excerpt: "Passwords are the first line of defense. Learn why hashing matters and how to securely implement bcrypt in Node.js...",
      image: "/images/password hashing.jpg",
      date: "Jan 19, 2026",
      readTime: "4 min read",
      category: "Security",
      url: "https://medium.com/@rusirud49/password-hashing-explained-how-to-secure-passwords-with-bcrypt-in-node-js-7ac49d2c41d9"
    },
    {
      title: "Understanding Kubernetes Architecture",
      excerpt: "Don't just run kubectl commands. Understand the internal architecture of Kubernetes to build production-grade cloud-native systems...",
      image: "/images/kubernetes.jpg",
      date: "Jan 13, 2026",
      readTime: "4 min read",
      category: "DevOps",
      url: "https://medium.com/@rusirud49/understanding-kubernetes-architecture-8bf1cf7de407"
    },
    {
      title: "JSON Web Tokens (JWT): Enhancing Security in Modern Web Authentication",
      excerpt: "Authentication is about securely proving identity. Explore how JSON Web Tokens (JWT) standardize this across distributed systems...",
      image: "/images/jwt.jpg",
      date: "Jan 11, 2026",
      readTime: "4 min read",
      category: "Security",
      url: "https://medium.com/@rusirud49/json-web-tokens-jwt-enhancing-security-in-modern-web-authentication-4f8e8763f87d"
    },
    {
      title: "Unlocking Identity-First Security with WSO2 Asgardeo",
      excerpt: "Digital identity is the foundation of trust. WSO2 Asgardeo offers a cloud-native IDaaS for easy and powerful identity management...",
      image: "/images/asgardeo.png",
      date: "Jan 9, 2026",
      readTime: "3 min read",
      category: "Identity",
      url: "https://medium.com/@rusirud49/unlocking-identity-first-security-with-wso2-asgardeo-e3d649d37dec"
    },
    {
      title: "AeroX: Revolutionizing the Airport Experience with an All-in-One Digital Management System",
      excerpt: "Discover how AeroX transforms airport operations and passenger journeys with a seamless, digital-first platform for real-time services...",
      image: "/images/plane.jpg",
      date: "Jan 8, 2026",
      readTime: "3 min read",
      category: "Airport Tech",
      url: "https://medium.com/@rusirud49/aerox-revolutionizing-the-airport-experience-with-an-all-in-one-digital-management-system-831d148873f0"
    }
  ];

  return (
    <motion.section
      id="blog"
      className="section-padding system-gradient soft-shadow animate-fade-in-up pt-24 pb-12 relative z-[2]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl modern-title mb-4 md:mb-6 leading-normal animate-fade-in-up relative z-20 inline-block pb-1">
            Latest Blog Posts
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Sharing insights, tutorials, and thoughts on web development,
            technology trends, and programming best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card
                className="bg-dark-blue-50/50 backdrop-blur-sm border-dark-blue-300/20 overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer soft-shadow h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-blue-600/90 text-blue-100 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl modern-title mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-gray-400 text-xs mb-4 space-x-4 mt-auto">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
