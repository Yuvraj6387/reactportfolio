import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section className="w-full py-24 bg-dark relative overflow-hidden" id="contact">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] opacity-30"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Let's Work <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Together.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                            I'm always open to discussing product design work or partnership opportunities. Let's create something amazing!
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center space-x-5 text-gray-300 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                                    <Mail size={22} className="text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Email Me</p>
                                    <span className="text-lg font-medium text-white">yuvipaji222002@gmail.com</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-5 text-gray-300 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                                    <Phone size={22} className="text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Call Me</p>
                                    <span className="text-lg font-medium text-white">+91 7398858039</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-5 text-gray-300 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                                    <MapPin size={22} className="text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Location</p>
                                    <span className="text-lg font-medium text-white">India</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {[Github, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}

                                    href={idx === 0 ? "https://github.com/Yuvraj6387" : idx === 1 ? "https://www.linkedin.com/in/yuvraj-singh022/" : "https://www.instagram.com/_yuvi__22/"}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110 border border-white/5"
                                >
                                    <Icon size={18} />
                                </a>

                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <form className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                            {/* Form Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>

                            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-4 bg-dark-card/50 border border-white/10 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none text-white placeholder-gray-600 transition-all font-light"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-5 py-4 bg-dark-card/50 border border-white/10 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none text-white placeholder-gray-600 transition-all font-light"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-4 bg-dark-card/50 border border-white/10 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none text-white placeholder-gray-600 transition-all font-light"
                                        placeholder="Project Discussion"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                    <textarea
                                        rows="5"
                                        className="w-full px-5 py-4 bg-dark-card/50 border border-white/10 rounded-xl focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none text-white placeholder-gray-600 transition-all resize-none font-light"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
