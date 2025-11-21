import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Cpu } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-[var(--color-primary)]/30">
                        <Zap className="w-4 h-4 text-[var(--color-primary)]" />
                        <span className="text-sm font-display tracking-widest text-[var(--color-primary)]">SYSTEM ONLINE</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            VEXO
                        </span>
                        <span className="block text-2xl md:text-4xl font-light mt-4 text-gray-400 font-display tracking-widest">
                            Your Personal <span className="text-gradient font-bold">AGI Operating System</span>
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                        The first offline-first, multi-agent OS designed to evolve with you.
                        Reactive intelligence meets proactive automation.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-[var(--color-primary)] text-black font-bold font-display rounded-none skew-x-[-10deg] hover:bg-cyan-300 transition-colors flex items-center gap-2 group"
                        >
                            <span className="skew-x-[10deg]">INITIALIZE SYSTEM</span>
                            <ChevronRight className="w-5 h-5 skew-x-[10deg] group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border border-[var(--color-glass-border)] text-white font-bold font-display rounded-none skew-x-[-10deg] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            <span className="skew-x-[10deg]">VIEW ARCHITECTURE</span>
                        </motion.button>
                    </div>
                </motion.div>

                {/* AI Orb Animation Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-20 relative w-64 h-64 mx-auto"
                >
                    <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/30 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-4 rounded-full border-2 border-[var(--color-secondary)]/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 blur-xl animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(0,243,255,0.3)]">
                            <Cpu className="w-16 h-16 text-white animate-pulse" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
