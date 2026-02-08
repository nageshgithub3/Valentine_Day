import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "Every love story is beautiful, but ours is my favorite.";

    useEffect(() => {
        let i = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const pauseTime = 2000;

        const tick = () => {
            const currentText = isDeleting
                ? fullText.slice(0, i--)
                : fullText.slice(0, i++);

            setText(currentText);

            if (!isDeleting && i > fullText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    tick();
                }, pauseTime);
            } else if (isDeleting && i < 0) {
                isDeleting = false;
                i = 0;
                setTimeout(tick, 500);
            } else {
                setTimeout(tick, isDeleting ? 50 : typingSpeed);
            }
        };

        const timeoutId = setTimeout(tick, typingSpeed);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10"
            >
                <h1 className="romantic-text text-5xl md:text-7xl lg:text-8xl font-bold text-valentine-800 mb-6 drop-shadow-sm">
                    Will You Be My <br />
                    <span className="text-valentine-600">Valentine? ❤️</span>
                </h1>

                <p className="text-xl md:text-2xl text-valentine-700 h-8 md:h-10 italic typing-cursor">
                    {text}
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12"
                >
                    <a
                        href="#letter"
                        className="btn-primary inline-flex items-center gap-2 text-lg"
                    >
                        Read My Love Letter 💌
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 text-valentine-400"
            >
                <ChevronDown size={32} />
            </motion.div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-valentine-50 to-pink-100 -z-10" />
        </section>
    );
};

export default Hero;
