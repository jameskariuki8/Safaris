
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock Data
// Mock Data
// Mock Data
const facilities = [
  { id: 1, title: "4x4 Land Cruisers", img: "/images/safaris.png" }, // Local Image
  { id: 2, title: "Safari Vans", img: "/images/van.png" }, // Local Image
  { id: 3, title: "Luxury Tents", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600" },
  { id: 4, title: "Bush Camps", img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=600" },
];

const reviews = [
  { id: 1, name: "Xavier H.", date: "4 days ago", rating: 5, text: "An unbelievable trip! Melike and myself must say thank you to Catherine for this exceptional organization...", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" },
  { id: 2, name: "Zbigniew S.", date: "1 week ago", rating: 5, text: "Seeing hard-to-see animals thanks to a phenomenal tour guide. We booked a six-day Safari trip...", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
  { id: 3, name: "James B.", date: "1 week ago", rating: 5, text: "Best time ever!! We've just finished a seven day safari with mufasa tours and honestly had the best time...", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
  { id: 4, name: "Victoria G.", date: "1 week ago", rating: 5, text: "The best Tsavo Safari with our guide Baka. We've just finished a three-day safari and had an amazing time...", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" },
  { id: 5, name: "Culture650412", date: "2 weeks ago", rating: 5, text: "Masai Mara. Honestly we had the most amazing time. We went from Diani beach to Masai Mara via...", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" },
];

const moments = [
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1547471080-7541fbe39695?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1513653435787-115f9e88b3eb?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1534161308676-3b71d8677051?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1519095616900-53a5c2fb1eb8?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1550523454-944431d1d81b?auto=format&fit=crop&q=80&w=400",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* 1. Hero Section with Video Background */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold drop-shadow-2xl animate-fade-in-up">
            Nile to Zion Tours and Safaris
          </h1>
          <p className="text-xl md:text-2xl text-green-50 mt-4 max-w-3xl font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your gateway to unforgettable African adventures. Experience nature in its purest form.
          </p>
          <Link
            href="/services"
            className="mt-8 px-8 py-4 bg-safari-green hover:bg-green-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* 2. Services Summary (Flippable Cards with Premium UX) */}
      <section className="py-10 px-4 max-w-7xl mx-auto bg-gray-50/50">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-safari-green font-bold text-sm">What We Offer</span>
          <h2 className="text-4xl font-serif font-bold text-green-900 mt-2">Curated Experiences</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Explore our diverse range of premium travel services designed to create unforgettable memories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[
            {
              id: 1,
              title: "Tours",
              desc: "Discover hidden gems and cultural landmarks with our expert-guided tours across the region.",
              img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600",
              icon: <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            },
            {
              id: 2,
              title: "Safaris",
              desc: "Witness the Big Five in their natural habitat. Experience the raw beauty of the African wilderness.",
              img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800",
              icon: <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            },
            {
              id: 3,
              title: "Hotel Booking",
              desc: "Luxurious stays at the best lodges and hotels, handpicked for comfort and stunning views.",
              img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
              icon: <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            },
            {
              id: 4,
              title: "Flight Ticketing",
              desc: "Seamless international and domestic flight bookings to get you to your destination with ease.",
              img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
              icon: <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            },
            {
              id: 5,
              title: "Airport Transfers",
              desc: "Reliable, comfortable, and timely transfers between airports and your accommodation.",
              img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600",
              icon: <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            },
            {
              id: 6,
              title: "Tent Camping",
              desc: "Immerse yourself in nature with our secure, scenic, and fully equipped luxury camping experiences.",
              img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=600",
              icon: <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m8-2a2 2 0 100-4 2 2 0 000 4z" /></svg>
            },
          ].map((service) => (
            <div key={service.id} className="group w-full max-w-sm h-[400px] perspective-1000 cursor-pointer">
              <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-2xl">

                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>

                  {/* Glassmorphism Content Area */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="mb-4 flex justify-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                        {/* Wireframe Icon */}
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">{service.title}</h3>
                      <div className="w-12 h-1 bg-safari-green mx-auto mb-4 rounded-full"></div>
                      <button className="px-6 py-2 bg-safari-green/90 hover:bg-safari-green text-white font-bold rounded-full text-sm backdrop-blur-sm transition-colors shadow-lg border border-white/20">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl rotate-y-180 overflow-hidden">
                  {/* Blurred Background Image for Theme Consistency */}
                  <Image src={service.img} alt="Background" fill className="object-cover blur-sm opacity-50 scale-110" />

                  {/* Vibrancy Gradient Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-safari-green/90 via-green-600/80 to-green-900/90 backdrop-blur-sm mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Decorative Circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white">
                    <div className="mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="mb-8 text-lg leading-relaxed text-green-50 font-light">
                      {service.desc}
                    </p>
                    <Link href="/services" className="px-8 py-3 bg-white text-safari-green font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl hover:scale-105 transform">
                      Explore & Book
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Facilities Showcase (Interactive Expandable Cards) */}
      <section className="py-10 bg-green-50 relative overflow-hidden">
        {/* Background Ambient Effect */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-safari-green/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/40 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-safari-green font-bold text-sm">Comfort & Style</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mt-2">Our Premium Fleet & Camps</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-safari-green to-transparent mx-auto mt-6"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 h-[600px]">
            {facilities.map((item) => (
              <div
                key={item.id}
                className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-in-out rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 whitespace-nowrap leading-tight">
                      {item.title}
                    </h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-700">
                      <p className="text-green-100/80 text-sm md:text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-md leading-relaxed">
                        Experience the wild in ultimate comfort. Equipped for safety, designed for luxury, and ready for adventure.
                      </p>
                      <button className="mt-6 px-6 py-2 bg-white/10 hover:bg-safari-green backdrop-blur-md rounded-full text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 border border-white/20 hover:border-transparent hover:shadow-[0_0_20px_rgba(46,204,113,0.4)]">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reviews Carousel (African Style) */}
      <section className="py-10 bg-[#f0fdf4] relative overflow-hidden">
        <div className="text-center mb-8 relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#14532d] flex justify-center gap-1 flex-wrap">
            {/* Dancing Text - Splitting characters for individual animation */}
            {("Travel Reviews").split("").map((char, i) => (
              <span
                key={i}
                className="inline-block animate-dance hover:text-safari-green transition-colors cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>

        <div className="w-full overflow-hidden relative group">
          {/* Gradient Masks for carousel edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f0fdf4] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f0fdf4] to-transparent z-10"></div>

          <div className="flex gap-6 animate-marquee-left hover:pause w-max px-4 py-8">
            {[...reviews, ...reviews, ...reviews, ...reviews].map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[300px] md:w-[380px] bg-white p-8 rounded-tr-[3rem] rounded-bl-[3rem] border border-gray-200 shadow-lg hover:shadow-xl shrink-0 flex flex-col relative overflow-hidden transform transition-all hover:-translate-y-2"
              >
                {/* Decorative Corner Patterns */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#22c55e] border-l-transparent opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-r-[40px] border-b-[#22c55e] border-r-transparent opacity-20"></div>

                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-green-100 p-1 bg-white">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image src={review.avatar} alt={review.name} fill sizes="56px" className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg font-serif">{review.name}</h4>
                    <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">{review.date}</span>
                  </div>
                  <div className="ml-auto">
                    {/* African-style Star Icon */}
                    <span className="text-2xl grayscale opacity-50">🌍</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-[#22c55e]">★</div> // Simplified star for robust rendering
                  ))}
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-4 italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Moments Grid */}
      <section className="py-12 bg-[#f0fdf4] relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#14532d] mb-4">
              {/* Typewriter Effect */}
              <span className="inline-block overflow-hidden whitespace-nowrap animate-typewriter">
                Our Moments
              </span>
            </h2>
            <p className="text-[#166534] text-lg md:text-xl font-light tracking-wide">Captured memories from the wild.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-safari-green to-transparent mx-auto mt-8"></div>
          </div>
        </div>

        <div className="w-full overflow-hidden relative group">
          <div className="flex gap-6 animate-marquee-right hover:pause w-max px-4 py-8">
            {[
              {
                title: "Maasai Mara",
                desc: "Witness the Great Migration and the Big Five in Kenya's most famous reserve.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Amboseli National Park",
                desc: "Famous for large elephant herds and views of immense Mount Kilimanjaro.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Tsavo East",
                desc: "Home to the famous 'red elephants' and the longest lava flow in the world.",
                img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Lake Nakuru",
                desc: "A soda lake famous for thousands of flamingos nesting along the shores.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Samburu Reserve",
                desc: "Rich in wildlife with rare northern species like the Grevy's zebra and Somali ostrich.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Ol Pejeta Conservancy",
                desc: "A sanctuary for rhinos and the only place in Kenya to see chimpanzees.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Nairobi National Park",
                desc: "The only wildlife capital in the world, with lions roaming against a city skyline.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Hell's Gate",
                desc: "Known for its spectacular scenery including the Fischer's Tower and Hell's Gate Gorge.",
                img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=800"
              }
            ].concat([
              {
                title: "Maasai Mara",
                desc: "Witness the Great Migration and the Big Five in Kenya's most famous reserve.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Amboseli National Park",
                desc: "Famous for large elephant herds and views of immense Mount Kilimanjaro.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Tsavo East",
                desc: "Home to the famous 'red elephants' and the longest lava flow in the world.",
                img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Lake Nakuru",
                desc: "A soda lake famous for thousands of flamingos nesting along the shores.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Samburu Reserve",
                desc: "Rich in wildlife with rare northern species like the Grevy's zebra and Somali ostrich.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Ol Pejeta Conservancy",
                desc: "A sanctuary for rhinos and the only place in Kenya to see chimpanzees.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Nairobi National Park",
                desc: "The only wildlife capital in the world, with lions roaming against a city skyline.",
                img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Hell's Gate",
                desc: "Known for its spectacular scenery including the Fischer's Tower and Hell's Gate Gorge.",
                img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=800"
              }
            ]).map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col w-[300px] md:w-[350px] shrink-0 transform transition-transform hover:-translate-y-2"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg mb-4 cursor-pointer">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Magical Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-safari-green transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#166534] text-sm leading-relaxed px-2 opacity-80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
