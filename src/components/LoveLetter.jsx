import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import roseImg from '../assets/Rose_Day.png';
import proposeImg from '../assets/Propose_Day.png';
import chocolateImg from '../assets/Chocolate_Day.png';
import teddyImg from '../assets/Teddy_Day.png';
import promiseImg from '../assets/Promise_Day.png';
import hugImg from '../assets/Hug_Day.png';
import kissImg from '../assets/Kiss_Day.png';
import valentineImg from '../assets/Valentine_Day.png';

const images = [
    roseImg, proposeImg, chocolateImg, teddyImg,
    promiseImg, hugImg, kissImg, valentineImg
];

const LoveLetter = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="letter" className="py-24 px-4 bg-white/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-valentine-300 via-valentine-500 to-valentine-300" />

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Carousel Image Section */}
                        <div className="w-full md:w-1/3">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-valentine-200 to-pink-200 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative rounded-2xl shadow-xl w-full aspect-[4/5] border-4 border-white overflow-hidden bg-white">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentIndex}
                                            src={images[currentIndex]}
                                            alt="Our love journey"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </AnimatePresence>
                                </div>
                                {/* Indicators */}
                                <div className="flex justify-center gap-1.5 mt-4">
                                    {images.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-valentine-500' : 'w-1.5 bg-valentine-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-2/3 space-y-6">
                            <h2 className="romantic-text text-3xl md:text-5xl text-valentine-800 mb-8 md:text-left text-center">
                                A Love Letter To You
                            </h2>

                            <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed italic md:text-left text-center">
                                <p>
                                    "In a world full of temporary things, you are a perpetual feeling. You are the warmth in my winter, the color in my grey skies, and the rhythm that makes my heart dance."
                                </p>
                                <p>
                                    "Every moment with you is a treasure I hold close, and every tomorrow with you is a dream I never want to wake from."
                                </p>
                            </div>

                            <div className="pt-6 md:text-left text-center">
                                <span className="text-4xl">💌</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LoveLetter;
