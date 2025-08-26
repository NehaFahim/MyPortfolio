"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Furniture Store - E-commerce Website",
    description: "A modern and responsive e-commerce website built with Next.js and Tailwind CSS. Features include product listings, a shopping cart, and a user-friendly interface.",
    image: "/land page.png",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS", "E-commerce"],
    link: "https://furniture-store-puce.vercel.app/",
     github: "https://github.com/NehaFahim/FurnitureStore.git"
  },
  
  {
    id: 2,
    title: "Learn to Code - Educational Platform",
    description: "An interactive learning platform built with Next.js, Tailwind CSS and figma design. It offers coding tutorials, study tips, and educational resources to help beginners and advanced learners improve their programming skills.",
    image: "/learn.png",
    tags: ["Next.js", "Tailwind CSS", "Figma", "Education"],
    link: "https://learn-to-code-website.vercel.app/",
     github: "https://github.com/NehaFahim/Learn-to-code-website.git"

  },

 {
  id: 3,
  title: "Pakistan Independence Day Celebration Website",
  description: "An interactive Independence Day website built with Next.js and Tailwind CSS. It includes a Home page, Quiz section, and Wishes page where users can share their Independence Day wishes. The project highlights animations, routing, and engaging UI for celebrating Pakistan’s Independence Day.",
  image: "/azadi.png",
  tags: ["Next.js", "Tailwind CSS", "Quiz", "Interactive UI", "Pakistan Independence Day"],
  link: "https://pakistan-independence-project.vercel.app/", 
  github: "https://github.com/NehaFahim/Azadi-project.git"
},


  {
    id: 4,
    title: "First Portfolio Website",
    description: "My first personal portfolio website built with Next.js and Tailwind CSS. It showcases my early projects and skills before I improved my web development expertise.",
    image: "/portfolio1.png",
    tags: ["Next.js", "Tailwind CSS", "Portfolio", "Personal Website"],
    link: "https://my-portfolio-swart-tau-90.vercel.app/",
    github: "https://github.com/NehaFahim/My-Portfolio.git"
  },

  {
  id: 5,
  title: "Student ID Card Portal",
  description: "A digital student ID card portal built with Next.js and Tailwind CSS. It dynamically generates stylish student ID cards with details like name, roll number, course, city, and batch. Includes background design, responsive layout, and reusable card component.",
  image: "/portal.png", 
  tags: ["Next.js", "React", "Tailwind CSS", "Student Portal"],
  link: "https://id-card-theta.vercel.app/",  
  github: "https://github.com/NehaFahim/ID-Card.git"
},

  {
    id: 6,
    title: "Login & Authentication System",
    description: "A secure login form built with Next.js and Tailwind CSS, featuring validation, error handling, and authentication. It includes email/password authentication and supports protected routes.",
    image: "/login.png",
    tags: ["Next.js", "Tailwind CSS", "Authentication", "Form Validation"],
    link: "https://login-signup-form-green.vercel.app//",
     github: "https://github.com/NehaFahim/login-signup-form.git"
  },

      {
    id: 7,
    title: "Multi-Page Website with Next.js Routing",
    description: "A structured multi-page website built with Next.js and Tailwind CSS, utilizing Next.js routing for seamless navigation. It includes Home, About, Contact, Login, and other essential pages, demonstrating efficient client-side and server-side rendering.",
    image: "/route.png",
    tags: ["Next.js", "Tailwind CSS", "Routing", "Multi-Page"],
    link: "https://nextjs-routing-links.vercel.app//",
     github: "https://github.com/NehaFahim/nextjs-routing-links.git"
  },

    {
    id: 8,
    title: "Admin Dashboard for Furniture Store",
    description: "An admin panel for managing products, orders, and users, built with Next.js and Tailwind CSS. It provides a secure and user-friendly interface for handling e-commerce operations efficiently.",
    image: "/admin.png",
    tags: ["Next.js", "Tailwind CSS", "Admin Panel", "Dashboard"],
    link: "https://dashboard-admin-zeta.vercel.app/admin/dashboard/",
     github: "https://github.com/NehaFahim/dashboard-admin.git"
  },
  
  {
    id: 9,
    title: "Unit Converter - Streamlit App",
    description: "A simple and efficient unit converter built with Python and Streamlit. It allows users to convert values between various units of length, weight, and temperature. The app features a clean UI and is deployed using Streamlit Cloud.",
    image: "/unit converter.png",
    tags: ["Python", "Streamlit", "Unit Converter", "Web App"],
    link: "https://unitconverter00.streamlit.app/",
     github: "https://github.com/NehaFahim/class_projects/tree/master/UC_project1/unit_converter"
  },
  {
    id: 10,
    title: "Password Generator - Streamlit App",
    description: "A secure and customizable password generator built using Python and Streamlit. Users can generate strong passwords of varying lengths with options to include uppercase, lowercase, numbers, and special characters. The app is lightweight and deployed using Streamlit Cloud.",
    image: "/password generator.png",
    tags: ["Python", "Streamlit", "Password Generator", "Security Tool"],
    link: "https://password-generate001.streamlit.app/",
     github: "https://github.com/NehaFahim/class_projects/tree/master/password-generator" 
  },
  {
    id: 11,
    title: "Secure Data Encryption - Streamlit App",
    description: "A robust data encryption system built with Python and Streamlit, using the Fernet encryption method for secure storage and retrieval of sensitive data. It features passkey hashing, login-based reauthorization, and multiple security layers to ensure data integrity. Deployed with Streamlit Cloud.",
    image: "/secure data.png",
    tags: ["Python", "Streamlit", "Fernet", "Data Encryption", "Security"],
    link: "https://securedata05.streamlit.app/",
     github: "https://github.com/NehaFahim/class_projects/tree/master/secure_data_system" 
  },
  {
    id: 12,
    title: "Personal Library Manager - Streamlit App",
    description: "A simple yet efficient personal library management system built with Python and Streamlit. It allows users to add, view, update, and delete book records, keeping track of their reading list with a user-friendly interface. Deployed using Streamlit Cloud with UV support.",
    image: "/library manager.png",
    tags: ["Python", "Streamlit", "Library", "CRUD", "UV"],
    link: "https://libraryproject03.streamlit.app/",
     github: "https://github.com/NehaFahim/class_projects/tree/master/library_manager_project" 
  },

    {
  id: 13,
  title: "AI Assistant — Chainlit + OpenAI Agents + Gemini API",
  description: "A smart conversational agent built using Chainlit, OpenAI Agents SDK, and Google's Gemini API (flash model). It features interactive chat handling, secure API key management, and deployment on Railway.",
  image: "/ai assist.png",
  tags: ["Chainlit", "OpenAI Agents", "Gemini API", "LLM", "Railway"],
  link: "hhttps://ai-assistant-production-660d.up.railway.app/", 
  github: "https://github.com/NehaFahim/AI-Assistant.git"
},

{
  id: 14,
  title: "Independence Day – Azadi AI Assistant",
  description: "A Python-based interactive web app built with Streamlit to celebrate Pakistan's Independence Day. It features AI-style patriotic tools like fact generator, quiz mode, poetry display, and a custom poster generator. The app provides an engaging and fun experience for users on 14 August.",
  image: "/aiazadi.png",
  tags: ["Python", "Streamlit", "Independence Day", "AI Tools", "Poster Generator"],
  link: "https://independence-day.streamlit.app/", 
  github: "https://github.com/NehaFahim/Independence-AIproject.git" 
}
  
  
];


const Projects = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-400 transition duration-300"
                  >
                    View Project
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-block bg-slate-950 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition duration-300"
                    >
                      View Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;





