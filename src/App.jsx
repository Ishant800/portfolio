import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaStar
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiDjango
} from "react-icons/si";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode
} from "react-icons/fa";


export default function App() {

  const projects = [
    {
      title: "AI Image Generator",
      description:
        "A tool that allows users to generate images using AI prompts. Built using React, Node.js, and OpenAI API.",
      date: "March 2024",
      image: "https://i.pinimg.com/736x/bd/f7/f8/bdf7f8f156a70e8a0c578d0f299208db.jpg",
      github: "https://github.com/example/image-generator",
      live: "https://imagegen.vercel.app"
    },
    {
      title: "Taskify – Productivity App",
      description:
        "A full-stack productivity app with task tracking, reminders, and dark/light mode. Built with MERN stack.",
      date: "January 2024",
      image: "https://i.pinimg.com/736x/98/b3/f1/98b3f14353dc9f69d802dc98583039c8.jpg",
      github: "https://github.com/example/taskify",
      live: "https://taskifyapp.com"
    },
    {
      title: "DevLink – Portfolio Builder",
      description:
        "Create and deploy developer portfolios in minutes. Includes themes, editor, and real-time preview.",
      date: "December 2023",
      image: "https://i.pinimg.com/736x/ba/82/af/ba82afbc295ca9d91661a03f6138cc87.jpg",
      github: "https://github.com/example/devlink",
      live: "https://devlink.io"
    },
    {
      title: "SnapBuy – E-Commerce Store",
      description:
        "An e-commerce platform with cart, admin panel, product search, and Stripe payments. Built using Next.js and MongoDB.",
      date: "November 2023",
      image: "https://i.pinimg.com/736x/33/76/15/337615d20ae0d7a0716f33b5f24c1b66.jpg",
      github: "https://github.com/example/snapbuy",
      live: "https://snapbuy.shop"
    }
  ];
  
  const certifications = [
    {
      title: "Certified React Developer",
      org: "Meta",
      date: "June 2023",
      image: "https://via.placeholder.com/300x200?text=React+Certificate"
    },
    {
      title: "Backend Development with Node.js",
      org: "Udemy",
      date: "April 2023",
      image: "https://via.placeholder.com/300x200?text=Node+Certificate"
    },
    {
      title: "MongoDB for Developers",
      org: "MongoDB University",
      date: "March 2023",
      image: "https://via.placeholder.com/300x200?text=MongoDB+Certificate"
    }
  ];
  
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "TechNova Labs",
      duration: "Jan 2023 – Present",
      details:
        "Worked on building and scaling B2B SaaS platforms using MERN stack. Led a team of 4 developers, implemented CI/CD, and managed MongoDB clusters."
    },
    {
      role: "Frontend Developer Intern",
      company: "Creatix Studio",
      duration: "Jun 2022 – Dec 2022",
      details:
        "Developed and maintained user interfaces for client websites. Worked with React, TailwindCSS, and Figma to bring UI/UX designs to life."
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] text-white px-6 py-10 font-custom overflow-x-hidden">
      <div className="max-w-4xl w-full">
        {/* Navbar */}
        <motion.header
          className="flex justify-between items-center mb-16"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-2xl font-bold">IK.</div>
          <nav className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition duration-300">
              Home
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Work
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Blog &gt;
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Hire me &gt;
            </a>
          </nav>
          <div className="text-gray-400">{<FaStar />}</div>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          className="space-y-6 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            👋 Hey, I’m <span className="text-white">Ishant Karmacharya</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm a versatile Full-Stack Web & Flutter Developer, digital craftsman, and creative
            technologist. I don’t just build apps — I engineer immersive digital journeys that blend
            aesthetics, speed, and seamless functionality.
          </motion.p>
          <motion.div
            className="flex justify-start gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              Contact me →
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              More About me →
            </button>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="mt-24 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 ">About me:</h2>
          <p className="text-gray-300 mb-6 ">
            I'm a passionate Full-Stack Web and Flutter Developer with 5+ years of experience building
            powerful web and mobile applications. My journey began with HTML, CSS, and JavaScript, and has
            grown into creating modern, scalable SaaS platforms using React, Next.js, Node.js, and Flutter.
            I love transforming ideas into real-world solutions with clean code and great UI/UX. Whether it's
            a sleek mobile app or a complex backend system, I strive to build high-performance, user-focused
            experiences that make an impact.
          </p>
          <div className="flex justify-start gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              View My Github →
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
              Contact me →
            </button>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          className="mt-24 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-start">Technologies I used:</h3>
          <div className="flex flex-wrap justify-start gap-4">
            {[
              { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
              { icon: <FaCss3Alt className="text-blue-400" />, label: "CSS" },
              { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
              { icon: <SiTailwindcss className="text-teal-400" />, label: "Tailwind CSS" },
              { icon: <SiMysql className="text-blue-200" />, label: "MySQL" },
              { icon: <FaNodeJs className="text-green-400" />, label: "Node.js" },
              { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
              { icon: <SiDjango className="text-green-300" />, label: "Django" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 px-4 py-2 rounded flex items-center space-x-2 shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tech.icon} <span>{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>


        <section className="px-4 ml-12">
        <h2 className="text-3xl font-bold text-start mb-10 flex items-center justify-start mt-10 gap-2">
          <FaLaptopCode /> Projects Showcase
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{proj.date}</p>
                <p className="text-gray-300 mb-4">{proj.description}</p>
                <div className="flex gap-4">
                  <a
                    href={proj.live}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
                  >
                    View Project <FaExternalLinkAlt className="inline ml-1" />
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded"
                  >
                    GitHub <FaGithub className="inline ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-bold text-start mb-10 flex items-center justify-center gap-2">
          <FaBriefcase /> Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-400">{exp.company} | {exp.duration}</p>
              <p className="text-gray-300 mt-2">{exp.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-3xl font-bold text-start mb-10 flex items-center justify-center gap-2">
          <FaCertificate /> Achievements & Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.org} – {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
     
    </div>
  );
}
