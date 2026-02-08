import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Heart } from 'lucide-react';

import roseImg from '../assets/Rose_Day.png';
import proposeImg from '../assets/Propose_Day.png';
import chocolateImg from '../assets/Chocolate_Day.png';
import teddyImg from '../assets/Teddy_Day.png';
import promiseImg from '../assets/Promise_Day.png';
import hugImg from '../assets/Hug_Day.png';
import kissImg from '../assets/Kiss_Day.png';
import valentineImg from '../assets/Valentine_Day.png';

const initialDays = [
    {
        id: 1,
        title: "Rose Day",
        date: "Feb 7",
        image: roseImg,
        color: "bg-rose-100",
        quotes: [
            "A rose for you, to tell you how beautiful my feelings for you are.",
            "Just like a rose, you make my world colorful.",
            "One rose, a thousand emotions."
        ]
    },
    {
        id: 2,
        title: "Propose Day",
        date: "Feb 8",
        image: proposeImg,
        color: "bg-pink-100",
        quotes: [
            "I don’t need a special day to propose… I need you for a lifetime.",
            "Will you be mine today, tomorrow, and forever?",
            "I choose you. Again and again."
        ]
    },
    {
        id: 3,
        title: "Chocolate Day",
        date: "Feb 9",
        image: chocolateImg,
        color: "bg-amber-100",
        quotes: [
            "Life is like chocolate… sweet when shared with you.",
            "You’re the sweetness in my bittersweet life.",
            "Chocolate melts faster when I think of you."
        ]
    },
    {
        id: 4,
        title: "Teddy Day",
        date: "Feb 10",
        image: teddyImg,
        color: "bg-orange-100",
        quotes: [
            "Whenever you feel low, hug this teddy and remember I’m with you.",
            "You’re my favorite comfort, just like a teddy bear.",
            "This teddy carries my hugs when I can’t be there."
        ]
    },
    {
        id: 5,
        title: "Promise Day",
        date: "Feb 11",
        image: promiseImg,
        color: "bg-blue-100",
        quotes: [
            "I promise to stand by you, in sunshine and storms.",
            "Not just today, but every day — I promise you my heart.",
            "My promise to you: I’ll never stop choosing you."
        ]
    },
    {
        id: 6,
        title: "Hug Day",
        date: "Feb 12",
        image: hugImg,
        color: "bg-purple-100",
        quotes: [
            "A hug is my favorite way of saying ‘you matter to me.’",
            "One hug from you can fix my worst day.",
            "In your arms is my favorite place to be."
        ]
    },
    {
        id: 7,
        title: "Kiss Day",
        date: "Feb 13",
        image: kissImg,
        color: "bg-red-100",
        quotes: [
            "A kiss is a lovely trick designed by nature to stop speech when words become superfluous.",
            "Your kiss is my favorite hello and hardest goodbye.",
            "Every kiss from you feels like the first."
        ]
    },
    {
        id: 8,
        title: "Valentine's Day",
        date: "Feb 14",
        image: valentineImg,
        color: "bg-valentine-100",
        quotes: [
            "You are my today and all of my tomorrows.",
            "With you, every day feels like Valentine’s Day.",
            "I found my forever in you.",
            "You’re not my Valentine for a day, you’re my Valentine for life."
        ]
    }
];

