import React from 'react';
import { motion } from 'framer-motion';
import {
    User, Code, Cpu, Brain, Layers, Zap, Globe, Terminal,
    Sparkles, Lightbulb, Rocket, Target, Shield, Network
} from 'lucide-react';
import creatorProfile from '../assets/creator-profile.jpg';

const Creator = () => {
    const skills = [
        { name: "AI Engineering", icon: <Brain /> },
        { name: "Deep Learning", icon: <Network /> },
        { name: "Multi-Agent Systems", icon: <Layers /> },
        { name: "Automation Design", icon: <Zap /> },
        { name: "Machine Learning", icon: <Cpu /> },
        { name: "Generative AI", icon: <Sparkles /> },
        { name: "System Architecture", icon: <Globe /> },
        { name: "Computer Vision", icon: <EyeIcon /> },
        { name: "NLP", icon: <Terminal /> },
    ];

    const journey = [
        { year: "Start", title: "Beginning of AI Learning", desc: "First steps into the world of artificial intelligence." },
        { year: "Build", title: "First ML Projects", desc: "Developing initial machine learning models and experiments." },
        { year: "Inception", title: "Starting VEXO", desc: "Conceptualizing the offline-first personal AGI OS." },
        { year: "Design", title: "Multi-Agent Architecture", desc: "Designing the core brain and agent interactions." },
        { year: "Expand", title: "Mobile + IoT Expansion", desc: "Integrating mobile companion and smart home control." },
        { year: "Founding", title: "Forming Avero", desc: "Establishing the innovation lab behind VEXO." },
        { year: "Future", title: "Targeting VEXO v20", desc: "Aiming for the final release of the complete AGI OS." },
    ];

    return (
        <section className="py-20 bg-black relative min-h-screen overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
                <motion.div
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. PAGE TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 font-display tracking-tight">
                        <span className="text-cyan-400">ABOUT THE</span> <span className="text-purple-500">CREATOR</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        The mind behind VEXO — a personal AGI OS built for the future.
                    </p>
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_var(--color-primary)]"></div>
                </motion.div>

                {/* 2. CREATOR BIO + HOLOGRAPHIC PROFILE */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
                    {/* Left Side — Hologram Card */}
                    <div className="lg:col-span-5 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-80 h-[450px] rounded-2xl border border-cyan-400/30 bg-black/50 backdrop-blur-md overflow-hidden group shadow-[0_0_30px_rgba(0,243,255,0.1)]"
                        >
                            {/* Holographic Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.5)_2px)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>

                            {/* Profile Image */}
                            <div className="absolute inset-4 rounded-xl border border-white/10 overflow-hidden bg-gray-900 flex items-center justify-center">
                                <img src={creatorProfile} alt="Shivansh Jain" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                                {/* Animated Scanner */}
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_10px_rgba(0,243,255,0.8)]"
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            {/* Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white font-display">Shivansh Jain</h3>
                                <p className="text-cyan-400 text-sm font-bold tracking-wider mb-1">Creator of VEXO</p>
                                <p className="text-gray-400 text-xs">BTech CSE (AI)</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side — Biography */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 text-gray-300 leading-relaxed text-lg"
                        >
                            <p>
                                Hi, I'm <strong className="text-white">Shivansh Jain</strong> — the creator of VEXO, the world’s first offline-first Personal AGI Operating System.
                            </p>
                            <p>
                                I am pursuing BTech CSE (AI) and building VEXO as a vision to redefine how humans interact with intelligence. Instead of being “just another assistant”, VEXO is designed as a living multi-agent AI ecosystem that evolves, learns, adapts, and unifies your entire digital environment — PC, Mobile, and IoT.
                            </p>

                            <div className="glass-panel p-6 border-l-4 border-purple-500 my-8">
                                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-purple-500" />
                                    I specialize in:
                                </h4>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    {['AI Engineering', 'Multi-Agent Architectures', 'Machine Learning', 'GenAI', 'System Design', 'Automation', 'Feature Engineering', 'Large-scale futuristic concepts'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="italic text-gray-400 border-l-2 border-cyan-400 pl-4">
                                "My mission is simple: To build a real, personal AGI that works offline, respects privacy, and grows with its user. VEXO is the outcome of that mission."
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* 3. ABOUT AVERO */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
                    >
                        {/* Background Circuit Animation */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <svg width="100%" height="100%">
                                <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                    <path d="M10 10 h80 v80 h-80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                    <path d="M50 10 v80 M10 50 h80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#circuit-pattern)" className="text-cyan-400" />
                            </svg>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl font-bold mb-2 font-display text-white">ABOUT <span className="text-cyan-400">AVERO</span></h2>
                                <p className="text-purple-400 text-lg mb-6 font-display tracking-wide">The innovation lab behind VEXO.</p>

                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    Avero is the personal AI innovation lab founded to build breakthrough intelligence systems that empower individuals.
                                    Its mission is to explore, design, and develop next-generation AGI technologies that work offline, protect privacy, and evolve with the user.
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-white font-bold mb-4">Avero focuses on:</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {['Personal AGI research', 'Multi-agent systems', 'Offline-first intelligence', 'Cross-device OS design', 'Human–AI interaction', 'IoT + environment-aware computing'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm">
                                    <strong className="text-white">VEXO</strong> is Avero’s flagship project — a Personal AGI Operating System built to become the future of human-digital interaction.
                                </p>
                            </div>

                            <div className="flex justify-center">
                                {/* Avero Logo Placeholder */}
                                <div className="relative w-64 h-64 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-purple-500/10 blur-2xl"></div>

                                    <div className="relative z-10 text-center">
                                        <div className="text-5xl font-bold font-display text-white mb-2 tracking-widest">AVERO</div>
                                        <div className="text-[10px] tracking-[0.3em] text-cyan-400 uppercase">Innovation Lab</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 4. FOUNDER VISION STATEMENT */}
                <div className="mb-32 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-r from-transparent via-purple-900/10 to-transparent blur-3xl -z-10"></div>

                    <h3 className="text-2xl font-bold text-white mb-12 font-display tracking-wider">MY VISION FOR THE FUTURE OF PERSONAL AGI</h3>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto relative"
                    >
                        <span className="absolute -top-8 -left-8 text-6xl text-cyan-400/20 font-serif">❝</span>
                        <p className="text-3xl md:text-4xl font-light text-gray-200 leading-tight italic">
                            I believe intelligence should be personal, private, offline, and adaptive — not controlled by corporations.
                            <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-normal not-italic mt-4 block">VEXO and Avero exist to put advanced AGI directly in the hands of individuals.</span>
                        </p>
                        <span className="absolute -bottom-8 -right-8 text-6xl text-purple-500/20 font-serif">❞</span>
                    </motion.div>
                </div>

                {/* 5. SKILLS & EXPERTISE GRID */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold text-white mb-10 font-display text-center">TECHNICAL EXPERTISE</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, borderColor: 'rgba(0, 243, 255, 0.5)' }}
                                className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-4 text-center group transition-colors"
                            >
                                <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-all">
                                    {React.cloneElement(skill.icon, { className: "w-6 h-6" })}
                                </div>
                                <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 6. CREATOR JOURNEY TIMELINE */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-white mb-12 font-display text-center">THE JOURNEY</h3>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent md:-translate-x-1/2 ml-6 md:ml-0"></div>

                        <div className="space-y-12">
                            {journey.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse md:text-left'}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-cyan-400 md:-translate-x-1/2 mt-2 ml-[1.35rem] md:ml-0 shadow-[0_0_10px_var(--color-primary)] z-10"></div>

                                    <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-purple-500/50 transition-colors group">
                                            <span className="text-xs font-bold text-cyan-400 tracking-wider mb-1 block">{item.year}</span>
                                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

// Helper Icon Component
const EyeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);

export default Creator;
