import React from 'react';
import { motion } from 'framer-motion';
import {
    Terminal, Cpu, Eye, Mic, Database, Zap, Smartphone, Wifi,
    Layers, Layout, Activity, TrendingUp, GitMerge, Monitor,
    Bell, Shield, Share2, Command, Package, Flag
} from 'lucide-react';

const milestones = [
    { version: "V1", title: "System Boot", desc: "Foundational OS kernel, basic agent framework, and initial AI core.", icon: <Terminal /> },
    { version: "V2", title: "Multi-Agent Brain", desc: "Planner, Critic, Coder, Memory, and Tool Agent integration.", icon: <Cpu /> },
    { version: "V3", title: "Vision Module", desc: "YOLO-based object detection, face detection, and image analysis.", icon: <Eye /> },
    { version: "V4", title: "Audio Module", desc: "Wake word engine, offline speech recognition, audio perception.", icon: <Mic /> },
    { version: "V5", title: "Memory Engine", desc: "Vector DB, knowledge graph, semantic recall, long-term memory.", icon: <Database /> },
    { version: "V6", title: "Automation Engine", desc: "PC control, workflows, macros, app automation.", icon: <Zap /> },
    { version: "V7", title: "Mobile Companion", desc: "Hybrid offline phone assistant + remote PC control.", icon: <Smartphone /> },
    { version: "V8", title: "IoT Integration", desc: "Room sensors, smart home automation, environmental awareness.", icon: <Wifi /> },
    { version: "V9", title: "Perception Switching", desc: "Context-driven activation of vision/audio/screen systems.", icon: <Layers /> },
    { version: "V10", title: "UI Layer", desc: "Holographic interface, neon design, AI orb, and interactive visuals.", icon: <Layout /> },
    { version: "V11", title: "Ambient Intelligence", desc: "Low-power background sensing + environment awareness.", icon: <Activity /> },
    { version: "V12", title: "Skill Evolution", desc: "Self-learning skill engine that adapts to user behavior patterns.", icon: <TrendingUp /> },
    { version: "V13", title: "Auto-Orchestrator", desc: "Self-optimizing runtime for models, hardware, and resources.", icon: <GitMerge /> },
    { version: "V14", title: "Multi-Device Intelligence", desc: "PC ↔ Mobile ↔ IoT awareness and dynamic mode switching.", icon: <Monitor /> },
    { version: "V15", title: "Proactive Intelligence", desc: "Predictive alerts, recommendations, and emotional adaptation.", icon: <Bell /> },
    { version: "V16", title: "Security Guard System", desc: "Night surveillance, motion detection, unknown person alerts.", icon: <Shield /> },
    { version: "V17", title: "Memory Graph System", desc: "Mood graph, productivity heatmap, habits, and timeline visualization.", icon: <Share2 /> },
    { version: "V18", title: "Autonomous Macro Engine", desc: "Learned user routines → auto-macro generation.", icon: <Command /> },
    { version: "V19", title: "Knowledge Packs", desc: "Downloadable offline intelligence packs (AI/ML/DSA/Cloud/Robotics).", icon: <Package /> },
    { version: "V20", title: "VEXO OS FINAL RELEASE", desc: "Full offline personal AGI OS with cross-device orchestration.", icon: <Flag /> },
];

const Roadmap = () => {
    return (
        <section className="py-20 bg-black relative min-h-screen overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 font-display tracking-tight">
                        <span className="text-cyan-400">ROAD</span>
                        <span className="text-violet-500">MAP</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        The evolution journey of a personal AGI operating system.
                    </p>
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_var(--color-primary)]"></div>
                </motion.div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2"></div>
                    <motion.div
                        className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-400 -translate-x-1/2"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                    />

                    <div className="space-y-12 md:space-y-24">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row gap-8`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-cyan-400 -translate-x-1/2 z-20 shadow-[0_0_10px_var(--color-primary)]">
                                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-400 group-hover:text-white group-hover:bg-cyan-400/20 transition-colors">
                                                {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                                            </div>
                                            <span className="text-sm font-bold font-display text-violet-400 tracking-widest">{item.version}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Empty space for the other side on desktop */}
                                <div className="hidden md:block w-[calc(50%-3rem)]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
