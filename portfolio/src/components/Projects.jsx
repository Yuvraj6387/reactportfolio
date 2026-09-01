import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import wanderlustImg from '../assets/wanderlust (2).png';
import githubImg from '../assets/github-clone.png';
import zoomcloneImg from '../assets/zoom-clone.png';
import netflixImg from '../assets/netflix.png';

const projects = [
    {
        title: 'Wanderlust',
        description: 'A travel-based social media platform where users can share their travel experiences and photos.',
        tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
        image: wanderlustImg,
        live: 'https://wanderlust-4-zmxo.onrender.com/listings',
        github: 'https://github.com/Yuvraj6387/wanderlust'
    },
    {
        title: 'GitHub UI Clone',
        description: 'A pixel-accurate clone of the GitHub interface.',
        tech: ['React', 'MongoDB', 'Node.js'],
        image: githubImg,
        live: 'https://lnkd.in/d2HEx7Bg',
        github: 'https://github.com/Yuvraj6387/aws-frontend-gitclone'
    },
    {
        title: 'Zoom-Clone',
        description: 'A video conferencing application similar to Zoom.',
        tech: ['React', 'Node.js', 'Socket.io'],
        image: zoomcloneImg,
        live: 'https://zoom-18.onrender.com/',
        github: 'https://github.com/Yuvraj6387/zoom-clone'
    },
    {
        title: 'Netflix',
        description: 'A clone of the Netflix streaming UI.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: netflixImg,
        live: 'https://netflix-clone-yuvraj6387.onrender.com/',
        github: 'https://github.com/Yuvraj6387/netflix-clone'
    }
];

const variants = {
    enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
};

const SWIPE_THRESHOLD = 60;

const Projects = () => {
    const [[index, direction], setPage] = useState([0, 0]);
    const project = projects[index];

    const paginate = (dir) => {
        setPage(([current]) => [(current + dir + projects.length) % projects.length, dir]);
    };

    const goTo = (i) => {
        setPage(([current]) => [i, i > current ? 1 : -1]);
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') paginate(1);
            if (e.key === 'ArrowLeft') paginate(-1);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <div className="w-full py-20 bg-dark text-white overflow-hidden" id="projects">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-4"
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
                    <p className="text-gray-400 mt-4 text-sm">Swipe, click, or use the arrows to explore what I've built</p>
                </motion.div>

                <div className="relative mt-10 max-w-2xl mx-auto">
                    {/* Faint editorial index number */}
                    <span className="hidden md:block absolute -top-8 -left-4 text-[110px] font-black text-white/[0.04] leading-none select-none pointer-events-none z-0">
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="relative overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.15}
                                onDragEnd={(e, info) => {
                                    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
                                    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
                                }}
                                className="relative z-10 rounded-3xl overflow-hidden bg-dark-card border border-white/10 shadow-2xl hover:shadow-[0_0_60px_-15px_rgba(129,140,248,0.35)] hover:border-white/20 transition-[box-shadow,border-color] duration-500 cursor-grab active:cursor-grabbing"
                            >
                                <button
                                    onClick={() => paginate(1)}
                                    aria-label="Show next project"
                                    className="relative w-full block group/img cursor-pointer"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            draggable={false}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/10 to-transparent" />
                                        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-semibold tracking-wide">
                                            NEXT PROJECT <ChevronRight size={18} />
                                        </div>
                                        <span className="absolute top-4 left-4 backdrop-blur-md bg-black/40 text-gray-200 text-[11px] font-mono tracking-widest px-3 py-1 rounded-full border border-white/10">
                                            {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                                        </span>
                                    </div>
                                </button>

                                <div className="p-6 md:p-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                                    <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed max-w-md">{project.description}</p>

                                    <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-6">
                                        {project.tech.join('  ·  ')}
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link inline-flex items-center gap-1.5 text-white font-semibold text-sm hover:text-primary transition-colors"
                                        >
                                            View Live
                                            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-gray-400 font-medium text-sm hover:text-white transition-colors"
                                        >
                                            <Github size={16} /> Source
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Controls: arrows + dots in one row */}
                <div className="flex items-center justify-center gap-5 mt-8">
                    <button
                        onClick={() => paginate(-1)}
                        aria-label="Previous project"
                        className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="flex gap-2">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to project ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-7 bg-gradient-to-r from-primary to-secondary' : 'w-1.5 bg-white/15 hover:bg-white/30'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => paginate(1)}
                        aria-label="Next project"
                        className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
