"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const handleResumeClick = () => {
    window.open('/myCV.pdf');
   
  };
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "SHADCN UI"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Sanity CMS"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Figma"]
    }
  ];
  
  const experiences = [
    {
      title: "Frontend Developer (Trainee)",
      company: "Governor Sindh IT Initiative  Web 3.0 & Metaverse Program",
      period: "2023 - Present (Ongoing)",
      description: "Currently enrolled in a comprehensive frontend development course covering React, Next.js, Tailwind CSS, and Sanity CMS. Working on multiple real-world projects as part of the curriculum."
    },
    {
      title: "Hackathon Participant (Frontend Developer)",
      company: "Marketplace Hackathon",
      period: "2025",
      description: "Developed a fully functional furniture e-commerce website with product listings, cart functionality, and a responsive UI using Next.js and Tailwind CSS."
    },
    {
      title: "Freelance Frontend Developer",
      company: "Self-employed",
      period: "2024 - Present",
      description: "Building modern web applications using Next.js and Tailwind CSS while exploring freelancing opportunities on platforms like Fiverr and Upwork."
    }
    
  ];
  

  return (
   // ... existing code ...
   <section className="py-20 bg-gradient-to-b from-[#020617] via-[#0f172a]/95 to-[#020617]">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
     <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.5 }}
       className="text-center mb-16"
     >
       <h2 className="text-4xl md:text-5xl font-bold mb-4">
         <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           About Me
         </span>
       </h2>
       <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto"></div>
     </motion.div>

     <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
       {/* Profile Image */}
       <motion.div
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         className="relative"
       >
         <div className="relative h-[500px] rounded-2xl overflow-hidden">
           <Image
             src="/black 1.png"
             alt="Profile"
             width={500}
             height={500}
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
         </div>
         {/* Floating card */}
         <motion.div
           initial={{ y: 20 }}
           animate={{ y: 0 }}
           transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
           className="absolute -bottom-10 -right-10 glass-effect p-6 rounded-2xl max-w-xs border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-xl bg-[#0f172a]/80"
         >
          <p className="text-gray-200">
  &quot;Passionate about creating beautiful and functional frontend websites&quot;
</p>

         </motion.div>
       </motion.div>

       {/* Content */}
       <motion.div
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         className="space-y-6"
       >
        <h3 className="text-3xl font-bold text-white mb-4">
  Crafting Digital Excellence
</h3>
<p className="text-gray-200 leading-relaxed">
  As a frontend developer , I specialize in creating modern, 
  responsive, and user-friendly applications using React, Next.js, and Tailwind CSS.  
  Passionate about delivering seamless digital experiences, I continuously explore new 
  technologies to enhance my craft.
</p>
         
         {/* Experience Cards */}
         <div className="space-y-4">
           {experiences.map((exp, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.2 }}
               className="glass-effect p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-xl bg-[#0f172a]/80"
             >
               <h4 className="text-white font-semibold">{exp.title}</h4>
               <p className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">{exp.company}</p>
               <p className="text-gray-300 text-sm">{exp.period}</p>
               <p className="text-gray-200 mt-2">{exp.description}</p>
             </motion.div>
           ))}
         </div>
       </motion.div>
     </div>

     {/* Skills Section */}
     <div className="grid md:grid-cols-3 gap-8">
       {skills.map((skillSet, index) => (
         <motion.div
           key={index}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: index * 0.2 }}
           className="glass-effect p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-xl bg-[#0f172a]/80"
         >
           <h3 className="text-xl font-semibold text-white mb-4">
             {skillSet.category}
           </h3>
           <div className="flex flex-wrap gap-3">
             {skillSet.items.map((skill, i) => (
               <span
                 key={i}
                 className="px-4 py-2 bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 text-gray-200 rounded-full text-sm border border-purple-500/20 hover:border-purple-500/30 hover:bg-gradient-to-r hover:from-blue-400/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
               >
                 {skill}
               </span>
             ))}
           </div>
         </motion.div>
       ))}
     </div>

       {/* Call to Action */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center mt-20"
    >
      <button 
        onClick={handleResumeClick}
        className="px-8 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-medium"
      >
        Download Resume
      </button>
    </motion.div>
   </div>
 </section>

  );
};
export { About };