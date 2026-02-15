
'use client';

import React, { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent!');
    };

    return (
        <div className="min-h-screen bg-green-50 text-gray-800 flex items-center justify-center p-4 md:p-12 relative overflow-hidden pt-32 md:pt-40">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-safari-green/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-safari-green/20 rounded-full blur-[100px]"></div>
            </div>


            <div className="container max-w-6xl mx-auto z-10 relative">
                <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-20">

                    {/* Left Section: Contact Info */}
                    <div className="w-full md:w-5/12 space-y-8 flex flex-col justify-center">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold relative inline-block text-gray-900">
                                Get In Touch
                                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gray-300 rounded-full"></span>
                                <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-safari-green rounded-full"></span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed pt-6">
                                Have questions about our safaris or want to book your next adventure?
                                We're here to help you plan the trip of a lifetime.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border-2 border-safari-green flex items-center justify-center relative transition-all duration-300 group-hover:bg-safari-green group-hover:text-white text-safari-green">
                                    <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-sm uppercase tracking-wider">Phone</span>
                                    <span className="text-lg font-medium text-gray-900">+254 721 330243</span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border-2 border-safari-green flex items-center justify-center relative transition-all duration-300 group-hover:bg-safari-green group-hover:text-white text-safari-green">
                                    <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-sm uppercase tracking-wider">Email</span>
                                    <span className="text-lg font-medium text-gray-900">info@niletozion.com</span>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border-2 border-safari-green flex items-center justify-center relative transition-all duration-300 group-hover:bg-safari-green group-hover:text-white text-safari-green">
                                    <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-sm uppercase tracking-wider">Location</span>
                                    <span className="text-lg font-medium text-gray-900">Kenya House S1, Nairobi</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-4 pt-4">
                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 rounded-lg bg-safari-green flex items-center justify-center text-white hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-md">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            {/* Twitter/X */}
                            <a href="#" className="w-10 h-10 rounded-lg bg-safari-green flex items-center justify-center text-white hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-md">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 rounded-lg bg-safari-green flex items-center justify-center text-white hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-md">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-10 h-10 rounded-lg bg-safari-green flex items-center justify-center text-white hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-md">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.379c0-4.635 6.091-5.113 6.091 0v8.379h4.967v-9.451c0-7.222-8.327-6.723-11.09-3.267v-2.282z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Section: Animated Contact Form */}
                    <div className="w-full md:w-7/12 relative group mt-8 md:mt-0">
                        {/* THE ANIMATED GREEN LINE BORDER */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-safari-green via-emerald-500 to-safari-green rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-border-spin"></div>

                        <div className="relative bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group/input">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-transparent border-b-2 border-gray-300 py-2 text-gray-900 outline-none focus:border-safari-green peer transition-colors"
                                            placeholder=" "
                                            onChange={handleChange}
                                        />
                                        <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-safari-green peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm pointer-events-none">Your Name</label>
                                    </div>
                                    <div className="relative group/input">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-transparent border-b-2 border-gray-300 py-2 text-gray-900 outline-none focus:border-safari-green peer transition-colors"
                                            placeholder=" "
                                            onChange={handleChange}
                                        />
                                        <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-safari-green peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm pointer-events-none">Email</label>
                                    </div>
                                </div>

                                <div className="relative group/input">
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        className="w-full bg-transparent border-b-2 border-gray-300 py-2 text-gray-900 outline-none focus:border-safari-green peer transition-colors"
                                        placeholder=" "
                                        onChange={handleChange}
                                    />
                                    <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-safari-green peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm pointer-events-none">Subject</label>
                                </div>

                                <div className="relative group/input">
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-transparent border-b-2 border-green-300 py-2 text-green-900 outline-none focus:border-safari-green peer transition-colors resize-none"
                                        placeholder=" "
                                        onChange={handleChange}
                                    ></textarea>
                                    <label className="absolute left-0 top-2 text-green-600 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-safari-green peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm pointer-events-none ">Say Something</label>
                                </div>

                                <button type="submit" className="px-8 py-3 bg-safari-green text-white font-bold rounded-full shadow-lg hover:bg-gray-900 hover:text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom CSS for the moving border animation if needed in global CSS, but here I used a blurred gradient background that acts as a glowing border. 
              For a "moving line" (snake effect), we'd need SVG or specific keyframes. 
              The user asked for "Green line on the card outside should be animated and moving". 
              The 'animate-border-spin' keyframes are defined below.
          */}
            <style jsx global>{`
            @keyframes border-spin {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-border-spin {
                background-size: 200% 200%;
                animation: border-spin 3s ease infinite;
            }
          `}</style>
        </div>
    );
}
