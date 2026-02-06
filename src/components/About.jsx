
import React from 'react';
import { motion } from 'framer-motion';
// import Tilt from 'react-parallax-tilt'; // Note: react-tilt default import issue sometimes, using CommonJS require or named if available. Actually better to use react-parallax-tilt widely used, but I installed react-tilt. Let's try standard import.
import Tilt from 'react-parallax-tilt';
import { PROFILE } from '../data/constants';
import profileImg from '../assets/profile.jpg';

const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

const About = () => {
    return (
        <section id="about" className="overflow-hidden py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-6 sm:px-16">
                <motion.div variants={fadeIn('up', 'spring', 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <p className="text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[20px] text-[16px] uppercase tracking-wider">Introduction</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
                </motion.div>

                <div className="mt-8 flex flex-col md:flex-row gap-10 items-center">
                    <motion.div
                        variants={fadeIn('right', 'spring', 0.5, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex-[0.6] min-w-[300px]"
                    >
                        <Tilt className="Tilt w-full h-full" tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05}>
                            <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                                    <img src={profileImg} alt="profile" className="w-[80%] rounded-full object-cover border-4 border-white/10" />
                                    <h3 className="text-white text-[20px] font-bold text-center mt-4">{PROFILE.role}</h3>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify">
                            {PROFILE.aboutBio}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-5">
                            {/* Optional: Add mini cards for quick stats or signature */}
                            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-[#915eff] hover:text-white transition-colors">LinkedIn</a>
                            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-[#915eff] hover:text-white transition-colors">GitHub</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
