import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import profileImg from '../assets/yuvi.jpg';
import resumePdf from '../assets/Yuvraj_Resume.pdf';

const About = () => {
    return (
        <div className="w-full py-20 px-4 bg-dark text-white relative overflow-hidden" id="about">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* Left Column: Text Content */}
                    <motion.div
                        className="w-full md:w-1/2 text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I am a passionate Full Stack Developer with a strong foundation in modern web technologies.
                                I love building scalable, responsive, and user-friendly applications that solve real-world problems.
                            </p>
                            <p>
                                Currently, I am also diving deep into Data Structures and Algorithms to enhance my problem-solving skills.
                                My journey involves constant learning and applying new technologies to create impactful digital experiences.
                            </p>

                            <div className="pt-4">
                                <a
                                    href="https://www.linkedin.com/in/yuvraj-singh022/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all inline-flex items-center gap-2"
                                >
                                    <Linkedin size={20} />
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Profile Photo */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform translate-x-4 translate-y-4"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform -translate-x-2 -translate-y-2 backdrop-blur-sm"></div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl glass-card">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-6 -right-6 glass-card px-6 py-3 rounded-lg shadow-xl border border-white/10 hidden md:block"
                            >
                                <span className="font-bold text-primary">4th</span> Year Student
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default About;
