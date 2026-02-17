import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
    {
        title: 'Full Stack Web Development- MERN',
        issuer: 'Apna college',
        date: '2025',
        description: 'Comprehensive bootcamp covering React, Node.js, Express, and MongoDB.',
        link: 'https://mycourse.app/HjL4zVyv2zBJcuHiC',
        color: 'from-cyan-400 to-blue-500'
    },
    {
        title: 'Data Structures & Algorithms',
        issuer: 'Apna College',
        date: '2025',
        description: 'Mastered core DSA concepts in Java/C++, optimized for competitive programming.',
        link: '#',
        color: 'from-purple-400 to-pink-500'
    },
    {
        title: 'Data Analytics Job Simulation',
        issuer: 'Deloitte',
        date: '2025',
        description: 'Deep dive into hooks, context, performance optimization, and patterns.',
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_uvbRBaS768pjx2fqZ_1754380312714_completion_certificate.pdf',
        color: 'from-blue-400 to-indigo-500'
    },
    {
        title: 'Basic SQL and CSS',
        issuer: 'HackerRank',
        date: '2024',
        description: 'Building scalable APIs and automation scripts using Python.',
        link: 'https://www.hackerrank.com/certificates/iframe/0e9e9377a5c7',
        color: 'from-emerald-400 to-teal-500'
    },
    {
        title: 'MongoDB CRUD Operations in Node.js',
        issuer: 'MongoDB',
        date: '2025',
        description: 'Learn how to perform CRUD operations in Node.js using MongoDB.',
        link: 'https://learn.mongodb.com/c/q2eO-x_HR76UD3Z4LEnI7Q',
        color: 'from-emerald-400 to-teal-500'
    }
];

const Particles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-primary rounded-full opacity-10"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: "110%",
                        scale: 0
                    }}
                    animate={{
                        y: "-10%",
                        scale: [0, 1, 0],
                        opacity: [0, 0.2, 0]
                    }}
                    transition={{
                        duration: Math.random() * 15 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                    style={{
                        width: Math.random() * 4 + 1 + "px",
                        height: Math.random() * 4 + 1 + "px",
                        willChange: "transform, opacity"
                    }}
                />
            ))}
        </div>
    );
};

const CertificationCard = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-6 relative pl-8 md:pl-10"
        >
            {/* Dot on the timeline */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className={`absolute left-[-5px] top-5 w-4 h-4 rounded-full bg-gradient-to-r ${cert.color} shadow-[0_0_12px_rgba(56,189,248,0.8)] z-20 border-2 border-dark`}
            ></motion.div>

            {/* Content Card */}
            <motion.div
                whileHover={{ scale: 1.01, backgroundColor: "rgba(23, 23, 23, 0.8)" }}
                className="group relative p-4 rounded-lg border border-white/5 bg-neutral-900/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/10"
            >
                <div className="relative z-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-base md:text-lg font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                {cert.title}
                            </h3>
                            <a
                                href={cert.link}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary hover:text-white"
                            >
                                <ExternalLink size={14} />
                            </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                            <span className="text-primary/90 font-medium flex items-center gap-1">
                                <Award size={12} />
                                {cert.issuer}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                {cert.date}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Certifications = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0.05, 0.9], [0, 1]);

    return (
        <section className="w-full py-20 bg-dark relative overflow-hidden" ref={containerRef}>
            <Particles />

            <div className="max-w-3xl mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-2 relative inline-block tracking-tight">
                        Certifications
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative pl-2 md:pl-4">
                    {/* The Static Vertical Line (Background Pipe) */}
                    <div className="absolute left-[2px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full"></div>

                    {/* The Animated Vertical Line (Foreground Fill) with Moving Gradient */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[2px] top-0 bottom-0 w-[2px] rounded-full z-10 overflow-hidden shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    >
                        <motion.div
                            className="w-full h-[200%] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"
                            animate={{ y: ["-50%", "0%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>

                    {/* Timeline Items */}
                    <div className="space-y-1">
                        {certifications.map((cert, index) => (
                            <CertificationCard key={index} cert={cert} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certifications;
