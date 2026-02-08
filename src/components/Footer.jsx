import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-valentine-100 bg-white/20">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-valentine-800 font-medium"
                >
                    <span>Made with</span>
                    <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <Heart size={18} className="text-valentine-500 fill-valentine-500" />
                    </motion.span>
                    <span>by <span className="font-bold underline decoration-valentine-300">Forever_Mithuna</span></span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-valentine-400 text-sm font-medium tracking-wide"
                >
                    &copy; 2026 Nagesh. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
