
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/constants';

const Skills = () => {
    return (
        <section className="py-20 bg-background relative z-0">
            <div className="max-w-7xl mx-auto px-6 sm:px-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[20px] text-[16px] uppercase tracking-wider">My Abilities</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills.</h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-10">
                    {SKILLS.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.75 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-8 min-w-[300px] flex-1 hover:border-[#915eff]/30 transition-shadow duration-300"
                        >
                            <h3 className="text-white text-[24px] font-bold mb-6 text-center tracking-tight">{category.title}</h3>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {category.items.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white/5 text-[#dfd9ff] text-[15px] font-medium rounded-full border border-white/5 hover:bg-[#915eff] hover:border-[#915eff] hover:text-white transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
