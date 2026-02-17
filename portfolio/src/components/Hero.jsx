import React, { useState, useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from 'three';
import profileImg from '../assets/yuvraj.png';

const Hero = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x0f172a, // Slate 900
                color1: 0x818cf8, // Indigo 400
                color2: 0xec4899, // Pink 500
                backgroundAlpha: 1.00,
                birdSize: 1.50,
                wingSpan: 30.00,
                speedLimit: 5.00,
                separation: 20.00,
                alignment: 20.00,
                cohesion: 20.00,
                quantity: 3.00 // Reduced from 4.00 for performance
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={myRef} className="h-screen w-full flex flex-col justify-center items-center bg-dark relative overflow-hidden">

            <div className="z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden relative z-20">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                <div className="text-green-500">Currently learning DSA and next.js</div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                >

                    <span className='text-secondary text-green-500"'>I'm</span> <span className="text-secondary text-white">Yuvraj Singh</span>
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
                            'Software Developer',
                            'Currently Learning DSA',
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        className="text-white"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-8"
                >
                    <div className="mt-8">
                        <a
                            href="/path/to/Yuvraj_Resume.pdf"
                            download="Yuvraj_Resume.pdf"
                            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer relative z-30 inline-flex items-center gap-2"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
