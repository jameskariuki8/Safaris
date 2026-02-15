
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-green-50">

            {/* 1. Magical Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[20s] hover:scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000')", // Safari / Wildlife Vibe
                        filter: "brightness(0.6)"
                    }}
                />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-xl">
                        Our Story
                    </h1>
                    <p className="text-xl md:text-2xl text-green-50 font-light leading-relaxed">
                        From the banks of the Nile to the peaks of Zion, we bridge worlds through unforgettable journeys.
                    </p>
                </div>
            </div>

            {/* 2. About Us & History Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[400px] md:h-[500px] w-full rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&q=80&w=1000" // Tent/Camping Vibe
                                alt="Our History"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-safari-green/20 rounded-full blur-2xl"></div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6 text-green-900">
                        <span className="uppercase tracking-widest text-safari-green font-bold text-sm">Who We Are</span>
                        <h2 className="text-4xl font-serif font-bold leading-tight">We Are Storytellers of the Wild</h2>
                        <div className="space-y-4 text-green-800 text-lg leading-relaxed">
                            <p>
                                **Nile to Zion Tours and Safaris** represents a journey of connection. Founded on a passion for the raw beauty of African landscapes and the spiritual depth of its history, we started as a small team of guides with a big dream.
                            </p>
                            <p>
                                Over the years, we have grown from arranging local excursions to orchestrating complex, cross-border expeditions. Our history is paved with thousands of sunsets watched, miles traversed, and smiles shared. We don't just show you sights; we invite you into the narrative of the land.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Vision & Mission Section */}
            <section className="py-20 bg-green-100/50 text-green-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 relative z-10">
                    {/* Vision */}
                    <div className="bg-white p-8 rounded-2xl border border-green-200 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-safari-green">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-green-900">Our Vision</h3>
                        <p className="text-green-700 text-lg leading-relaxed">
                            To be the premier bridge connecting travelers to the soul of Africa, creating a legacy of conservation, cultural appreciation, and life-changing experiences that resonate long after the journey ends.
                        </p>
                    </div>
                    {/* Mission */}
                    <div className="bg-white p-8 rounded-2xl border border-green-200 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-safari-green">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-green-900">Our Mission</h3>
                        <p className="text-green-700 text-lg leading-relaxed">
                            We are dedicated to providing seamless, sustainable, and personalized travel experiences. We strive to empower local communities, protect wildlife, and deliver unparalleled service that turns every trip into a cherished memory.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="uppercase tracking-widest text-safari-green font-bold text-sm">Our Difference</span>
                    <h2 className="text-4xl font-serif font-bold text-green-900 mt-2">Why Travel With Us?</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Local Experts", desc: "Our guides are born and raised in the regions we explore. They know every hidden path and untold story.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600" }, // Swapped image
                        { title: "Tailored Journeys", desc: "No two travelers are alike. We customize every itinerary to match your pace, interests, and dreams.", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600" }, // Swapped image
                        { title: "Sustainability", desc: "We are committed to eco-friendly practices that preserve the environment for future generations.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600" }
                    ].map((item, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl h-[300px] shadow-lg cursor-pointer">
                            <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-shadow-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Our Target Clients */}
            <section className="py-20 bg-green-100/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <span className="uppercase tracking-widest text-safari-green font-bold text-sm">Who We Serve</span>
                            <h2 className="text-4xl font-serif font-bold text-green-900 mt-2 mb-6">Designed For Every Explorer</h2>
                            <ul className="space-y-6">
                                {[
                                    { label: "Family Adventures", desc: "Safe, educational, and fun trips for all ages.", icon: "👨‍👩‍👧‍👦" },
                                    { label: "Couples & Honeymooners", desc: "Romantic getaways in the most secluded paradise spots.", icon: "💍" },
                                    { label: "Corporate Groups", desc: "Team building and executive retreats in the wild.", icon: "🤝" },
                                    { label: "Solo Travelers", desc: "Empowering journeys for the independent spirit.", icon: "🎒" }
                                ].map((client, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-3xl">{client.icon}</span>
                                        <div>
                                            <h4 className="text-lg font-bold text-green-900">{client.label}</h4>
                                            <p className="text-green-700 text-sm">{client.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="h-48 w-full relative rounded-2xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400" alt="Family" fill className="object-cover" /></div>
                                <div className="h-64 w-full relative rounded-2xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=400" alt="Solo" fill className="object-cover" /></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-64 w-full relative rounded-2xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=400" alt="Wedding" fill className="object-cover" /></div>
                                <div className="h-48 w-full relative rounded-2xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400" alt="Corporate" fill className="object-cover" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. How We Operate */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-green-900">How We Operate</h2>
                    <p className="text-green-700 mt-4 max-w-2xl mx-auto">From the first hello to the final wave goodbye, our process is seamless and client-centered.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-green-200 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { step: "01", title: "Consultation", desc: "We listen to your desires and preferences.", img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=400" },
                            { step: "02", title: "Design", desc: "We craft a bespoke itinerary just for you.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400" },
                            { step: "03", title: "Booking", desc: "We secure all accommodations an permits.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400" },
                            { step: "04", title: "Experience", desc: "You embark on the journey of a lifetime.", img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=400" }
                        ].map((op, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                                    <Image src={op.img} alt={op.title} width={80} height={80} className="object-cover w-full h-full" />
                                </div>
                                <div className="w-10 h-10 bg-safari-green text-white rounded-full flex items-center justify-center font-bold mb-3">
                                    {op.step}
                                </div>
                                <h4 className="text-xl font-bold text-green-900 mb-2">{op.title}</h4>
                                <p className="text-green-600 text-sm">{op.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-green-100 text-center">
                <h2 className="text-4xl font-bold mb-6 text-green-900">Ready to Start Your Journey?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-green-700">Let us help you write your own story in the heart of Africa.</p>
                <Link href="/contact" className="px-8 py-4 bg-safari-green text-white font-bold rounded-full shadow-xl hover:bg-green-700 transition-colors transform hover:scale-105 inline-block">
                    Contact Us Today
                </Link>
            </section>

        </div>
    );
}
