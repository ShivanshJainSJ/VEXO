import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu, Network, Eye, Mic, Monitor, Smartphone, Wifi,
    Layers, Database, Shield, Zap, Activity, Server, Code, Lock
} from 'lucide-react';

const Architecture = () => {
    return (
        <section className="py-20 bg-black relative min-h-screen overflow-hidden">
            {/* Background Grid & Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
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
                        <span className="text-teal-400">ARCHI</span>
                        <span className="text-violet-500">TECTURE</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        A modular, multi-agent AGI system designed for offline intelligence.
                    </p>
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_10px_var(--color-primary)]"></div>
                </motion.div>

                {/* 1. VEXO Runtime Pipeline */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold font-display mb-4 text-white">VEXO Runtime Pipeline</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A dynamically orchestrated AGI workflow where perception, reasoning, memory, and automation operate in harmony.
                        </p>
                    </div>

                    <div className="relative glass-panel p-8 overflow-x-auto">
                        <div className="min-w-[800px] flex items-center justify-between relative">
                            {/* Pipeline Flow Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>
                            <motion.div
                                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-teal-400 to-violet-500 -translate-y-1/2 z-0"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 2, ease: "linear" }}
                            />

                            {/* Nodes */}
                            {[
                                { icon: <Zap />, label: "User Input" },
                                { icon: <BrainNode />, label: "Intent Engine" },
                                { icon: <Network />, label: "Routing" },
                                { icon: <Cpu />, label: "Agents" },
                                { icon: <Database />, label: "Memory" },
                                { icon: <Code />, label: "Output" },
                                { icon: <Monitor />, label: "Execution" }
                            ].map((node, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative z-10 flex flex-col items-center gap-4"
                                >
                                    <div className="w-16 h-16 rounded-xl bg-black/80 border border-teal-400/30 flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                                        {React.cloneElement(node.icon, { className: "w-8 h-8 text-teal-400" })}
                                    </div>
                                    <span className="text-xs font-display font-bold text-gray-300 uppercase tracking-wider">{node.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Multi-Agent Brain */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold font-display mb-4 text-white">Multi-Agent Brain</h3>
                            <p className="text-gray-400 mb-6">
                                A cluster of intelligent agents working together — Planner, Critic, Coder, Memory, Vision, Audio, and Automation.
                            </p>
                            <ul className="space-y-3">
                                {['Planner', 'Critic', 'Coder', 'Memory', 'Vision'].map((agent) => (
                                    <li key={agent} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_5px_rgba(139,92,246,0.5)]"></div>
                                        {agent} Agent
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative h-[500px] flex items-center justify-center">
                            {/* Central Core */}
                            <div className="absolute z-20 w-32 h-32 rounded-full bg-violet-500/10 border border-violet-500 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                                <div className="text-center">
                                    <Cpu className="w-10 h-10 text-violet-400 mx-auto mb-1" />
                                    <span className="text-[10px] font-bold text-violet-400">CORE BRAIN</span>
                                </div>
                            </div>

                            {/* Orbiting Agents */}
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-16 h-16 rounded-lg bg-black/50 border border-teal-400/30 flex items-center justify-center z-10"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        marginLeft: '-2rem',
                                        marginTop: '-2rem',
                                    }}
                                    animate={{
                                        rotate: 360,
                                        translateX: [150, 150], // Keep distance
                                    }}
                                    // Using a custom transition to orbit
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: -i * (20 / 8) // Stagger start positions
                                    }}
                                // This is a simplified orbit, for a true circular path we need keyframes for x/y
                                >
                                    <OrbitingNode index={i} total={8} radius={160} />
                                </motion.div>
                            ))}

                            {/* Orbit Rings */}
                            <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.8]"></div>
                            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 scale-[0.6]"></div>
                        </div>
                    </div>
                </div>

                {/* 3. Perception Switching System */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold font-display mb-4 text-white">Perception Layer</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Vision, audio, and screen context systems that activate only when needed through intelligent switching.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Eye />, title: "Vision (YOLO)", color: "text-teal-400", border: "border-teal-400" },
                            { icon: <Mic />, title: "Audio (Whisper)", color: "text-violet-500", border: "border-violet-500" },
                            { icon: <Monitor />, title: "Screen (OCR)", color: "text-cyan-400", border: "border-cyan-400" }
                        ].map((module, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className={`glass-panel p-8 border ${module.border}/30 relative overflow-hidden group`}
                            >
                                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${module.color.replace('text', 'bg')} animate-pulse shadow-[0_0_10px_currentColor]`}></div>
                                <div className="mb-6 p-4 rounded-full bg-white/5 w-fit">
                                    {React.cloneElement(module.icon, { className: `w-8 h-8 ${module.color}` })}
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-white">{module.title}</h4>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    ACTIVE MONITORING
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. Device Ecosystem */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[400px] flex items-center justify-center">
                            {/* Triangular Layout */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <motion.path
                                    d="M 50% 20% L 80% 80% L 20% 80% Z"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="2"
                                />
                                <motion.circle cx="50%" cy="20%" r="4" fill="#2dd4bf" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                                <motion.circle cx="80%" cy="80%" r="4" fill="#8b5cf6" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                                <motion.circle cx="20%" cy="80%" r="4" fill="#06b6d4" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                            </svg>

                            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                                <div className="w-16 h-16 glass-panel flex items-center justify-center border border-teal-400/50 mb-2">
                                    <Monitor className="w-8 h-8 text-teal-400" />
                                </div>
                                <span className="text-xs font-bold">PC (Core)</span>
                            </div>

                            <div className="absolute bottom-[10%] right-[10%] flex flex-col items-center">
                                <div className="w-16 h-16 glass-panel flex items-center justify-center border border-violet-500/50 mb-2">
                                    <Smartphone className="w-8 h-8 text-violet-500" />
                                </div>
                                <span className="text-xs font-bold">Mobile</span>
                            </div>

                            <div className="absolute bottom-[10%] left-[10%] flex flex-col items-center">
                                <div className="w-16 h-16 glass-panel flex items-center justify-center border border-cyan-400/50 mb-2">
                                    <Wifi className="w-8 h-8 text-cyan-400" />
                                </div>
                                <span className="text-xs font-bold">IoT</span>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h3 className="text-3xl font-bold font-display mb-4 text-white">Device Ecosystem</h3>
                            <p className="text-gray-400 mb-6">
                                VEXO distributes itself intelligently: the PC runs the AGI brain, the mobile acts as a companion, and IoT devices provide environmental awareness.
                            </p>
                            <div className="glass-panel p-6 border-l-4 border-teal-400">
                                <h4 className="font-bold mb-2 text-teal-400">Local Sync Protocol</h4>
                                <p className="text-sm text-gray-400">
                                    All devices communicate over a secure, offline-first mesh network. No cloud dependency required.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. System Layer Stack */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold font-display mb-4 text-white">AGI OS Layer Stack</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A modular architecture that evolves, adapts, and integrates across devices.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-2">
                        {[
                            { name: "UI Layer", color: "bg-cyan-500" },
                            { name: "Automation Engine", color: "bg-teal-400" },
                            { name: "Reasoning Layer", color: "bg-violet-500" },
                            { name: "Memory Engine", color: "bg-purple-600" },
                            { name: "Perception Layer", color: "bg-indigo-500" },
                            { name: "Multi-Agent Brain", color: "bg-blue-600" },
                            { name: "Core OS", color: "bg-slate-700" }
                        ].map((layer, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="relative h-16 glass-panel flex items-center px-8 overflow-hidden group cursor-default"
                            >
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${layer.color}`}></div>
                                <div className={`absolute inset-0 ${layer.color}/5 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                <span className="font-display font-bold tracking-wider">{layer.name}</span>

                                {/* Scanning Effect */}
                                <div className="absolute top-0 bottom-0 w-1 bg-white/20 blur-sm animate-[scan_2s_linear_infinite]" style={{ left: '-10%' }}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper for the Brain Node Icon
const BrainNode = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
);

// Helper for Orbiting Nodes
const OrbitingNode = ({ index, total, radius }) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // We actually need to position them absolutely based on the angle, 
    // but since we are rotating the parent container, we can just place them at a radius.
    // However, the parent rotation approach in the main component was simplified.
    // Let's stick to the parent rotation for simplicity in this specific "orbit" effect.

    // Actually, to make them stay upright while orbiting, we need a counter-rotation.
    // The parent div rotates, and this child div counter-rotates.
    // But for the simplified version in the main component, I used a transform.

    // Let's just return the icon content here.
    const icons = [<Activity />, <Shield />, <Code />, <Database />, <Eye />, <Mic />, <Zap />, <Server />];
    const labels = ['Planner', 'Critic', 'Coder', 'Memory', 'Vision', 'Audio', 'Tool', 'Safety'];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            {React.cloneElement(icons[index], { className: "w-6 h-6 text-teal-400" })}
            <span className="absolute -bottom-6 text-[10px] font-bold text-gray-400 whitespace-nowrap">{labels[index]}</span>
        </div>
    );
};

export default Architecture;
