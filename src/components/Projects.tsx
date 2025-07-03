import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, X, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from 'framer-motion';

const techLogos = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Stripe: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  Vuetify: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
  'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Chart.js': 'https://www.chartjs.org/media/logo-title.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Framer Motion': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
  Vercel: 'https://static.cdnlogo.com/logos/v/19/vercel.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  XML: 'https://www.svgrepo.com/show/31053/xml.svg',
  'Android Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
  Figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Microsoft Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Jupyter Notebook': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  NumPy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  NLTK: 'https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png',
  'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  Matplotlib: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
  Pickle: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAROS33UWDwBFxgf9hZhkrP_ShcvUkEqMMKcL5nI_yTjl4Zr4KpN_oANWgo6ZB3EI7zY&usqp=CAU',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'OpenCV (cv2)': 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg',
  'YOLOv4-Tiny': 'https://raw.githubusercontent.com/AlexeyAB/darknet/master/build/darknet/x64/data/yolo-logo.png',
  'Haar Cascade Classifiers': 'https://upload.wikimedia.org/wikipedia/commons/2/2d/OpenCV_logo_with_text.png',
};

const Projects = () => {
  const projects = [
    {
      title: "Airport Services Management Web Application",
      date: "April 2025 - May 2025",
      description: (
        <div className="space-y-4 text-gray-300">
          <p>
            As part of a five-member undergraduate development team, I served as a full-stack developer, leading the design and development of the flight booking, air taxi booking, and real-time flight status tracking components of the system.
          </p>
          <h5 className="font-bold text-md text-sky-400 pt-2">Key Features:</h5>
          <ul className="list-disc list-inside pl-4 space-y-1 text-gray-400">
            <li>Flight booking and air taxi booking</li>
            <li>Real-time flight status tracking</li>
            <li>Transport and vehicle management</li>
            <li>Airport restaurant pre-reservation and food/beverage pre-ordering</li>
            <li>Duty-free product pre-ordering</li>
            <li>Lost and found baggage management</li>
            <li>Currency converter and exchange rate lookup</li>
          </ul>
          <h5 className="font-bold text-md text-sky-400 pt-2">My Responsibilities:</h5>
          <ul className="list-disc list-inside pl-4 space-y-1 text-gray-400">
            <li>Developing backend APIs for flight booking, air taxi bookings, and flight status updates using Node.js and Express.js</li>
            <li>Implementing frontend user interfaces for booking workflows and flight tracking dashboards using React, TypeScript, and Vite</li>
            <li>Designing and integrating the MongoDB database schema to store booking and flight data</li>
            <li>Connecting with real-time flight data APIs to provide up-to-date flight status information</li>
          </ul>
          <p className="pt-2">
            Built with a modern stack, this scalable and user-friendly application is designed to be a ready-to-deploy solution for airports and aviation companies.
          </p>
        </div>
      ),
      shortDescription: "A full-stack airport management system for streamlined operations.",
      image: "https://i.pinimg.com/736x/cb/68/05/cb680500c160815d3a1bb9a7f522938b.jpg",
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Vite'],
      githubLink: 'https://github.com/RUSIRUDEVINDA/aviation-management-system.git',
      category: "Full Stack",
      uiImages: [
        "/images/home.jpeg",
        "/images/home2.jpeg",
        "/images/home3.jpeg",
        "/images/flightbooking.jpeg",
        "/images/search flights.jpeg",
        "/images/flightselection.jpeg",
        "/images/passengerdetails.jpeg",
        "/images/seatselection.jpeg",
        "/images/seatselection2.jpeg",
        "/images/payment.jpeg",
        "/images/flightstatus.jpeg",
        "/images/airtaxi.jpeg",
        "/images/selectairtaxi.jpeg",
        "/images/confirmairtaxi.jpeg",
        "/images/airtaxiconfirm.jpeg",
      ],
    },
    {
      title: "Real Estate Buy & Sell Mobile App",
      date: "May 2025",
      description: (
        <div className="space-y-4 text-gray-300">
          <p>
            We developed a user-friendly mobile app that connects real estate buyers and sellers. It features property browsing with map integration, direct seller contact, smooth navigation, and smart tools like search filters and an affordability calculator to support informed decision-making.
          </p>
          <h5 className="font-bold text-md text-sky-400 pt-2">Key Features:</h5>
          <ul className="list-disc list-inside pl-4 space-y-1 text-gray-400">
            <li>Property Browsing Interface: View detailed listings with photos, descriptions, prices, and amenities.</li>
            <li>Interactive Location Mapping: Properties displayed on a map with nearby landmarks, transport, and infrastructure.</li>
            <li>Direct Seller Contact: Each listing includes verified contact information for direct communication.</li>
            <li>Intuitive UX/UI Design: Clean layout and user-centric design for a smooth and satisfying experience.</li>
            <li>Search & Filter Functionality: Search properties by location, price range, property type, number of rooms, etc.</li>
            <li>Affordability Index Calculator: Helps users estimate what they can afford based on income and budget.</li>
            <li>Responsive Mobile Performance: Fast loading, smooth transitions, and optimized for all screen sizes.</li>
            <li>Favorites and Saved Searches: Allows users to save listings or set alerts for new properties matching their criteria.</li>
          </ul>
        </div>
      ),
      shortDescription: "A mobile app for real estate buyers and sellers with map integration, direct contact, smart search, affordability calculator, and a modern, responsive UI.",
      image: "/images/realestate.jpeg",
      technologies: ["Kotlin", "XML", "Android Studio", "Figma"],
      githubLink: "https://github.com/RUSIRUDEVINDA/real_state_app.git",
      category: "Mobile App",
      uiImages: [
        "/images/realestate/launch.jpg",
        "/images/realestate/onboarding1.jpg",
        "/images/realestate/onboarding2.jpg",
        "/images/realestate/onboarding3.jpg",
        "/images/realestate/signin.jpg",
        "/images/realestate/signup.jpg",
        "/images/realestate/home.jpg",
        "/images/realestate/location.jpg",
        "/images/realestate/propertylisting.jpg",
        "/images/realestate/propertydetails.jpg",
        "/images/realestate/addproperty.jpg",
        "/images/realestate/favourites.jpg",
        "/images/realestate/contact.jpg",
        "/images/realestate/profile.jpg",
        "/images/realestate/affordability.jpg",
      ],
    },
    {
      title: "ML-Based Sentiment Analysis System",
      date: "January 2025",
      description: (
        <div className="space-y-4 text-gray-300">
          <p>
            Developed an ML-based sentiment analysis system to classify customer feedback as positive or negative, providing businesses with actionable insights. The project involved data preprocessing using Python, NumPy, and NLTK, followed by training a Logistic Regression model with Scikit-learn. A real-time prediction pipeline was built using Pickle, and I developed a Flask-based web application using HTML/CSS and Bootstrap for the user interface. The solution was deployed on Microsoft Azure, with GitHub used for version control and collaboration.
          </p>
          <h5 className="font-bold text-md text-sky-400 pt-2">Key Features:</h5>
          <ul className="list-disc list-inside pl-4 space-y-1 text-gray-400">
            <li>Preprocessed raw customer feedback using tokenization, stopword removal, and vectorization.</li>
            <li>Trained and evaluated a Logistic Regression model for binary classification.</li>
            <li>Built a real-time prediction pipeline using Pickle for deployment.</li>
            <li>Developed a responsive Flask-based web interface for user interaction.</li>
            <li>Deployed the web app to Microsoft Azure for live access.</li>
            <li>Integrated GitHub for version control and code management.</li>
          </ul>
        </div>
      ),
      shortDescription: "Classifies customer feedback as positive or negative using ML, with a real-time Flask web app deployed on Azure.",
      image: "https://i.pinimg.com/736x/3e/41/20/3e4120592454832311f53ad7fdc50203.jpg",
      technologies: [
        "Python",
        "Microsoft Azure",
        "HTML",
        "CSS",
        "Jupyter Notebook"
      ],
      githubLink: "https://github.com/RUSIRUDEVINDA/sentiment_analysis_project",
      category: "Machine Learning"
    },
    {
      title: "Employee Management System",
      date: "June 2025",
      description: (
        <div className="space-y-4 text-gray-300">
          <p>
            Developed a Full-Stack Employee Management System to efficiently manage employee data and streamline organizational operations. The system features a React.js frontend for a dynamic and responsive user interface, and a Spring Boot backend that powers secure, scalable RESTful APIs. A MySQL database supports robust data storage and management. The project emphasizes clean architecture, modular code, and a seamless user experience.
          </p>
          <h5 className="font-bold text-md text-sky-400 pt-2">Key Features:</h5>
          <ul className="list-disc list-inside pl-4 space-y-1 text-gray-400">
            <li>Developed a responsive, user-friendly UI using React.js for smooth navigation and a modern look.</li>
            <li>Implemented secure RESTful APIs with Spring Boot for reliable client-server communication.</li>
            <li>Designed and managed efficient MySQL database schemas to handle employee data operations like CRUD.</li>
            <li>Created modular and reusable React components to improve scalability and maintainability.</li>
            <li>Applied best practices in clean architecture for better code structure and separation of concerns.</li>
            <li>Ensured cross-device compatibility with a mobile-friendly, responsive design.</li>
          </ul>
        </div>
      ),
      shortDescription: "A full-stack system for efficient employee data management.",
      image: "/images/employee.jpg",
      technologies: ["React.js", "Spring Boot", "MySQL"],
      githubLink: "https://github.com/RUSIRUDEVINDA/employee_management_system",
      category: "Full Stack",
      uiImages: [
        "/images/employee/login.jpg",
        "/images/employee/dashboard.jpg",
        "/images/employee/add.jpg"
      ]
    },
    {
      title: "OpenCV Realtime Object Detector",
      date: "July 2025",
      description: (
        <div className="space-y-4 text-gray-300">
          <p>
            This project showcases a real-time object detection system built using YOLOv4-Tiny for general object recognition and Haar Cascades for fast face detection. The solution leverages OpenCV and runs inside a Jupyter Notebook, enabling seamless video processing through webcam or video input. Designed to be lightweight and CPU-efficient, the system provides accurate detection results with labeled bounding boxes for various objects and faces.
          </p>
          <h5 className="font-bold text-md text-sky-400 pt-2">Key Features:</h5>
          <ul className="list-disc list-inside pl-4 space-y-1 text-gray-400">
            <li>Real-time object detection via webcam or video input.</li>
            <li>Dual detection system:</li>
            <ul className="pl-8 list-disc text-gray-400">
              <li>YOLOv4-Tiny for multi-object detection using the COCO dataset.</li>
              <li>Haar Cascade for rapid face detection.</li>
            </ul>
            <li>Displays bounding boxes with class labels.</li>
            <li>Optimized for fast performance on machines without GPU.</li>
            <li>Clean and interactive Jupyter Notebook implementation.</li>
          </ul>
        </div>
      ),
      shortDescription: "Real-time object and face detection using YOLOv4-Tiny and Haar Cascades in OpenCV.",
      image: "/images/object.jpg",
      technologies: ["Python", "Jupyter Notebook"],
      frameworks: ["OpenCV (cv2)", "NumPy"],
      detectionModels: ["YOLOv4-Tiny", "Haar Cascade Classifiers"],
      githubLink: "https://github.com/RUSIRUDEVINDA/opencv_object_detector",
      category: "Computer Vision",
      uiImages: [
        "/images/opencv/opencv2.jpg",
        "/images/opencv/opencv1.jpg"
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section
      id="projects"
      className="py-16 px-6 md:px-12 lg:px-24 system-gradient soft-shadow animate-fade-in-up"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl modern-title mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            A collection of projects that showcase my skills and passion for creating 
            innovative digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
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
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-sky-600/90 text-sky-100 rounded text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-1">
                    <span className="uppercase tracking-wide text-xs font-bold text-blue-400 mb-2">Featured Project</span>
                    <h3 className="text-xl modern-title mb-1">{project.title}</h3>
                    <span className="text-xs text-gray-400 mb-2 block">{project.date}</span>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => {
                        let bg = 'bg-blue-900/30';
                        let text = 'text-blue-200';
                        if (tech === 'React') { bg = 'bg-blue-600/20'; text = 'text-blue-400'; }
                        if (tech === 'Node.js') { bg = 'bg-green-700/20'; text = 'text-green-400'; }
                        if (tech === 'MongoDB') { bg = 'bg-green-900/20'; text = 'text-green-300'; }
                        if (tech === 'Express.js') { bg = 'bg-gray-700/30'; text = 'text-gray-200'; }
                        if (tech === 'TypeScript') { bg = 'bg-blue-500/20'; text = 'text-blue-300'; }
                        if (tech === 'Vite') { bg = 'bg-purple-700/20'; text = 'text-purple-300'; }
                        if (tech === 'Vue.js') { bg = 'bg-green-500/20'; text = 'text-green-400'; }
                        if (tech === 'Firebase') { bg = 'bg-yellow-500/20'; text = 'text-yellow-400'; }
                        if (tech === 'Vuetify') { bg = 'bg-blue-400/20'; text = 'text-blue-300'; }
                        if (tech === 'Socket.io') { bg = 'bg-gray-500/20'; text = 'text-gray-300'; }
                        if (tech === 'Chart.js') { bg = 'bg-pink-500/20'; text = 'text-pink-300'; }
                        if (tech === 'Next.js') { bg = 'bg-black/20'; text = 'text-white'; }
                        if (tech === 'Tailwind CSS') { bg = 'bg-cyan-500/20'; text = 'text-cyan-300'; }
                        if (tech === 'Framer Motion') { bg = 'bg-pink-400/20'; text = 'text-pink-200'; }
                        if (tech === 'Vercel') { bg = 'bg-black/20'; text = 'text-white'; }
                        if (tech === 'Kotlin') { bg = 'bg-pink-500/20'; text = 'text-pink-400'; }
                        if (tech === 'XML') { bg = 'bg-orange-200/30'; text = 'text-orange-500'; }
                        if (tech === 'Android Studio') { bg = 'bg-green-700/20'; text = 'text-green-400'; }
                        if (tech === 'Figma') { bg = 'bg-pink-500/20'; text = 'text-pink-400'; }
                        if (tech === 'Spring Boot') { bg = 'bg-green-700/20'; text = 'text-green-400'; }
                        return (
                          <span key={tech} className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border border-white/10 ${bg} ${text}`}>
                            {techLogos[tech] && <img src={techLogos[tech]} alt={tech} className="w-4 h-4 mr-1" />}
                            <span className={`text-sm font-semibold text-gray-100 text-center${tech === 'Android Studio' ? ' whitespace-nowrap text-xs' : ''}`}>{tech}</span>
                          </span>
                        );
                      })}
                    </div>
                    <div className="mt-auto pt-6">
                      <span
                        className="inline-flex items-center gap-1 text-blue-400 font-semibold cursor-pointer hover:underline hover:text-blue-300 transition-all text-base"
                        style={{ zIndex: 2 }}
                        onClick={() => openModal(project)}
                      >
                        See More <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={closeModal}>
        <DialogContent className="bg-dark-blue-100/20 border-sky-500/20 text-white max-w-5xl p-0 backdrop-blur-md">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl modern-title pr-8">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <a
            href={selectedProject?.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-7 right-16 inline-flex items-center gap-2 text-green-400 font-semibold cursor-pointer hover:underline hover:text-green-300 transition-all text-sm no-underline"
            style={{ zIndex: 2 }}
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          <div className="max-h-[80vh] overflow-y-auto p-6 pt-0 space-y-8">
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-sky-400">Description</h4>
              <div className="text-gray-300 text-sm leading-relaxed">{selectedProject?.description}</div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-sky-400">Technologies</h4>
              <div className={`flex ${selectedProject?.title === 'Real Estate Buy & Sell Mobile App' ? 'justify-center' : 'justify-center'} mb-4`}>
                {selectedProject?.title === 'Real Estate Buy & Sell Mobile App' ? (
                  <div className="flex flex-row gap-4 justify-center items-center">
                    {selectedProject.technologies.map(tech => (
                      <div key={tech} className="flex flex-col items-center justify-center bg-white/10 rounded-xl shadow-md p-4 w-32 h-32 mx-auto">
                        {techLogos[tech] && <img src={tech === 'Android Studio' ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' : techLogos[tech]} alt={tech} className="w-10 h-10 object-contain mb-2" />}
                        <span className="text-sm font-semibold text-gray-100 text-center">{tech}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-row justify-center items-center gap-4">
                    {selectedProject?.technologies.map(tech => (
                      <div key={tech} className="flex flex-col items-center justify-center bg-white/10 rounded-xl shadow-md p-4 w-32 h-32 mx-auto">
                        {techLogos[tech] && <img src={techLogos[tech]} alt={tech} className="w-10 h-10 object-contain mb-2" />}
                        <span className="text-sm font-semibold text-gray-100 text-center">{tech}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Frameworks & Libraries for ML-Based Sentiment Analysis System */}
              {selectedProject?.title === 'ML-Based Sentiment Analysis System' && (
                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-4 text-sky-400">Frameworks & Libraries</h4>
                  <div className="flex flex-row flex-wrap justify-center items-center gap-3 py-4">
                    {['Flask', 'NumPy', 'NLTK', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Pickle'].map(framework => (
                      <span key={framework} className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-200 text-sm font-semibold border border-white/10">
                        <img
                          src={techLogos[framework]}
                          alt={framework}
                          className="w-5 h-5"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://cdn-icons-png.flaticon.com/512/148/148953.png';
                          }}
                        />
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {/* Frameworks & Libraries and Detection Models for OpenCV Realtime Object Detector */}
              {selectedProject?.title === 'OpenCV Realtime Object Detector' && (
                <div className="mt-8">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
                    {/* Frameworks & Libraries (left) */}
                    <div className="flex-1 w-full">
                      <h4 className="font-bold text-lg mb-2 text-sky-400">Frameworks & Libraries</h4>
                      <div className="flex flex-row flex-wrap gap-3 py-2">
                        {['OpenCV (cv2)', 'NumPy'].map(framework => (
                          <span key={framework} className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-200 text-sm font-semibold border border-white/10">
                            <img
                              src={techLogos[framework] || 'https://cdn-icons-png.flaticon.com/512/148/148953.png'}
                              alt={framework}
                              className="w-5 h-5"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = 'https://cdn-icons-png.flaticon.com/512/148/148953.png';
                              }}
                            />
                            {framework}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Detection Models (right) */}
                    <div className="flex-1 w-full md:text-right">
                      <h4 className="font-bold text-lg mb-2 text-green-400">Detection Models</h4>
                      <div className="flex flex-row flex-wrap gap-3 py-2 justify-end md:justify-end">
                        {['YOLOv4-Tiny', 'Haar Cascade Classifiers'].map(model => (
                          <span key={model} className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 text-green-200 text-sm font-semibold border border-white/10">
                            <img
                              src={techLogos[model] || 'https://cdn-icons-png.flaticon.com/512/148/148953.png'}
                              alt={model}
                              className="w-5 h-5"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = 'https://cdn-icons-png.flaticon.com/512/148/148953.png';
                              }}
                            />
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {Array.isArray(selectedProject?.uiImages) && selectedProject.uiImages.length > 0 && (
              <div>
                <h4 className="font-bold text-lg mb-4 text-sky-400">UI Showcase</h4>
                <Carousel 
                  className="w-full relative"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {selectedProject?.title === 'Real Estate Buy & Sell Mobile App'
                      ? selectedProject.uiImages.reduce((rows, img, idx) => {
                          if (idx % 4 === 0) rows.push([]);
                          rows[rows.length - 1].push(img);
                          return rows;
                        }, []).map((imgGroup, i) => (
                          <CarouselItem key={i}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                              {imgGroup.map((img, j) => (
                                <img 
                                  key={j}
                                  src={img} 
                                  alt={`${selectedProject.title} UI ${i * 4 + j + 1}`} 
                                  className="rounded-lg object-contain w-full h-full max-h-[75vh]"
                                />
                              ))}
                            </div>
                          </CarouselItem>
                        ))
                      : selectedProject.uiImages.map((img, i) => (
                          <CarouselItem key={i}>
                            <img
                              src={img}
                              alt={`${selectedProject.title} UI ${i + 1}`}
                              className="rounded-lg object-contain w-full h-full max-h-[75vh]"
                            />
                          </CarouselItem>
                        ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 text-white border-none hover:bg-black/50 transition-all" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 text-white border-none hover:bg-black/50 transition-all" />
                </Carousel>
              </div>
            )}

            {selectedProject?.title === 'ML-Based Sentiment Analysis System' && (
              <div className="w-full flex flex-col items-start mt-8">
                <h4 className="font-bold text-lg mb-4 text-sky-400">UI Showcase</h4>
                <div className="w-full flex justify-center">
                  <img
                    src="/images/ml_project/mlbased.jpg"
                    alt="ML-Based Sentiment Analysis System UI"
                    className="rounded-xl shadow-lg w-full max-w-5xl h-auto object-contain"
                    style={{ maxHeight: '640px' }}
                  />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default Projects;
