import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Rahul S.",
        role: "Happy Boyfriend",
        text: "This made my Valentine special ❤️. My girlfriend was stunned by the animations and the personal touch.",
        stars: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
    },
    {
        id: 2,
        name: "Priya M.",
        role: "Romantic Soul",
        text: "Shared this with my partner, he loved it! The letter stack effect is so creative and touching.",
        stars: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
        id: 3,
        name: "Anas K.",
        role: "Grateful User",
        text: "The best Valentine site I've ever seen. The music and the heart generator are perfect additions.",
        stars: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anas"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="romantic-text text-4xl md:text-6xl text-valentine-800 mb-4">
                        Love From Our Users
                    </h2>
                    <div className="flex justify-center gap-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 flex flex-col relative"
                        >
                            <Quote className="absolute top-6 right-8 text-valentine-100 h-12 w-12 -z-10" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-valentine-200">
                                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover bg-valentine-50" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{review.name}</h4>
                                    <p className="text-valentine-500 text-sm">{review.role}</p>
                                </div>
                            </div>

                            <p className="text-slate-600 italic leading-relaxed flex-1">
                                "{review.text}"
                            </p>

                            <div className="mt-6 pt-6 border-t border-valentine-50 flex justify-between items-center text-xs text-valentine-400 uppercase tracking-widest font-bold">
                                <span>Verified Lover</span>
                                <Heart size={14} className="fill-valentine-400" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
