import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experience = [
    {
        role: 'Front End Developer',
        company: 'Prodesk IT Engineering Services',
        period: 'Jun 2025 – Jul 2025',
        location: 'Noida, India',
        metrics: [
            ['10+', 'reusable components'],
            ['5+', 'REST endpoints'],
            ['30%', 'faster page loads'],
        ],
        points: [
            'Built 10+ reusable React components for a production web application, standardizing layout and form behaviour across desktop and mobile.',
            'Integrated 5+ REST endpoints into frontend views, removing roughly 40% of the manual data handling the team did before.',
            'Cut page load time by 30% by profiling render bottlenecks and restructuring component hierarchies and data fetching.',
            'Shipped authenticated user modules and their database queries, reviewed pull requests, and resolved defects across frontend and backend.',
        ],
        tech: ['React', 'REST APIs', 'Node.js', 'Git'],
    },
];

const Experience = () => (
    <section id="experience" className="w-full py-20 px-4 bg-dark text-white">
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono tracking-widest text-accent uppercase">
                    Experience
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight">Where I've Worked</h2>
            </motion.div>

            {experience.map((job, i) => (
                <motion.article
                    key={job.company}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-6 md:p-8 hover:border-primary/40 transition-colors duration-500"
                >
                    <span className="absolute top-6 right-6 text-5xl font-black text-white/[0.05] select-none">
                        {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex items-start gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center text-primary">
                            <Briefcase size={22} />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold">{job.role}</h3>
                            <p className="text-secondary font-medium">{job.company}</p>
                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
                                <span className="inline-flex items-center gap-1.5"><Calendar size={13} />{job.period}</span>
                                <span className="inline-flex items-center gap-1.5"><MapPin size={13} />{job.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                        {job.metrics.map(([value, label]) => (
                            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center">
                                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{value}</div>
                                <div className="text-[11px] text-gray-400 mt-0.5">{label}</div>
                            </div>
                        ))}
                    </div>

                    <ul className="mt-6 space-y-3">
                        {job.points.map((point) => (
                            <li key={point} className="flex gap-3 text-sm md:text-[15px] text-gray-300 leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                {point}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-gray-300">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.article>
            ))}
        </div>
    </section>
);

export default Experience;
