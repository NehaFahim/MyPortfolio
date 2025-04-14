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
    link: "https://furniture-store-puce.vercel.app/"
  },
  
  {
    id: 2,
    title: "Learn to Code - Educational Platform",
    description: "An interactive learning platform built with Next.js, Tailwind CSS and figma design. It offers coding tutorials, study tips, and educational resources to help beginners and advanced learners improve their programming skills.",
    image: "/learn.png",
    tags: ["Next.js", "Tailwind CSS", "Figma", "Education"],
    link: "https://learn-to-code-website.vercel.app/"

  },
  {
    id: 3,
    title: "Multi-Page Website with Next.js Routing",
    description: "A structured multi-page website built with Next.js and Tailwind CSS, utilizing Next.js routing for seamless navigation. It includes Home, About, Contact, Login, and other essential pages, demonstrating efficient client-side and server-side rendering.",
    image: "/route.png",
    tags: ["Next.js", "Tailwind CSS", "Routing", "Multi-Page"],
    link: "https://nextjs-routing-links.vercel.app//"
  },
  {
    id: 4,
    title: "First Portfolio Website",
    description: "My first personal portfolio website built with Next.js and Tailwind CSS. It showcases my early projects and skills before I improved my web development expertise.",
    image: "/portfolio1.png",
    tags: ["Next.js", "Tailwind CSS", "Portfolio", "Personal Website"],
    link: "https://my-portfolio-swart-tau-90.vercel.app/"
  },
  {
    id: 5,
    title: "Admin Dashboard for Furniture Store",
    description: "An admin panel for managing products, orders, and users, built with Next.js and Tailwind CSS. It provides a secure and user-friendly interface for handling e-commerce operations efficiently.",
    image: "/admin.png",
    tags: ["Next.js", "Tailwind CSS", "Admin Panel", "Dashboard"],
    link: "https://dashboard-admin-zeta.vercel.app/admin/dashboard/"
  },
  {
    id: 6,
    title: "Login & Authentication System",
    description: "A secure login form built with Next.js and Tailwind CSS, featuring validation, error handling, and authentication. It includes email/password authentication and supports protected routes.",
    image: "/login.png",
    tags: ["Next.js", "Tailwind CSS", "Authentication", "Form Validation"],
    link: "https://login-signup-form-green.vercel.app//"
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
                    className="inline-block  bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  >
                    View Project
                  </Link>
                  
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








