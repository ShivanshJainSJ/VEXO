import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain, Eye, Mic, Cpu, Database, Activity,
    TrendingUp, GitMerge, Smartphone, Wifi, Shield, Package
} from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Brain />,
            title: "Multi-Agent Brain",
            desc: "A coordinated intelligence powered by Planner, Critic, Coder, Memory, Vision, Audio, and Automation agents."
        },
        {
            icon: <Eye />,
            title: "Vision Intelligence",
            desc: "Real-time perception using YOLO, facial emotion detection, posture analysis, gesture tracking, and screen understanding."
        },
        {
            icon: <Mic />,
            title: "Audio Intelligence",
            desc: "Offline voice recognition, wake-word detection, voice emotion sensing, and natural voice interactions."
        },
        {
            icon: <Cpu />,
            title: "Automation Engine",
            desc: "Full PC automation, workflows, shortcuts, macros, and system-level control."
        },
        {
            icon: <Database />,
            title: "Memory System",
            desc: "Long-term memory, vector DB recall, knowledge graph reasoning, and context persistence."
        },
        {
            icon: <Activity />,
            title: "Ambient Intelligence",
            desc: "Room awareness, motion sensing, noise monitoring, comfort assessment, and auto-mode switching."
        },
        {
            icon: <TrendingUp />,
            title: "Skill Evolution",
            desc: "Self-learning capabilities that grow as you use VEXO, generating new personalized skills."
        },
        {
            icon: <GitMerge />,
            title: "Auto-Orchestrator",
            desc: "A self-optimizing runtime that adjusts models, hardware usage, and perception load automatically."
        },
        {
            icon: <Smartphone />,
            title: "Mobile Companion",
            desc: "Hybrid mobile AI with offline LLM, voice control, camera relay, and remote PC linking."
        },
        {
            icon: <Wifi />,
            title: "IoT Controller",
            desc: "Lights, fans, AC, sensors, security devices—fully integrated into the AGI ecosystem."
        },
        {
            icon: <Shield />,
            title: "Security Guard Mode",
            desc: "Real-time protection with motion alerts, unknown person detection, and night surveillance."
        },
        {
            icon: <Package />,
            title: "Knowledge Packs",
            desc: "Lightweight downloadable intelligence packs for Python, ML, DSA, Cloud, Robotics, and more."
        }
    ];

    return (
        <section className="py-20 bg-black relative min-h-screen overflow-hidden">
            {/* Background Animations */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
                {/* Moving Glow Waves */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent"
                    animate={{ top: ['-100%', '100%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 font-display tracking-tight">
                        <span className="text-[var(--color-primary)]">FEA</span>
                        <span className="text-[var(--color-secondary)]">TURES</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        A powerful multi-agent intelligence designed to evolve with you.
                    </p>
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent shadow-[0_0_10px_var(--color-primary)]"></div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative glass-panel p-8 rounded-2xl border border-white/5 hover:border-[var(--color-primary)]/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Neon Sweep Animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-[var(--color-primary)] group-hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300">
                                    {React.cloneElement(feature.icon, {
                                        className: "w-8 h-8 text-gray-300 group-hover:text-[var(--color-primary)] transition-colors duration-300"
                                    })}
                                </div>

                                <h3 className="text-xl font-bold mb-3 font-display text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
