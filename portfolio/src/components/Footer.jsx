import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-6 bg-black text-center text-gray-500 text-sm border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Yuvraj Singh. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
