import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import wanderlustImg from '../assets/Screenshot 2026-02-17 125247.png';
import githubImg from '../assets/github-clone.png';
import zoomcloneImg from '../assets/zoom-clone.png';
import netflixImg from '../assets/netflix.png';

const projects = [
    {
        title: 'Wanderlust',
        description: 'A travel-based social media platform where users can share their travel experiences and photos.',
        tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap', 'HTML', 'CSS'],
        image: wanderlustImg,
        live: 'https://wanderlust-4-zmxo.onrender.com/listings',
        github: 'https://github.com/Yuvraj6387/wanderlust'
    },
    {
        title: 'GitHub UI Clone',
        description: 'A clone of the GitHub UI.',
        tech: ['React', 'mongodb', 'HTML', 'CSS', 'Node.js',],
        image: githubImg,
        live: 'https://lnkd.in/d2HEx7Bg',
        github: 'https://github.com/Yuvraj6387/aws-frontend-gitclone'
    },
    {
        title: 'Zoom-Clone',
        description: 'A video conferencing application similar to Zoom.',
        tech: ['React', 'Node.js', 'Socket.io', 'HTML', 'CSS', 'JavaScript'],
        image: zoomcloneImg,
        live: 'https://zoom-18.onrender.com/',
        github: 'https://github.com/Yuvraj6387/zoom-clone'
    },
    // Adding duplicates for marquee effect
    {
        title: 'Netflix',
        description: 'A clone of the Netflix UI.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: netflixImg,
        live: 'https://netflix-clone-yuvraj6387.onrender.com/',
        github: 'https://github.com/Yuvraj6387/netflix-clone'
    }
];

const Projects = () => {
    // Duplicate logic for smooth loop
    const marqueeProjects = [...projects, ...projects];

    return (
        <div className="w-full py-20 bg-dark text-white overflow-hidden" id="projects">
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-2 relative inline-block tracking-tight">
                        My Projects
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                    </h2>
                </motion.div>
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-dark to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-dark to-transparent z-10"></div>

                <motion.div
                    className="flex space-x-8 px-4 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                    style={{ willChange: "transform" }}
                    whileHover={{ animationPlayState: 'paused' }} // Only works with CSS, for framer motion we need 'hover' variant or control
                >
                    {marqueeProjects.map((project, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[400px] glass-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 group flex-shrink-0"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a href={project.live} className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors">
                                        <ExternalLink size={20} color="white" />
                                    </a>
                                    <a href={project.github} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                                        <Github size={20} color="white" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
