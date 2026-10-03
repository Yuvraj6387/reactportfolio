import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const links = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
];

const socials = [
    { label: 'GitHub', href: 'https://github.com/Yuvraj6387', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuvraj-singh022/', icon: Linkedin },
    { label: 'Email', href: 'mailto:singhyuvraj02202@gmail.com', icon: Mail },
];

const Footer = () => (
    <footer className="w-full bg-dark-card border-t border-white/5 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 items-start">
            <div>
                <a href="#home" className="text-xl font-bold text-white">
                    <span className="text-secondary">Yuvraj</span>Portfolio.
                </a>
                <p className="mt-2 text-sm max-w-xs">
                    Full stack MERN developer building fast, reliable web applications.
                </p>
            </div>

            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:justify-center">
                {links.map(([name, href]) => (
                    <a key={name} href={href} className="hover:text-white transition-colors">{name}</a>
                ))}
            </nav>

            <div className="flex gap-3 md:justify-end">
                {socials.map(({ label, href, icon: Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
                    >
                        <Icon size={18} />
                    </a>
                ))}
            </div>
        </div>

        <div className="border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-xs">
                <p>&copy; {new Date().getFullYear()} Yuvraj Singh. Built with React, Tailwind & Framer Motion.</p>
                <a href="#home" aria-label="Back to top" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                    Top <ArrowUp size={14} />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
