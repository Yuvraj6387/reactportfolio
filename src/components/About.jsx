import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import profileImg from '../assets/yuvi.webp';

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
                                I'm a full stack developer who builds and ships MERN applications end to end: React interfaces,
                                Express REST APIs, MongoDB and MySQL data models, JWT and Passport authentication, and deployment
                                on AWS, Render, Vercel and Netlify.
                            </p>
                            <p>
                                During my internship at Prodesk I worked on a production web app, and on my own I built an
                                AI interview platform on the Gemini and Groq APIs, cutting its response time from over 60 seconds to under 2.
                            </p>

                            <dl className="grid grid-cols-2 gap-3 text-sm">
                                {[
                                    ['Based in', 'Mohali, Punjab'],
                                    ['Education', 'B.Tech CSE · 2026'],
                                    ['Focus', 'MERN · AI integrations'],
                                    ['Status', 'Open to full-time roles'],
                                ].map(([k, v]) => (
                                    <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                                        <dt className="text-[11px] uppercase tracking-widest text-gray-500">{k}</dt>
                                        <dd className="mt-0.5 font-medium text-white">{v}</dd>
                                    </div>
                                ))}
                            </dl>

                            <div className="pt-2">
                                <a
                                    href="https://www.linkedin.com/in/yuvraj-singh022/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 text-sm bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all inline-flex items-center gap-2"
                                >
                                    <Linkedin size={16} />
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
                                className="absolute -bottom-6 -right-6 glass-card px-5 py-3 rounded-full shadow-xl border border-white/10 hidden md:flex items-center gap-2"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                                </span>
                                <span className="text-sm font-semibold text-white whitespace-nowrap">Open to Work</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default About;
