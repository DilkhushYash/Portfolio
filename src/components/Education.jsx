
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/constants';

const EducationCard = ({ education, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl w-full border-l-4 border-[#915eff] mb-6 hover:bg-white/5 transition-colors"
        >
            <h3 className="text-white text-[20px] font-bold tracking-tight">{education.degree}</h3>
            <p className="text-secondary text-[16px] font-semibold mt-1">
                {education.institution}
            </p>
            <div className="flex justify-between items-center mt-4">
                <p className="text-secondary text-[14px]">{education.duration}</p>
                {education.grade && (
                    <span className="text-[#915eff] bg-[#915eff]/10 px-3 py-1 rounded-full text-[12px] font-medium border border-[#915eff]/20">
                        {education.grade}
                    </span>
                )}
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20 relative z-0">
            <div className="max-w-7xl mx-auto px-6 sm:px-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-[#dfd9ff] font-medium uppercase tracking-wider text-sm">Academic Journey</p>
                    <h2 className="text-white font-black md:text-[50px] sm:text-[40px] text-[30px] tracking-tight">Education.</h2>
                </motion.div>

                <div className="mt-10 flex flex-col gap-4">
                    {EDUCATION.map((edu, index) => (
                        <EducationCard key={`education-${index}`} education={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
