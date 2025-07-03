import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: "AeroX: Revolutionizing the Airport Experience with an All-in-One Digital Management System",
      excerpt: "Discover how AeroX transforms airport operations and passenger journeys with a seamless, digital-first platform for real-time services.",
      image: "https://i.pinimg.com/736x/fc/62/ff/fc62ffc7ad012698a250090a0d49dff8.jpg",
      date: "July 3rd 2025",
      readTime: "3 min read",
      category: "Airport Tech",
      url: "https://wolfjournals.hashnode.dev/aerox-revolutionizing-the-airport-experience-with-an-all-in-one-digital-management-system"
    }
  ];

  return (
    <motion.section
      id="blog"
      className="section-padding system-gradient soft-shadow animate-fade-in-up"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl modern-title mb-6 animate-fade-in-up">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card
                className="bg-dark-blue-50/50 backdrop-blur-sm border-dark-blue-300/20 overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer soft-shadow"
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
                
                <CardContent className="p-6">
                  <h3 className="text-xl modern-title mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-xs mb-4 space-x-4">
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
