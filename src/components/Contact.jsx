
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/constants';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Placeholder for email sending logic (e.g., EmailJS)
        setTimeout(() => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <section id="contact" className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-6 sm:px-16 w-full flex flex-col md:flex-row gap-10">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-[0.75] glass-card p-10 rounded-2xl"
                >
                    <p className="text-[#dfd9ff] font-medium uppercase tracking-wider text-sm">Get in touch</p>
                    <h3 className="text-white font-black md:text-[50px] sm:text-[40px] text-[30px]">Contact.</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-2">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-secondary focus:outline-none focus:border-[#915eff] transition-colors"
                                autoComplete="off"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-2">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-secondary focus:outline-none focus:border-[#915eff] transition-colors"
                                autoComplete="off"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-2">Your Message</span>
                            <textarea
                                rows="5"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What do you want to say?"
                                className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-secondary focus:outline-none focus:border-[#915eff] transition-colors resize-none"
                            />
                        </label>

                        <button
                            type="submit"
                            className="px-8 py-3 bg-[#915eff] text-white font-bold shadow-lg shadow-[#915eff]/30 rounded-full hover:bg-[#804dee] transition-all w-fit"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>

                <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative overflow-hidden rounded-2xl">
                    {/* 2D Abstract Map or Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1d1836] to-[#050816] flex items-center justify-center">
                        <div className="w-[300px] h-[300px] bg-[#915eff] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                        <h3 className="relative text-white/50 text-2xl font-bold tracking-widest uppercase">Connect</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
