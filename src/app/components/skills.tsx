"use client";
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-white font-medium">{skill}</span>
      <span className="text-gray-400">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded-full">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full bg-blue-500 rounded-full"
      />
    </div>
  </div>
);

export default function Skills() {
  const frontendSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "SQL", level: 70 }
  ];

  const otherSkills = [
    { name: "Git", level: 80 },
    { name: "UI/UX Design", level: 70 },
    { name: "Problem Solving", level: 85 },
    { name: "Team Collaboration", level: 90 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            My Skills
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Here are the technologies and skills I have acquired throughout my journey as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Frontend Development</h2>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
            ))}
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Backend Development</h2>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
            ))}
          </motion.div>
        </div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-gray-800 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Other Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}