
import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH } from '../data/constants';

const ResearchCard = ({ research, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl w-full hover:border-[#915eff]/50 transition-all group"
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-white text-[22px] font-bold group-hover:text-[#915eff] transition-colors tracking-tight">{research.title}</h3>
                <span className="mt-2 md:mt-0 px-3 py-1 bg-white/5 rounded-lg text-[12px] text-secondary border border-white/10">
                    {research.date}
                </span>
            </div>

            <p className="text-secondary text-[15px] leading-7 font-light">
                {research.description}
            </p>
        </motion.div>
    );
};

const Research = () => {
    return (
        <section id="research" className="py-20 bg-primary/30 relative z-0">
            {/* Subtle Background Element */}
            <div className="absolute right-0 top-1/4 w-[30%] h-[40%] bg-[#915eff] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-right"
                >
                    <p className="text-[#dfd9ff] font-medium uppercase tracking-wider text-sm">Innovation & Discovery</p>
                    <h2 className="text-white font-black md:text-[50px] sm:text-[40px] text-[30px] tracking-tight">Research Paper.</h2>
                </motion.div>

                <div className="mt-10 flex flex-col gap-8">
                    {RESEARCH.map((item, index) => (
                        <ResearchCard key={`research-${index}`} research={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
