import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaDocker, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Express', icon: <SiExpress className="text-white" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
    { name: 'Docker', icon: <FaDocker className="text-[#007396]" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-[#ff0000]" /> },
    { name: 'CSS', icon: <FaCss3 className="text-[#6a5acd]" /> },
];

const Skills = () => {
    // Duplicate skills for seamless loop
    const marqueeSkills = [...skills, ...skills, ...skills];

    return (
        <div className="w-full py-20 relative overflow-hidden" id="skills">
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-2 relative inline-block tracking-tight">
                        My Skills
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                    </h2>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dark to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dark to-transparent z-10"></div>

                <motion.div
                    className="flex space-x-12 w-max"
                    animate={{ x: [0, -1035] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    style={{ willChange: "transform" }}
                >
                    {marqueeSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 glass-card rounded-xl shadow-lg min-w-[150px] transform transition-transform hover:scale-110"
                        >
                            <div className="text-5xl mb-4">{skill.icon}</div>
                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                        </div>
                    ))}
                </motion.div>
            </div>
            {/* Reverse Marquee for variety (Optional, keeping simple first) */}
        </div >
    );
};

export default Skills;
