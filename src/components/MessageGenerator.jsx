import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Download, Heart } from 'lucide-react';
import domtoimage from 'dom-to-image-more';

const messages = [
    "You're the reason my world is so bright. I love you, {name}!",
    "To {name}, my favorite person in the entire universe. ❤️",
    "{name}, every heartbeat of mine whispers your name.",
    "Life with you is a dream come true. You're amazing, {name}!",
    "Hey {name}, you're the missing piece to my puzzle. 💝",
    "{name}, you make my heart skip a beat every time I see you.",
    "I'm so lucky to have {name} in my life. You're my everything!"
];

const MessageGenerator = () => {
    const [name, setName] = useState("");
    const [generatedContent, setGeneratedContent] = useState(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const cardRef = useRef(null);

    const [isDownloading, setIsDownloading] = useState(false);

    const generateMessage = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        setIsGenerating(true);

        // Simulate generation delay
        setTimeout(() => {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            setGeneratedContent(randomMsg.replace("{name}", name));
            setIsGenerating(false);
        }, 1500);
    };

    const handleDownload = async () => {
        if (!cardRef.current) return;
        setIsDownloading(true);

        try {
            // Ensure the element is fully rendered and animations have settled
            await new Promise(resolve => setTimeout(resolve, 500));

            const scale = 2; // Better resolution
            const options = {
                height: cardRef.current.offsetHeight * scale,
                width: cardRef.current.offsetWidth * scale,
                style: {
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    width: cardRef.current.offsetWidth + "px",
                    height: cardRef.current.offsetHeight + "px"
                }
            };

            const dataUrl = await domtoimage.toPng(cardRef.current, options);

            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `valentine-${name.trim().replace(/\s+/g, '-').toLowerCase() || 'message'}.png`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error("Image Download Error:", error);
            alert(`Error: ${error.message || "Could not save image"}. Please try taking a screenshot instead!`);
        } finally {
            setIsDownloading(false);
        }
    };

    const handleWhatsAppShare = () => {
        const text = encodeURIComponent(`Check out this Valentine message I generated for you: "${generatedContent}" ❤️ Create your own here!`);
        window.open(`https://wa.me/?text=${text}`, '_blank');
    };

    return (
        <section className="py-24 px-4 bg-white/40">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="romantic-text text-4xl md:text-6xl text-valentine-800 mb-4 px-2">
                        Valentine Message Generator
                    </h2>
                    <p className="text-valentine-600 font-medium italic">
                        Create a custom love note for your special someone
                    </p>
                </div>

                <div className="glass-card p-4 md:p-12 relative overflow-hidden">
                    <form onSubmit={generateMessage} className="relative z-10 flex flex-col md:flex-row gap-4 mb-8">
                        <input
                            type="text"
                            placeholder="Enter their name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex-1 px-6 py-4 rounded-full border-2 border-valentine-200 focus:border-valentine-500 outline-none text-valentine-800 transition-all shadow-inner bg-white/80"
                        />
                        <button
                            type="submit"
                            disabled={isGenerating || !name.trim()}
                            className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                        >
                            {isGenerating ? (
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                                    <Sparkles size={20} />
                                </motion.div>
                            ) : <Sparkles size={20} />}
                            Generate Magic
                        </button>
                    </form>

                    <AnimatePresence mode="wait">
                        {generatedContent && !isGenerating && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative mt-8"
                            >
                                {/* Resulting Card - This is what will be captured */}
                                <div
                                    ref={cardRef}
                                    id="valentine-card-capture"
                                    className="bg-gradient-to-br from-valentine-50 to-pink-100 p-8 md:p-16 rounded-3xl border-2 border-white/50 shadow-2xl text-center relative overflow-hidden"
                                >
                                    {/* Decorative Ornaments */}
                                    <div className="absolute top-4 left-4 text-valentine-200 opacity-50 rotate-12"><Heart size={48} fill="currentColor" /></div>
                                    <div className="absolute bottom-4 right-4 text-valentine-200 opacity-50 -rotate-12"><Heart size={48} fill="currentColor" /></div>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-6 inline-block"
                                    >
                                        <div className="bg-white p-4 rounded-full shadow-lg">
                                            <Heart size={40} className="text-valentine-500 fill-valentine-500" />
                                        </div>
                                    </motion.div>

                                    <h3 className="romantic-text text-2xl md:text-4xl text-valentine-800 leading-relaxed drop-shadow-sm italic">
                                        {generatedContent}
                                    </h3>
                                </div>

                                {/* Action Buttons - Outside ref so they aren't in the image */}
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <button
                                        onClick={handleDownload}
                                        disabled={isDownloading}
                                        className="px-6 py-3 rounded-full border-2 border-valentine-300 text-valentine-600 hover:bg-valentine-50 transition-all flex items-center gap-2 font-bold shadow-sm active:scale-95 disabled:opacity-50"
                                    >
                                        {isDownloading ? (
                                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                                                <Download size={18} />
                                            </motion.div>
                                        ) : <Download size={18} />}
                                        {isDownloading ? "Saving..." : "Save as Image"}
                                    </button>
                                    <button
                                        onClick={handleWhatsAppShare}
                                        className="px-6 py-3 rounded-full bg-[#25D366] text-white hover:bg-green-600 transition-all flex items-center gap-2 font-bold shadow-md active:scale-95"
                                    >
                                        <Send size={18} />
                                        Share to WhatsApp
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default MessageGenerator;
