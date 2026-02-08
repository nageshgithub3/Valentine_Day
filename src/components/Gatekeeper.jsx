import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const noQuotes = [
    "Are you sure? 🥺",
    "Think again... ❤️",
    "But we're so perfect together! 🌹",
    "You're breaking my heart! 💔",
    "Give me a chance! ✨",
    "I'll be the best Valentine ever! 🧸",
    "Just one more click? 💌",
    "I'll buy you all the chocolates! 🍫"
];

const Gatekeeper = ({ onAccept }) => {
    const [noProps, setNoProps] = useState({ x: 0, y: 0 });
    const [yesSize, setYesSize] = useState(1);
    const [noIndex, setNoIndex] = useState(-1); // Start at -1 to represent initial "No"

    const handleNo = () => {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        setNoProps({ x: randomX, y: randomY });
        setYesSize(prev => prev + 0.2);

        // Move to the next quote in the array
        setNoIndex((prev) => (prev + 1) % noQuotes.length);
    };

    const handleYes = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#f43f5e', '#fb7185', '#ffe4e6']
        });
        onAccept();
    };

    return (
        <div className="fixed inset-0 z-[100] bg-valentine-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center max-w-2xl"
            >
                <h1 className="romantic-text text-5xl md:text-7xl lg:text-8xl font-bold text-valentine-800 mb-12 drop-shadow-sm">
                    Will You Be My <br />
                    <span className="text-valentine-600">Valentine? ❤️</span>
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <motion.button
                        onClick={handleYes}
                        style={{ scale: yesSize }}
                        className="btn-primary text-2xl px-12 py-4 bg-valentine-600 shadow-2xl"
                    >
                        Yes! 💖
                    </motion.button>

                    <motion.button
                        onClick={handleNo}
                        onMouseEnter={noIndex === -1 ? undefined : handleNo} // Only escape after first interaction
                        animate={{ x: noProps.x, y: noProps.y }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="px-8 py-3 rounded-full border-2 border-valentine-300 text-valentine-400 font-semibold bg-white shadow-md min-w-[120px]"
                    >
                        {noIndex === -1 ? "No" : noQuotes[noIndex]}
                    </motion.button>
                </div>

                <p className="mt-12 text-valentine-400 italic font-medium">
                    (A special surprise is waiting for you...)
                </p>
            </motion.div>

            {/* Decorative Blur Orbs for Gatekeeper */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-valentine-100 rounded-full blur-[120px] opacity-50 -z-10" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100 rounded-full blur-[120px] opacity-40 -z-10" />
        </div>
    );
};

export default Gatekeeper;
