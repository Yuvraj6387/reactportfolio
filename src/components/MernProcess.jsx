import React from 'react';
import { motion } from 'framer-motion';
import {
    ClipboardList,
    PenTool,
    LayoutDashboard,
    Server,
    Database,
    Plug,
    FlaskConical,
    Rocket,
} from 'lucide-react';

const steps = [
    { title: 'Requirement Analysis', desc: 'Define the scope, core features, data models and success criteria together with the client.', icon: <ClipboardList size={18} /> },
    { title: 'UI/UX Design', desc: 'Wireframes and high-fidelity mockups for a clean, responsive and accessible interface.', icon: <PenTool size={18} /> },
    { title: 'React Frontend', desc: 'Build reusable components, routing and state management to bring the design to life.', icon: <LayoutDashboard size={18} /> },
    { title: 'Node / Express Backend', desc: 'Set up the server, REST API routes, authentication and middleware layers.', icon: <Server size={18} /> },
    { title: 'MongoDB Integration', desc: 'Design schemas and indexes, then connect the database through Mongoose.', icon: <Database size={18} /> },
    { title: 'API Integration', desc: 'Wire the frontend to the backend and plug in any required third-party services.', icon: <Plug size={18} /> },
    { title: 'Testing', desc: 'Manual and automated testing across functionality, edge cases and performance.', icon: <FlaskConical size={18} /> },
    { title: 'Deployment', desc: 'Ship to production with CI/CD, environment configuration and monitoring in place.', icon: <Rocket size={18} /> },
];

const MernProcess = () => {
    return (
        <section id="process" className="w-full py-24 bg-dark text-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-4"
                >
                    <h2 className="text-3xl font-bold text-white mb-2 relative inline-block tracking-tight">
                        MERN Development Process
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
                        />
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm">From first conversation to a deployed, production-ready app</p>
                </motion.div>

                <div className="relative mt-16">
                    {/* spine */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/60 via-white/10 to-accent/60" />

                    <div className="space-y-6 md:space-y-4">
                        {steps.map((step, i) => {
                            const left = i % 2 === 0;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.45 }}
                                    className={`relative pl-12 md:pl-0 md:w-1/2 ${left ? 'md:pr-14 md:mr-auto md:text-right' : 'md:pl-14 md:ml-auto'}`}
                                >
                                    {/* node */}
                                    <span
                                        className={`absolute z-10 top-1 left-4 md:left-auto ${left ? 'md:-right-[18px]' : 'md:-left-[18px]'} -translate-x-1/2 md:translate-x-0 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-dark-card text-primary shadow-[0_0_20px_-4px_rgba(129,140,248,0.7)]`}
                                    >
                                        {step.icon}
                                    </span>

                                    <div className="rounded-2xl border border-white/8 bg-dark-card/60 backdrop-blur-sm p-5 hover:border-white/20 transition-colors">
                                        <div className={`flex items-center gap-2 ${left ? 'md:justify-end' : ''}`}>
                                            <span className="text-[11px] font-mono text-gray-500">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className="text-base font-bold text-white">{step.title}</h3>
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MernProcess;
