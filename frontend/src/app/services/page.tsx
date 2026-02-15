
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    badge: { icon: React.ReactNode; label: string; color: string; bgColor: string };
    features: string[];
}

const services: Service[] = [
    {
        id: 1,
        title: "Tours & Excursions",
        description: "Discover the hidden gems of Africa with our curated tours. Whether it's a day trip to the Nairobi National Park or a cultural visit to a Maasai village, we ensure an authentic and memorable experience.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
        badge: {
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            label: "Adventure",
            color: "text-green-700",
            bgColor: "bg-green-100"
        },
        features: ["Custom Itineraries", "Expert Documentation", "Group & Solo Packages", "Cultural Immersion"]
    },
    {
        id: 2,
        title: "Luxury Safaris",
        description: "Experience the wild in style. Our luxury safaris combine thrill and comfort, taking you to the heart of the action in Masai Mara, Amboseli, and beyond, with stays in world-class lodges.",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1200", // New Image: Buffalo/Wildlife close up, high quality
        badge: {
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
            label: "Premium",
            color: "text-emerald-700",
            bgColor: "bg-emerald-100"
        },
        features: ["Game Drives", "Big 5 Spotting", "Luxury Lodges", "Professional Guides"]
    },
    {
        id: 3,
        title: "Hotel Booking",
        description: "From boutique hotels to 5-star resorts, we handle all your accommodation needs. We secure the best rates and collaborative amenities to ensure your stay is as comfortable as it is memorable.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        badge: {
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
            label: "Relaxation",
            color: "text-teal-700",
            bgColor: "bg-teal-100"
        },
        features: ["Best Rate Guarantee", "Corporate Discounts", "Family Suites", "Honeymoon Packages"]
    },
    {
        id: 4,
        title: "Flight Ticketing",
        description: "We simplify your travel logistics. Whether domestic or international, we find the most convenient routes and competitive prices for your flights, handling all changes and confirmations.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
        badge: {
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
            label: "Efficiency",
            color: "text-lime-700",
            bgColor: "bg-lime-100"
        },
        features: ["Global Airlines", "24/7 Support", "Group Bookings", "Visa Assistance"]
    },
    {
        id: 5,
        title: "Airport Transfers",
        description: "Arrive stress-free. Our reliable airport transfer service ensures you are picked up and dropped off on time in clean, comfortable vehicles with professional drivers.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
        badge: {
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            label: "Punctual",
            color: "text-green-800",
            bgColor: "bg-green-200"
        },
        features: ["Meet & Greet", "Luggage Assistance", "Private Chauffeurs", "Luxury Fleet"]
    },
    {
        id: 6,
        title: "Tent Camping",
        description: "Immerse yourself fully in nature with our premium tent camping experiences. Sleep under the stars in secure, comfortable campsites located in the heart of the wilderness, complete with campfires and night sounds.",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1200",
        badge: {
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m19.28 0H17.5m-8.5-1.553l.5 1.553h-3l.5-1.553m0-9.257l2.19 1.46c.16.107.28.272.338.455l.84 2.687c.07.225-.09.455-.326.455H5.458c-.236 0-.396-.23-.326-.455l.84-2.687a.75.75 0 01.338-.455l2.19-1.46zm9 0l2.19 1.46c.16.107.28.272.338.455l.84 2.687c.07.225-.09.455-.326.455h-4.604c-.236 0-.396-.23-.326-.455l.84-2.687a.75.75 0 01.338-.455l2.19-1.46z" /></svg>,
            label: "Wilderness",
            color: "text-orange-700",
            bgColor: "bg-orange-100"
        },
        features: ["Secure Campsites", "Bonfires & Stargazing", "Nature Walks", "Full Board Meals"]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-green-50 pt-20">

            {/* 1. Hero Section */}
            <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image using generic safari aesthetics */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000')", // Travel/Map Vibe
                        filter: "brightness(0.6)"
                    }}
                />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-xl animate-fade-in-up">
                        Our Services
                    </h1>
                    <p className="text-xl md:text-2xl text-green-50 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        We craft unforgettable journeys. From the savannahs of the Mara to the white sands of Diani, we handle every detail so you don't have to.
                    </p>
                </div>
            </div>

            {/* 2. Services List */}
            <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        id={service.title.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and').replace(/[^\w-]+/g, '')}
                        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >

                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-green-100">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 animate-float border border-green-100">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.badge.bgColor} ${service.badge.color}`}>
                                        {service.badge.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-green-600 font-bold uppercase tracking-wider">Experience</p>
                                        <p className="text-lg font-bold text-green-900">{service.badge.label}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-safari-green font-bold text-lg">0{index + 1}</span>
                                <div className="h-[2px] w-12 bg-safari-green"></div>
                                <span className="uppercase tracking-widest text-green-600 text-sm font-semibold">Service</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
                                {service.title}
                            </h2>

                            <p className="text-lg text-green-800 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-shadow hover:border-safari-green">
                                        <span className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-safari-green' : 'bg-emerald-500'}`}></span>
                                        <span className="text-green-900 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-safari-green font-bold hover:text-green-900 transition-colors group/link text-lg"
                                >
                                    Read More
                                    <svg className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

            <style jsx global>{`
        @keyframes border-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-float {
            animation: border-float 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
