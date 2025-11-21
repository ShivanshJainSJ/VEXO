import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Cpu, Globe, MessageSquare, Sparkles } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        // Simulate sending
        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 5000);
        }, 1500);
    };

    return (
        <section className="py-20 bg-black relative min-h-screen overflow-hidden flex items-center justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Parallax Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] animate-[pulse_4s_ease-in-out_infinite]"></div>

                {/* Moving Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
                        animate={{
                            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                            opacity: [0, 0.8, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                {/* Vertical Energy Lines */}
                <motion.div
                    className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                    animate={{ opacity: [0.1, 0.5, 0.1], height: ['0%', '100%', '0%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
                    animate={{ opacity: [0.1, 0.5, 0.1], height: ['0%', '100%', '0%'] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* 1. SECTION TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 font-display tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">CONTACT</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Connect with the creator of VEXO and Avero.
                    </p>
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_var(--color-primary)] animate-pulse"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* PART 1: Animated Contact Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Pulsing Rings Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none -z-10">
                            <motion.div
                                className="absolute inset-0 border border-cyan-400/10 rounded-full"
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-10 border border-purple-500/10 rounded-full"
                                animate={{ rotate: -360, scale: [1, 0.95, 1] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden group">
                            {/* Holographic Glow */}
                            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2 font-display">Ready to connect?</h3>
                                <p className="text-gray-400 text-sm">Reach out for collaboration, ideas, feedback, or to join the vision of personal AGI.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1">Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 placeholder-gray-600"
                                            placeholder="Enter your name"
                                            required
                                        />
                                        {/* Neon Spark on Focus (simulated with border effect above) */}
                                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-focus-within/input:w-full transition-all duration-500"></div>
                                    </div>
                                </div>

                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1">Email</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 placeholder-gray-600"
                                            placeholder="Enter your email"
                                            required
                                        />
                                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-focus-within/input:w-full transition-all duration-500"></div>
                                    </div>
                                </div>

                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1">Message</label>
                                    <div className="relative">
                                        <textarea
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            rows="4"
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 placeholder-gray-600 resize-none"
                                            placeholder="Enter your message"
                                            required
                                        ></textarea>
                                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-focus-within/input:w-full transition-all duration-500"></div>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 243, 255, 0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSending || isSent}
                                    className={`w-full py-4 rounded-lg font-bold font-display tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 ${isSent ? 'bg-green-500 text-black' : 'bg-cyan-400 text-black hover:bg-cyan-300'}`}
                                >
                                    {isSending ? (
                                        <span className="animate-pulse">Sending...</span>
                                    ) : isSent ? (
                                        <>
                                            <Sparkles className="w-5 h-5" />
                                            Message Sent
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-xs text-gray-500 italic">
                                    “Your message will be answered personally by Shivansh — the creator of VEXO and founder of Avero.”
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* PART 2: Creator & Avero Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Creator Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
                                <Cpu className="w-24 h-24 text-cyan-400" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6 font-display flex items-center gap-3">
                                <span className="w-2 h-8 bg-cyan-400 rounded-full"></span>
                                CREATOR INFO
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center gap-4 group/item">
                                    <div className="p-3 rounded-lg bg-white/5 text-cyan-400 group-hover/item:bg-cyan-400/20 group-hover/item:text-white transition-colors">
                                        <UserIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Name</p>
                                        <p className="text-white font-bold text-lg">Shivansh Jain</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group/item">
                                    <div className="p-3 rounded-lg bg-white/5 text-cyan-400 group-hover/item:bg-cyan-400/20 group-hover/item:text-white transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                                        <p className="text-white font-bold text-lg">sjshivanshjain@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-2">
                                    <SocialLink icon={<Github />} href="https://github.com/ShivanshJainSJ" label="GitHub" />
                                    <SocialLink icon={<Linkedin />} href="https://www.linkedin.com/in/shivansh-jain-sj/" label="LinkedIn" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Avero Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass-panel p-8 rounded-2xl border border-purple-500/30 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
                                <Globe className="w-24 h-24 text-purple-500" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6 font-display flex items-center gap-3">
                                <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                                AVERO LABS
                            </h3>

                            <div className="space-y-4 relative z-10">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Role</p>
                                    <p className="text-white font-bold text-lg">Creator of VEXO</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Tagline</p>
                                    <p className="text-purple-400 italic">"Building the future of personal AGI."</p>
                                </div>

                                <div className="pt-4 flex items-center gap-2">
                                    <div className="h-px flex-1 bg-white/10"></div>
                                    <span className="text-xs text-gray-500 uppercase">AI Innovation Lab</span>
                                    <div className="h-px flex-1 bg-white/10"></div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ icon, href, label }) => (
    <motion.a
        href={href}
        whileHover={{ scale: 1.1, color: '#00F3FF' }}
        className="p-3 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 transition-colors border border-white/5 hover:border-cyan-400/50"
        title={label}
    >
        {React.cloneElement(icon, { className: "w-5 h-5" })}
    </motion.a>
);

const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

export default Contact;
