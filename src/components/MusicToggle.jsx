import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicToggle = ({ autoPlay = false }) => {
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const videoId = "g0ghPuWqYR0";

    const toggleMusic = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Hidden YouTube Player */}
            <div className="hidden">
                {isPlaying ? (
                    <iframe
                        width="0"
                        height="0"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                ) : null}
            </div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMusic}
                title={isPlaying ? "Pause Music" : "Play Romantic Music"}
                className={`p-4 rounded-full shadow-2xl flex items-center justify-center transition-colors ${isPlaying ? 'bg-valentine-600 text-white' : 'bg-white text-valentine-600'
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="playing"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <Volume2 size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="paused"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <VolumeX size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {isPlaying && (
                    <motion.div
                        className="absolute -top-2 -right-2"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <div className="bg-white rounded-full p-1.5 shadow-md">
                            <Music size={14} className="text-valentine-600" />
                        </div>
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
};

export default MusicToggle;
