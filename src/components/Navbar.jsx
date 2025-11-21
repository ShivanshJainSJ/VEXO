import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import VexoLogo from './VexoLogo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Features', path: '/features' },
        { name: 'Architecture', path: '/architecture' },
        { name: 'UI', path: '/ui' },
        { name: 'Roadmap', path: '/roadmap' },
        { name: 'Creator', path: '/creator' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <VexoLogo />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold font-display tracking-wider text-white group-hover:text-[var(--color-primary)] transition-colors">VEXO</span>
                            <span className="text-[10px] tracking-[0.2em] text-[var(--color-primary)] opacity-70 group-hover:opacity-100 transition-opacity">SYSTEM CORE</span>
                        </div>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`font-display text-sm transition-all duration-300 uppercase tracking-widest ${location.pathname === link.path ? 'text-[var(--color-primary)] text-glow' : 'text-gray-300 hover:text-[var(--color-primary)] hover:text-glow'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium font-display uppercase ${location.pathname === link.path ? 'text-[var(--color-primary)] bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
