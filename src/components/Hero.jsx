import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import MernBackground from './MernBackground';
import profileImg from '../assets/yuvraj.webp';
import resume from "../assets/yuvraj_resume.pdf";

const Hero = () => {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center bg-dark relative overflow-hidden pt-20 pb-16">

            <MernBackground />

            <div className="z-10 text-center px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden relative z-20 ring-2 ring-primary/40 shadow-[0_0_45px_-8px_rgba(129,140,248,0.6)]">
                        <img
                            src={profileImg}
                            alt="Yuvraj Singh"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-mono tracking-wide text-accent"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                    MERN Stack Developer · Currently learning DSA & Next.js
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-5 text-4xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                >
                    <span className="text-secondary">I'm</span> <span className="text-white">Yuvraj Singh</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl sm:text-3xl text-gray-300 font-medium drop-shadow-md"
                >
                    <ReactTyped
                        strings={[
                            'Full Stack Developer',
                            'MERN Stack Developer',
                            'Software Developer',
                            'Currently Learning DSA',
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        className="text-white"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto"
                >
                    Full Stack Development using MongoDB, Express.js, React.js and Node.js.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer relative z-30 inline-flex items-center gap-2"
                    >
                        Start Your Project
                        <ArrowRight size={18} />
                    </a>
                    <a
                        href={resume}
                        download="yuvraj_resume.pdf"
                        className="px-8 py-3 border border-white/15 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 pointer-events-auto cursor-pointer relative z-30 inline-flex items-center gap-2"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
