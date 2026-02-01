
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { PROJECTS } from '../data/constants';

const ProjectCard = ({ index, name, description, tags, link, source_code_link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.75 }}
            viewport={{ once: true }}
        >
            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                className={`glass-card p-6 rounded-2xl sm:w-[360px] w-full h-full flex flex-col justify-between hover:border-[#915eff]/30 transition-colors group ${link && link !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={() => {
                    const targetLink = link && link !== '#' ? link : (source_code_link && source_code_link !== '#' ? source_code_link : null);
                    if (targetLink) window.open(targetLink, "_blank");
                }}
            >
                <div className="relative w-full h-[230px] rounded-xl overflow-hidden mb-5">
                    {/* Minimal Gradient Background for Project Thumbnail */}
                    <div
                        className={`w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                        style={{
                            background: `linear-gradient(135deg, rgba(20,20,40,1) 0%, rgba(145,94,255,0.2) 100%)`
                        }}
                    />
                    {/* Overlay Icon or Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white font-bold text-[24px] px-4 text-center tracking-tight">{name}</h3>
                    </div>
                </div>

                <div className="flex flex-col flex-grow">
                    <p className="text-secondary text-[14px] leading-6 font-light">{description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <p key={tag} className={`text-[12px] font-medium text-[#915eff] bg-[#915eff]/10 px-2 py-1 rounded-md`}>
                                #{tag}
                            </p>
                        ))}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-6 sm:px-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16"
                >
                    <p className="text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[20px] text-[16px] uppercase tracking-wider">My Work</p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
                    <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        Following projects showcases my skills and experience through real-world examples of my work.
                        Detailed with key technologies used and brief descriptions.
                    </p>
                </motion.div>

                <div className="mt-20 flex flex-wrap gap-7">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
