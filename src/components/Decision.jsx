import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Decision = () => {
    const [noProps, setNoProps] = useState({ x: 0, y: 0 });
    const [isAccepted, setIsAccepted] = useState(false);
    const [yesSize, setYesSize] = useState(1);

    const handleNoHover = () => {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        setNoProps({ x: randomX, y: randomY });
        setYesSize(prev => prev + 0.2); // Make "Yes" grow every time they try to click "No"
    };

    const handleYes = () => {
        setIsAccepted(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#f43f5e', '#fb7185', '#ffe4e6']
        });
    };

    return (
        <section className="py-24 px-4 min-h-[60vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
                {!isAccepted ? (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="romantic-text text-4xl md:text-6xl text-valentine-800 mb-12">
                            So... What Do You Say? 💜
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                            <motion.button
                                onClick={handleYes}
                                style={{ scale: yesSize }}
                                className="btn-primary text-2xl px-12 py-4 bg-valentine-600"
                            >
                                Yes! 💖
                            </motion.button>

                            <motion.button
                                onMouseEnter={handleNoHover}
                                animate={{ x: noProps.x, y: noProps.y }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="px-8 py-3 rounded-full border-2 border-valentine-300 text-valentine-400 font-semibold hover:bg-valentine-50"
                            >
                                No 😢
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-8"
                    >
                        <div className="text-8xl animate-bounce">🥰</div>
                        <h2 className="romantic-text text-5xl md:text-7xl text-valentine-600">
                            You just made me the happiest person alive!
                        </h2>
                        <p className="text-2xl text-valentine-800 italic">
                            Happy Valentine's Day, my love! 💗
                        </p>
                        <footer className="mt-16 text-valentine-400 text-sm">
                            Made with ❤️ just for you
                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Decision;
