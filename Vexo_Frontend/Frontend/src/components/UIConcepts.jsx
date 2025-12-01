import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Eye, Workflow, Database, Shield, Cpu, Globe, Layers, Activity } from 'lucide-react';

// Real VEXO UI mockups
const desktopImages = [
    { id: 1, title: "Main VEXO Dashboard", desc: "A holographic control system powered by a multi-agent AGI brain.", src: "/src/assets/ui-dashboard.png" },
    { id: 2, title: "Multi-Agent Console", desc: "Neural network visualization of AI agents working in harmony.", src: "/src/assets/ui-agents.png" },
    { id: 3, title: "Vision & Perception UI", desc: "Real-time understanding of your environment through an advanced perception layer.", src: "/src/assets/ui-vision.png" },
    { id: 4, title: "Workflow & Automation UI", desc: "Drag-and-drop workflows, macros, and automation powered by intelligent agents.", src: "/src/assets/ui-workflow.png" },
    { id: 5, title: "Memory & Intelligence UI", desc: "Graph-based memory, long-term knowledge, semantic recall, and habit tracking.", src: "/src/assets/ui-memory.png" },
    { id: 6, title: "Security Guard Mode", desc: "Live monitoring, alerts, room awareness, and proactive protection.", src: "/src/assets/ui-security.png" },
];

const mobileImages = [
    { id: 1, title: "Mobile Companion UI", desc: "Your AI on the go — offline, intelligent, and ready anywhere.", src: "/src/assets/ui-dashboard.png" },
    { id: 2, title: "Security & Home Intelligence UI", desc: "Live monitoring, alerts, room awareness, and proactive protection.", src: "/src/assets/ui-security.png" },
];

const UIConcepts = () => {
    return (
        <section className="py-20 bg-black relative min-h-screen overflow-hidden">
            {/* Background Grid & Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/5 to-transparent"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 font-display tracking-tight">
                        <span className="text-cyan-400">UI</span> <span className="text-purple-500">SHOWCASE</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        A holographic interface built for the next generation of personal AGI.
                    </p>
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_var(--color-primary)]"></div>
                </motion.div>

                {/* PART 3: Hologram Orb (Centerpiece - placed first visually for impact or middle? User asked for 3 parts, layout implies flow. Let's put it in the middle or top. User said "Centerpiece 3D orb... tying the whole UI system together". Let's place it between Desktop and Mobile sections for flow.) */}

                {/* PART 1: Desktop UI Mockups */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {desktopImages.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{
                                    scale: 1.02,
                                    rotateX: 5,
                                    boxShadow: "0 0 30px rgba(0, 243, 255, 0.2)"
                                }}
                                className="group relative perspective-1000"
                            >
                                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm shadow-2xl transform transition-transform duration-500 preserve-3d">
                                    {/* Screen Content Placeholder */}
                                    <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                                        <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                                        {/* Fallback if image fails (since they are placeholders) */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                            <Monitor className="w-16 h-16 text-cyan-400" />
                                        </div>

                                        {/* Scanline Overlay */}
                                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Text Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PART 3: Hologram Orb + UI Rings (Centerpiece) */}
                <div className="mb-32 relative flex flex-col items-center justify-center py-20">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
                        {/* Core Orb */}
                        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 blur-xl animate-pulse opacity-50"></div>
                        <div className="absolute w-24 h-24 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center z-20 shadow-[0_0_50px_rgba(0,243,255,0.5)]">
                            <Cpu className="w-12 h-12 text-white animate-pulse" />
                        </div>

                        {/* Rotating Rings */}
                        <motion.div
                            className="absolute inset-0 border border-cyan-400/30 rounded-full border-dashed"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute inset-8 border border-purple-500/30 rounded-full border-dotted"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute inset-16 border border-white/10 rounded-full"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Orbiting Icons */}
                        {[<Database />, <Shield />, <Workflow />, <Globe />].map((icon, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-10 h-10 rounded-full bg-black/80 border border-cyan-400/50 flex items-center justify-center z-10"
                                style={{ top: '50%', left: '50%', marginLeft: '-1.25rem', marginTop: '-1.25rem' }}
                                animate={{
                                    rotate: 360,
                                    translateX: [140, 140],
                                }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: -i * (25 / 4)
                                }}
                            >
                                {React.cloneElement(icon, { className: "w-5 h-5 text-cyan-400" })}
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-bold font-display text-white mb-2">VEXO Core Interface</h3>
                        <p className="text-gray-400">The central nervous system of your personal AGI.</p>
                    </div>
                </div>

                {/* PART 2: Mobile UI Mockups */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {mobileImages.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative w-[280px] h-[580px] rounded-[3rem] border-4 border-gray-800 bg-black overflow-hidden shadow-2xl group">
                                    {/* Neon Frame Glow */}
                                    <div className="absolute inset-0 rounded-[2.8rem] border-2 border-purple-500/30 group-hover:border-purple-500/80 transition-colors duration-500"></div>

                                    {/* Screen Content */}
                                    <div className="absolute inset-2 rounded-[2.5rem] bg-gray-900 overflow-hidden">
                                        <img src={item.src} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                        {/* Fallback Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-0 transition-opacity">
                                            <Smartphone className="w-16 h-16 text-purple-500" />
                                        </div>

                                        {/* UI Elements Overlay (Fake UI) */}
                                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
                                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400 max-w-xs">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UIConcepts;
