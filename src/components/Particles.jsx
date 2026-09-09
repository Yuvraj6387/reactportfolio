import React from 'react';
import { motion } from 'framer-motion';

// Randomised once at module load (not during render) so the purity rule
// is satisfied and the particle field stays stable across re-renders.
const PARTICLES = Array.from({ length: 15 }, () => ({
    x: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    size: Math.random() * 4 + 1,
}));

const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
            <motion.div
                key={i}
                className="absolute bg-primary rounded-full opacity-10"
                initial={{ x: `${p.x}%`, y: '110%', scale: 0 }}
                animate={{ y: '-10%', scale: [0, 1, 0], opacity: [0, 0.2, 0] }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
                style={{ width: `${p.size}px`, height: `${p.size}px`, willChange: 'transform, opacity' }}
            />
        ))}
    </div>
);

export default Particles;
