import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import VexoLogo from './VexoLogo';

const BootSequence = ({ onComplete }) => {
    const [isBooting, setIsBooting] = useState(true);
    const containerRef = useRef(null);
    const terminalRef = useRef(null);
    const orbRef = useRef(null);
    const logoRef = useRef(null);
    const statusRef = useRef(null);

    const bootMessages = [
        '> INITIALIZING VEXO CORE SYSTEM...',
        '> LOADING MULTI-AGENT FRAMEWORK...',
        '> ACTIVATING PERCEPTION MODULES...',
        '> STARTING MEMORY ENGINE...',
        '> SYNCHRONIZING DEVICE NETWORK...',
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => {
                    setIsBooting(false);
                    if (onComplete) onComplete();
                }, 500);
            }
        });

        // Step 1: Dark Screen with flicker (0.0s → 0.3s)
        tl.to(containerRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.inOut'
        });

        // Step 2: Grid Power-On (0.3s → 0.8s)
        tl.to('.boot-grid', {
            opacity: 0.3,
            duration: 0.5,
            ease: 'power2.out'
        }, 0.3);

        tl.to('.scanline', {
            top: '100%',
            duration: 0.5,
            ease: 'power2.inOut'
        }, 0.3);

        // Step 3: Terminal Text (0.8s → 1.4s)
        bootMessages.forEach((msg, index) => {
            tl.to({}, {
                duration: 0.12,
                onStart: () => {
                    if (terminalRef.current) {
                        const line = document.createElement('div');
                        line.className = 'terminal-line text-cyan-400 font-mono text-xs md:text-sm mb-1 opacity-0';
                        line.textContent = msg;
                        terminalRef.current.appendChild(line);
                        gsap.to(line, { opacity: 1, duration: 0.1 });
                    }
                }
            }, 0.8 + (index * 0.12));
        });

        // Step 4: AI Orb Formation (1.4s → 2.2s)
        tl.to(orbRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)'
        }, 1.4);

        tl.to('.orb-ring', {
            scale: 1.5,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out'
        }, 1.4);

        // Step 5: VEXO Logo Reveal (2.2s → 3.0s)
        tl.to(logoRef.current, {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power2.out'
        }, 2.2);

        // Step 6: SYSTEM ONLINE (3.0s → 3.5s)
        tl.to(statusRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        }, 3.0);

        tl.to(statusRef.current, {
            textShadow: '0 0 20px rgba(0, 243, 255, 0.8), 0 0 40px rgba(0, 243, 255, 0.4)',
            duration: 0.2,
            repeat: 1,
            yoyo: true
        }, 3.1);

        // Step 7: Fade Out (3.5s → 4.0s)
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        }, 3.5);

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    if (!isBooting) return null;

    return (
        <AnimatePresence>
            <div
                ref={containerRef}
                className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden opacity-0"
            >
                {/* Background Grid */}
                <div className="boot-grid absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-0"></div>

                {/* Scanline */}
                <div className="scanline absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 blur-sm top-0"></div>

                {/* Noise Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

                {/* Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                opacity: 0
                            }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0, 1, 0]
                            }}
                            transition={{
                                duration: Math.random() * 2 + 1,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full max-w-4xl px-4">

                    {/* Terminal Text */}
                    <div
                        ref={terminalRef}
                        className="w-full max-w-2xl mb-8 min-h-[120px]"
                    ></div>

                    {/* AI Orb */}
                    <div
                        ref={orbRef}
                        className="relative w-32 h-32 opacity-0 scale-0"
                    >
                        {/* Orb Core */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 blur-xl opacity-60 animate-pulse"></div>
                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-300 to-purple-400 opacity-80"></div>
                        <div className="absolute inset-8 rounded-full bg-white opacity-90"></div>

                        {/* Expanding Rings */}
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="orb-ring absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            ></div>
                        ))}
                    </div>

                    {/* VEXO Logo */}
                    <div
                        ref={logoRef}
                        className="flex flex-col items-center gap-4 opacity-0 scale-90"
                        style={{ filter: 'blur(10px)' }}
                    >
                        <VexoLogo size="large" />
                        <div className="text-center">
                            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-wider text-white mb-2">
                                VEXO
                            </h1>
                            <p className="text-xs md:text-sm tracking-[0.3em] text-cyan-400 uppercase opacity-70">
                                Personal AGI Operating System
                            </p>
                        </div>
                    </div>

                    {/* SYSTEM ONLINE */}
                    <div
                        ref={statusRef}
                        className="flex items-center gap-3 opacity-0 mt-8"
                    >
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </div>
                        <span className="text-2xl md:text-3xl font-bold font-display tracking-wider text-green-400">
                            SYSTEM ONLINE
                        </span>
                    </div>
                </div>

                {/* Chromatic Aberration Effect */}
                <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20">
                    <div className="absolute inset-0 bg-cyan-500 translate-x-[2px]"></div>
                    <div className="absolute inset-0 bg-red-500 -translate-x-[2px]"></div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default BootSequence;