const ValentineWeek = () => {
    const [remainingDays, setRemainingDays] = useState(initialDays);
    const [selectedDay, setSelectedDay] = useState(null);
    const [quoteIndex, setQuoteIndex] = useState(0);

    const handleOpenTop = () => {
        if (remainingDays.length === 0) return;

        const dayToOpen = remainingDays[0];
        setSelectedDay(dayToOpen);
        setQuoteIndex(Math.floor(Math.random() * dayToOpen.quotes.length));
    };

    const handleNext = () => {
        // Remove the current day and move to the next one
        setRemainingDays(prev => prev.slice(1));
        setSelectedDay(null);
    };

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white/50 to-pink-50/50 min-h-[800px] flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="romantic-text text-4xl md:text-6xl text-valentine-800 mb-4">
                        {remainingDays.length > 0 ? "Something from my heart..." : "All my love, for you."}
                    </h2>
                    {remainingDays.length > 0 && (
                        <p className="text-valentine-500 font-medium">
                            Tap the stack to reveal a surprise ({remainingDays.length} letters left)
                        </p>
                    )}
                </div>

                <div className="relative flex items-center justify-center h-[500px]">
                    <AnimatePresence mode="wait">
                        {!selectedDay ? (
                            remainingDays.length > 0 ? (
                                <motion.div
                                    key="stack"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="relative w-72 h-48 cursor-pointer"
                                    onClick={handleOpenTop}
                                >
                                    {/* The Stack Effect */}
                                    {remainingDays.map((day, index) => (
                                        <motion.div
                                            key={day.id}
                                            initial={false}
                                            animate={{
                                                rotate: index * -2,
                                                x: index * 4,
                                                y: index * -4,
                                                zIndex: remainingDays.length - index,
                                            }}
                                            whileHover={index === 0 ? { y: -20, rotate: 0 } : {}}
                                            className="absolute inset-0 bg-pink-400 rounded-lg shadow-xl border border-pink-300 flex items-center justify-center overflow-hidden"
                                        >
                                            {/* Envelope Design for Top Item */}
                                            {index === 0 && (
                                                <>
                                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-pink-300 rounded-b-[40%] shadow-sm z-10" />
                                                    <div className="z-20 flex flex-col items-center gap-2">
                                                        <div className="bg-white/90 p-2 rounded-full shadow-inner animate-bounce">
                                                            <Heart className="text-pink-500 fill-pink-500" size={24} />
                                                        </div>
                                                        <span className="text-white font-romantic text-xl font-bold drop-shadow-md">Tap to Open</span>
                                                    </div>
                                                    <div className="absolute inset-x-0 bottom-4 text-center z-20">
                                                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{day.title}</span>
                                                    </div>
                                                </>
                                            )}
                                            {/* Side peeking for stacked items */}
                                            {index > 0 && (
                                                <div className="absolute top-2 right-4 text-white/20 font-bold">{remainingDays.length - index}</div>
                                            )}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center space-y-4"
                                >
                                    <div className="text-6xl">💝</div>
                                    <p className="text-2xl romantic-text text-valentine-600">You've opened all my letters!</p>
                                    <p className="text-valentine-400 italic font-medium">But my love for you is never ending.</p>
                                </motion.div>
                            )
                        ) : (
                            <motion.div
                                key="open-card"
                                className="w-full max-w-4xl glass-card overflow-hidden relative shadow-2xl"
                                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 500, rotate: 20 }}
                                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                            >
                                <div className={`p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center ${selectedDay.color}`}>
                                    {/* Left: Image */}
                                    <div className="w-full md:w-1/2">
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white aspect-square"
                                        >
                                            <img
                                                src={selectedDay.image}
                                                alt={selectedDay.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Right: Text */}
                                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <span className="inline-block px-4 py-1 bg-white/60 rounded-full text-valentine-600 font-bold text-sm mb-2 shadow-sm">
                                                {selectedDay.date} — {selectedDay.title}
                                            </span>
                                        </motion.div>

                                        <motion.h3
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="romantic-text text-3xl md:text-5xl text-valentine-800 italic leading-tight"
                                        >
                                            "{selectedDay.quotes[quoteIndex]}"
                                        </motion.h3>

                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.7 }}
                                            onClick={handleNext}
                                            className="btn-primary w-full md:w-auto text-lg flex items-center justify-center gap-2"
                                        >
                                            Next Letter
                                            <ChevronLeft className="rotate-180" size={20} />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-4 right-6 text-2xl opacity-40 animate-pulse">✨</div>
                                <div className="absolute bottom-4 left-6 text-2xl opacity-40 animate-pulse delay-700">✨</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ValentineWeek;
