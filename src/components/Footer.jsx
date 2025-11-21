import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Shield, Zap, Globe, Cpu, ArrowRight } from 'lucide-react';
import VexoLogo from './VexoLogo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About VEXO', path: '/about' },
        { name: 'Features', path: '/features' },
        { name: 'Architecture', path: '/architecture' },
        { name: 'Roadmap', path: '/roadmap' },
        { name: 'UI Showcase', path: '/ui' },
        { name: 'Creator', path: '/creator' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: <Github />, href: "https://github.com/ShivanshJainSJ", label: "GitHub" },
        { icon: <Linkedin />, href: "https://www.linkedin.com/in/shivansh-jain-sj/", label: "LinkedIn" },
        { icon: <Instagram />, href: "#", label: "Instagram" },
        { icon: <Mail />, href: "mailto:sjshivanshjain@gmail.com", label: "Email" },
    ];

    return (
        <footer className="relative bg-black pt-20 overflow-hidden border-t border-white/10">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                        initial={{ x: Math.random() * window.innerWidth, y: Math.random() * 400 }}
                        animate={{
                            y: [Math.random() * 400, Math.random() * 400 - 50],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* BLOCK 1: VEXO Logo + Tagline */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <VexoLogo />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold font-display tracking-wider text-white group-hover:text-cyan-400 transition-colors">VEXO</span>
                                <span className="text-[10px] tracking-[0.2em] text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity">SYSTEM CORE</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The world's first offline-first Personal AGI Operating System. Designed for privacy, autonomy, and seamless intelligence.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            SYSTEM OPERATIONAL
                        </div>
                    </div>

                    {/* BLOCK 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display tracking-wider flex items-center gap-2">
                            <Zap className="w-4 h-4 text-purple-500" />
                            QUICK ACCESS
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-purple-500" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* BLOCK 3: Avero (Brand Section) */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display tracking-wider flex items-center gap-2">
                            <Globe className="w-4 h-4 text-purple-500" />
                            INNOVATION LAB
                        </h4>
                        <div className="glass-panel p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                                        <Cpu className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <span className="font-bold text-white tracking-widest">AVERO</span>
                                </div>
                                <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                                    Building the future of personal AGI systems. Empowering individuals through decentralized intelligence.
                                </p>
                                <div className="h-px w-full bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* BLOCK 4: Social Icons + Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display tracking-wider flex items-center gap-2">
                            <Shield className="w-4 h-4 text-purple-500" />
                            CONNECT
                        </h4>
                        <div className="flex gap-4 mb-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ y: -3, color: '#00F3FF' }}
                                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-cyan-400 transition-colors border border-white/5 hover:border-cyan-400/30"
                                    title={social.label}
                                >
                                    {React.cloneElement(social.icon, { className: "w-5 h-5" })}
                                </motion.a>
                            ))}
                        </div>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-purple-500" />
                                <a href="mailto:sjshivanshjain@gmail.com" className="hover:text-white transition-colors">sjshivanshjain@gmail.com</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-purple-500" />
                                India
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM STATUS BAR */}
            <div className="border-t border-white/10 bg-black/80 backdrop-blur-md py-3 relative overflow-hidden">
                {/* Scanning Line */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest font-mono text-gray-500">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2 text-cyan-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            VEXO SYSTEM STATUS: ONLINE
                        </span>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <span>VERSION v1.0</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span>© {currentYear} AVERO LABS</span>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <span>ALL RIGHTS RESERVED</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
