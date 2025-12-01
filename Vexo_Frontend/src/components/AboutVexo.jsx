import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Smartphone, Wifi, Activity, Shield, Layers } from 'lucide-react';

const WhatIsVexo = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-black">
            {/* Background Parallax/Grid Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Holographic AI Orb */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative flex items-center justify-center h-[500px]"
                    >
                        {/* Rotating Rings */}
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full border border-[var(--color-primary)]/30"
                                style={{
                                    width: `${300 + i * 60}px`,
                                    height: `${300 + i * 60}px`,
                                    borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
                                }}
                                animate={{
                                    rotate: i % 2 === 0 ? 360 : -360,
                                    scale: [1, 1.02, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                        ))}

                        {/* Core Orb */}
                        <div className="relative w-48 h-48">
                            <div className="absolute inset-0 rounded-full bg-[var(--color-primary)]/10 blur-xl animate-pulse"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/50 shadow-[0_0_30px_var(--color-primary)] flex items-center justify-center overflow-hidden backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent"></div>
                                {/* Hologram Flicker Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-white/10"
                                    animate={{ opacity: [0, 0.2, 0, 0.1, 0] }}
                                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: Math.random() * 5 }}
                                />
                                <Cpu className="w-20 h-20 text-[var(--color-primary)] drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
                            </div>

                            {/* Orbiting Particles */}
                            {[0, 120, 240].map((deg, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-4 h-4 bg-[var(--color-secondary)] rounded-full shadow-[0_0_10px_var(--color-secondary)]"
                                    style={{ top: '50%', left: '50%' }}
                                    animate={{
                                        x: [Math.cos(deg * Math.PI / 180) * 100, Math.cos((deg + 360) * Math.PI / 180) * 100],
                                        y: [Math.sin(deg * Math.PI / 180) * 100, Math.sin((deg + 360) * Math.PI / 180) * 100],
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                />
                            ))}
                        </div>

                        {/* Node Connections */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <motion.line
                                x1="50%" y1="50%" x2="80%" y2="20%"
                                stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.3"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                            <motion.line
                                x1="50%" y1="50%" x2="20%" y2="80%"
                                stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.3"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.2 }}
                            />
                            <motion.line
                                x1="50%" y1="50%" x2="80%" y2="80%"
                                stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.3"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.4 }}
                            />
                        </svg>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight">
                            WHAT IS <span className="text-gradient">VEXO?</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                VEXO is the world's first <span className="text-[var(--color-primary)] font-bold">offline-first Personal AGI Operating System</span> built around a multi-agent AI brain, designed to evolve with you.
                            </p>
                            <p>
                                It fuses reasoning, perception, automation, memory, self-optimization, and ambient intelligence to create a living AI ecosystem that adapts to you.
                            </p>
                        </div>

                        {/* Neon Divider */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent my-10 opacity-50"></div>

                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                <Activity className="w-6 h-6 text-[var(--color-secondary)]" />
                                A Personal AGI OS That Lives Across Your Devices
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 group">
                                    <div className="p-2 rounded bg-white/5 border border-white/10 group-hover:border-[var(--color-primary)] transition-colors">
                                        <Cpu className="w-5 h-5 text-[var(--color-primary)]" />
                                    </div>
                                    <span className="text-gray-400 group-hover:text-white transition-colors"><strong className="text-white">PC Brain</strong> (full AGI)</span>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <div className="p-2 rounded bg-white/5 border border-white/10 group-hover:border-[var(--color-primary)] transition-colors">
                                        <Smartphone className="w-5 h-5 text-[var(--color-primary)]" />
                                    </div>
                                    <span className="text-gray-400 group-hover:text-white transition-colors"><strong className="text-white">Mobile Companion</strong> (hybrid mode)</span>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <div className="p-2 rounded bg-white/5 border border-white/10 group-hover:border-[var(--color-primary)] transition-colors">
                                        <Wifi className="w-5 h-5 text-[var(--color-primary)]" />
                                    </div>
                                    <span className="text-gray-400 group-hover:text-white transition-colors"><strong className="text-white">IoT Controller</strong> (room-aware intelligence)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-panel p-6 border-l-4 border-l-[var(--color-secondary)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h4 className="text-xl font-bold mb-2 font-display text-[var(--color-secondary)]">Not a Chatbot. Not a Tool. A Real OS.</h4>
                            <p className="text-sm text-gray-400 relative z-10">
                                VEXO is an AI engineer, an automation engine, a personal assistant, a memory system, a home security guardian, and an evolving intelligence — all inside one holographic interface.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsVexo;
