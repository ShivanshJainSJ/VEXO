import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/vexo-logo.png';

const VexoLogo = ({ size = 'normal' }) => {
    const sizeClasses = {
        normal: 'w-12 h-12 md:w-14 md:h-14',
        large: 'w-24 h-24 md:w-32 md:h-32'
    };

    return (
        <motion.div
            className="relative group cursor-pointer"
            initial="initial"
            animate="animate"
            whileHover="hover"
        >
            {/* Holographic Scan Line Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/50 to-transparent z-20 pointer-events-none"
                style={{ height: '20%', opacity: 0 }}
                variants={{
                    initial: { top: '-20%', opacity: 0 },
                    animate: {
                        top: ['-20%', '120%'],
                        opacity: [0, 0.5, 0],
                        transition: {
                            duration: 2,
                            ease: "easeInOut",
                            delay: 0.5
                        }
                    }
                }}
            />

            {/* Outer Glow/Pulse */}
            <motion.div
                className="absolute inset-0 rounded-full bg-[var(--color-primary)]/20 blur-xl"
                variants={{
                    animate: {
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.1, 1],
                        transition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    },
                    hover: {
                        opacity: 0.8,
                        scale: 1.2,
                        transition: { duration: 0.3 }
                    }
                }}
            />

            {/* The Logo Image */}
            <motion.img
                src={logo}
                alt="VEXO System Core"
                className={`relative z-10 ${sizeClasses[size]} object-contain drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]`}
                variants={{
                    initial: { opacity: 0, scale: 0.8, filter: "brightness(0)" },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        filter: "brightness(1)",
                        transition: {
                            duration: 1.5,
                            ease: "easeOut"
                        }
                    },
                    hover: {
                        scale: 1.05,
                        filter: "brightness(1.2) drop-shadow(0 0 15px rgba(0,243,255,0.8))",
                        transition: { duration: 0.3 }
                    }
                }}
            />

            {/* Internal Energy Flow Lines (SVG Overlay) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100">
                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1"
                    strokeDasharray="10 20"
                    variants={{
                        animate: {
                            rotate: 360,
                            opacity: [0.1, 0.3, 0.1],
                            transition: {
                                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }
                        },
                        hover: {
                            opacity: 0.6,
                            strokeWidth: 2,
                            transition: { duration: 0.3 }
                        }
                    }}
                />
            </svg>
        </motion.div>
    );
};

export default VexoLogo;
