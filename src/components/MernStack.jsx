import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, User, RefreshCw } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import MernBackground from './MernBackground';

const flow = [
    { label: 'User', sub: 'Sends a request from the browser', icon: <User />, color: '#38bdf8', phase: 'request' },
    { label: 'React Frontend', sub: 'Renders the UI and calls the API', icon: <FaReact />, color: '#61DAFB', phase: 'request' },
    { label: 'Express API', sub: 'Routes the request, runs middleware', icon: <SiExpress />, color: '#a5b4fc', phase: 'request' },
    { label: 'Node.js Server', sub: 'Executes the business logic', icon: <FaNodeJs />, color: '#8CC84B', phase: 'request' },
    { label: 'MongoDB Database', sub: 'Reads / writes the documents', icon: <SiMongodb />, color: '#4DB33D', phase: 'request' },
    { label: 'Response', sub: 'Data travels back up the stack', icon: <RefreshCw />, color: '#10b981', phase: 'response' },
    { label: 'React UI', sub: 'State updates, the view re-renders', icon: <FaReact />, color: '#10b981', phase: 'response' },
];

const cards = [
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
        color: '#4DB33D',
        text: 'Document-oriented NoSQL database used to store application data in a flexible JSON-like structure.',
    },
    {
        name: 'Express.js',
        icon: <SiExpress />,
        color: '#a5b4fc',
        text: 'Lightweight Node.js web framework used to build APIs, routes and backend application logic.',
    },
    {
        name: 'React.js',
        icon: <FaReact />,
        color: '#61DAFB',
        text: 'JavaScript library for building fast, interactive and component-based user interfaces.',
    },
    {
        name: 'Node.js',
        icon: <FaNodeJs />,
        color: '#8CC84B',
        text: 'JavaScript runtime that enables scalable server-side application development.',
    },
];

const SectionHeading = ({ children }) => (
    <h2 className="text-3xl font-bold text-white mb-2 relative inline-block tracking-tight">
        {children}
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
        />
    </h2>
);

const MernStack = () => {
    const [active, setActive] = useState(null);

    return (
        <section id="stack" className="relative w-full py-20 bg-dark text-white overflow-hidden">
            <MernBackground className="opacity-[0.18]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest text-accent uppercase">
                        The Stack
                    </span>
                    <h2 className="mt-5 text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
                        Build Your Next Web Application with{' '}
                        <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                            MERN Stack
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-400 text-sm sm:text-base">
                        Full Stack Development using MongoDB, Express.js, React.js and Node.js.
                    </p>
                    <a
                        href="#contact"
                        className="mt-7 inline-flex items-center gap-2 px-6 py-2.5 text-sm bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                    >
                        Start Your Project
                        <ArrowRight size={16} />
                    </a>
                </motion.div>

                {/* Architecture flow diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <div className="text-center mb-3">
                        <SectionHeading>Architecture &amp; Request Flow</SectionHeading>
                    </div>
                    <p className="text-center text-gray-500 text-xs font-mono tracking-wider mb-10">
                        REQUEST&nbsp;→&nbsp;&nbsp;&nbsp;&nbsp;←&nbsp;RESPONSE &nbsp;·&nbsp; hover a step to inspect it
                    </p>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-stretch justify-center gap-2">
                        {flow.map((step, i) => (
                            <React.Fragment key={step.label + i}>
                                <motion.div
                                    onMouseEnter={() => setActive(i)}
                                    onMouseLeave={() => setActive(null)}
                                    animate={{
                                        scale: active === i ? 1.06 : 1,
                                        opacity: active === null || active === i ? 1 : 0.45,
                                    }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                                    className="relative w-56 sm:w-32 rounded-2xl border bg-dark-card/70 backdrop-blur-sm p-3 text-center cursor-default"
                                    style={{
                                        borderColor: active === i ? step.color : 'rgba(255,255,255,0.08)',
                                        boxShadow: active === i ? `0 0 32px -6px ${step.color}` : 'none',
                                    }}
                                >
                                    <div
                                        className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg text-lg"
                                        style={{ color: step.color, background: `${step.color}1a` }}
                                    >
                                        {step.icon}
                                    </div>
                                    <div className="text-xs font-semibold text-white leading-tight">{step.label}</div>
                                    <div className="mt-1 text-[10px] leading-snug text-gray-400">{step.sub}</div>
                                    {step.phase === 'response' && (
                                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-dark">
                                            return
                                        </span>
                                    )}
                                </motion.div>

                                {i < flow.length - 1 && (
                                    <div className="flex items-center justify-center text-gray-600 shrink-0">
                                        <motion.span
                                            animate={{ opacity: [0.25, 1, 0.25] }}
                                            transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
                                        >
                                            <ArrowRight size={15} className="hidden sm:block" />
                                            <ArrowDown size={15} className="sm:hidden" />
                                        </motion.span>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                {/* Technology cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24"
                >
                    <div className="text-center mb-12">
                        <SectionHeading>MERN Technologies</SectionHeading>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {cards.map((c, i) => (
                            <motion.div
                                key={c.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="group relative rounded-2xl border border-white/8 bg-dark-card/60 backdrop-blur-sm p-6 transition-colors duration-300 hover:border-white/20"
                            >
                                <div
                                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-3xl transition-transform duration-300 group-hover:scale-110"
                                    style={{ color: c.color, background: `${c.color}1a` }}
                                >
                                    {c.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white">{c.name}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-400">{c.text}</p>
                                <div
                                    className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                                    style={{ background: c.color }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MernStack;
