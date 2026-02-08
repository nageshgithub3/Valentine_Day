import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    {
        emoji: "✨",
        text: "Your smile lights up my entire world"
    },
    {
        emoji: "🌹",
        text: "You make every ordinary day extraordinary"
    },
    {
        emoji: "💫",
        text: "With you, I've found my forever home"
    },
    {
        emoji: "🦋",
        text: "You give me butterflies, still, every single day"
    },
    {
        emoji: "🌙",
        text: "You're my last thought at night and first in the morning"
    },
    {
        emoji: "💝",
        text: "Loving you is the best thing I've ever done"
    }
];

const Reasons = () => {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="romantic-text text-4xl md:text-6xl text-valentine-800 mb-16">
                    Reasons I Love You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="glass-card p-8 flex flex-col items-center justify-center space-y-4 cursor-default"
                        >
                            <span className="text-4xl">{reason.emoji}</span>
                            <p className="text-slate-700 font-medium">{reason.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reasons;
