
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
    // Lions & Big Cats
    { src: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80&w=800", alt: "Lion King" },
    { src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800", alt: "Resting Lion" },
    { src: "https://images.unsplash.com/photo-1511216113906-8f57bb83e776?auto=format&fit=crop&q=80&w=800", alt: "Snow Leopard" }, // Maybe not safari but beautiful
    { src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800", alt: "Cheetah Sprint" },
    { src: "https://images.unsplash.com/photo-1550950355-6c7038936082?auto=format&fit=crop&q=80&w=800", alt: "Leopard in Tree" },

    // Elephants
    { src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=800", alt: "Elephant Family" },
    { src: "https://images.unsplash.com/photo-1581852017103-68ac6550f805?auto=format&fit=crop&q=80&w=800", alt: "Elephant Closeup" },
    { src: "https://images.unsplash.com/photo-1518022525094-218f8a9c89af?auto=format&fit=crop&q=80&w=800", alt: "Elephants in River" },
    { src: "https://images.unsplash.com/photo-1564760055278-8d5c9e1ce76c?auto=format&fit=crop&q=80&w=800", alt: "Elephant Dusk" },

    // Giraffes & Zebras
    { src: "https://images.unsplash.com/photo-1534064506385-d6023cb36551?auto=format&fit=crop&q=80&w=800", alt: "Giraffe Neck" },
    { src: "https://images.unsplash.com/photo-1547471080-7541fbe39695?auto=format&fit=crop&q=80&w=800", alt: "Zebras Grazing" },
    { src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=80&w=800", alt: "Giraffe Sunset" },
    { src: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=800", alt: "Zebra Pair" },

    // Landscapes & Others
    { src: "/images/safaris.png", alt: "Safari Land Cruiser" },
    { src: "https://images.unsplash.com/photo-1488831332906-8d591df4643c?auto=format&fit=crop&q=80&w=800", alt: "Savanna Tree" },
    { src: "https://images.unsplash.com/photo-1523359288210-9b6f8f53a163?auto=format&fit=crop&q=80&w=800", alt: "Wildebeest Migration" },
    { src: "https://images.unsplash.com/photo-1519757656209-5a5893d39578?auto=format&fit=crop&q=80&w=800", alt: "Hippo Yawn" },
    { src: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&q=80&w=800", alt: "Rhino" },
    { src: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&q=80&w=800", alt: "Flamingos" },
    { src: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800", alt: "Buffalo" },

    // More Majestic Shots
    { src: "https://images.unsplash.com/photo-1504221507732-5246cbb48d4e?auto=format&fit=crop&q=80&w=800", alt: "Majestic Nature" },
    { src: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80&w=800", alt: "Leopard Close" },
    { src: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&q=80&w=800", alt: "Lioness Hunt" },
    { src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", alt: "Jungle Feel" },
    { src: "https://images.unsplash.com/photo-1570020786969-9c3a3712530c?auto=format&fit=crop&q=80&w=800", alt: "Baby Elephant" },

    // Atmosphere
    { src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", alt: "Foggy Morning" },
    { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800", alt: "Wilderness" },
    { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800", alt: "Lake" },
    { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800", alt: "Mountain" },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800", alt: "Beach/Coast Safari" }
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#f8f9fa] pt-0">

            {/* 1. Hero Section: One Big Picture */}
            <div
                className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/gallary.png')"
                }}
            >
                {/* Fallback color */}
                <div className="absolute inset-0 bg-gray-900 z-[-1]" />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-lg tracking-wide opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                        Captured Moments
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light italic opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                        "The only man I envy is the man who has not yet been to Africa - for he has so much to look forward to."
                    </p>
                </div>
            </div>

            {/* 2. Classical Gallery Grid */}
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-safari-green mb-4 uppercase tracking-widest">Our Visual Journey</h2>
                    <div className="w-24 h-1 bg-safari-green mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Explore the raw beauty of nature through our lens. Each photograph tells a story of the wild.
                    </p>
                </div>

                {/* Masonry-like Grid using columns */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <div className="relative w-full">
                                {/* Using standard img tag inside columns often handles aspect ratios purely by CSS better for masonry than Next/Image 'fill', 
                            but Next/Image with width/height 0 and sizes is also viable. 
                            Simple <img> is often smoother for raw masonry unless we know aspect ratios beforehand. 
                            Let's use a wrapper for Next/Image to be safe or just standard img for the masonry effect with unknown heights. */}
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-medium text-lg tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {img.alt}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-5xl hover:text-safari-green transition-colors focus:outline-none"
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>
                    <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Gallery Fullscreen"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}

            {/* Styles for Animations */}
            <style jsx global>{`
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translate3d(0, 40px, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
        .animate-fade-in-up {
            animation-name: fadeInUp;
            animation-duration: 1s;
            animation-fill-mode: both;
        }
      `}</style>

        </div>
    );
}
