import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const rainbowColors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#8B00FF', // Violet
    '#FF1493', // Deep Pink
    '#00FFFF', // Cyan
    '#FFD700', // Gold
    '#ADFF2F', // Green Yellow
    '#FF69B4', // Hot Pink
];

const HeartBackground = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const generateHearts = () => {
            const newHearts = Array.from({ length: 45 }).map((_, i) => ({
                id: i,
                size: Math.random() * 25 + 10,
                left: Math.random() * 100,
                delay: Math.random() * 10,
                duration: Math.random() * 15 + 15,
                color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)],
                opacity: Math.random() * 0.5 + 0.2, // Slightly more visible for colors
                blur: Math.random() > 0.8 ? 'blur(1px)' : 'none',
            }));
            setHearts(newHearts);
        };

        generateHearts();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute"
                    initial={{ y: '110vh', left: `${heart.left}%`, rotate: 0, opacity: 0 }}
                    animate={{
                        y: '-10vh',
                        rotate: [0, 90, 180, 270, 360],
                        x: [0, 40, -40, 0], // Wider swing for more dynamic feel
                        opacity: [0, heart.opacity, heart.opacity, 0],
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear"
                    }}
                    style={{
                        width: heart.size,
                        height: heart.size,
                        color: heart.color,
                        filter: heart.blur
                    }}
                >
                    <svg viewBox="0 0 32 32" fill="currentColor" className="drop-shadow-lg">
                        <path d="M16 28.5L14.1 26.8C7.4 20.7 3 16.7 3 11.9C3 7.9 6.1 4.8 10.1 4.8C12.3 4.8 14.5 5.8 16 7.6C17.5 5.8 19.7 4.8 21.9 4.8C25.9 4.8 29 7.9 29 11.9C29 16.7 24.6 20.7 17.9 26.9L16 28.5Z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

export default HeartBackground;
