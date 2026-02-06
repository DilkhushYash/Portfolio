
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/constants';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden bg-primary flex flex-col items-center justify-center text-center">

            {/* Background Gradient Spot - Static and Subtle */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#915eff] rounded-full blur-[180px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#151030] rounded-full blur-[180px] opacity-30 pointer-events-none"></div>

            <div className="max-w-4xl w-full mx-auto px-6 relative z-10 flex flex-col items-center gap-8">

                {/* Profile Photo - Static, Premium Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="w-[180px] h-[180px] rounded-full p-[3px] bg-gradient-to-b from-[#915eff] to-transparent shadow-2xl shadow-[#915eff]/20">
                        <img
                            src={profileImg}
                            alt="profile"
                            className="w-full h-full rounded-full object-cover border-4 border-[#050816]"
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h2 className="text-[#dfd9ff] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                        {PROFILE.role}
                    </h2>
                    <h1 className="font-bold text-white text-[50px] sm:text-[70px] leading-tight tracking-tighter mb-6">
                        Hello, I'm <br className="sm:hidden" />
                        <span className="text-gradient">{PROFILE.name}</span>
                    </h1>
                    <p className="text-secondary text-[16px] sm:text-[18px] max-w-xl mx-auto leading-relaxed font-light">
                        {PROFILE.heroBio}
                    </p>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex gap-4 mt-4"
                >
                    <a href="#projects" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-md">
                        View Work
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full bg-[#915eff] text-white font-medium hover:bg-[#804dee] transition-all shadow-lg shadow-[#915eff]/30">
                        Contact Me
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
