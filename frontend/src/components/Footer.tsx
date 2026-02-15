
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0a1f13] text-white pt-12 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-white shadow-lg shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="Nile to Zion Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white leading-tight text-center md:text-left">Nile to Zion<br />Tours and Safaris</h3>
                            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
                                Experience the magic of Africa with us. Unforgettable safaris, curated approaches, and premium comfort.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold mb-6 text-safari-green">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-safari-green transition-colors flex items-center gap-2 group"><span className="text-safari-green group-hover:translate-x-1 transition-transform">›</span> Home</Link></li>
                            <li><Link href="/about" className="hover:text-safari-green transition-colors flex items-center gap-2 group"><span className="text-safari-green group-hover:translate-x-1 transition-transform">›</span> About Us</Link></li>
                            <li><Link href="/services" className="hover:text-safari-green transition-colors flex items-center gap-2 group"><span className="text-safari-green group-hover:translate-x-1 transition-transform">›</span> Services</Link></li>
                            <li><Link href="/gallery" className="hover:text-safari-green transition-colors flex items-center gap-2 group"><span className="text-safari-green group-hover:translate-x-1 transition-transform">›</span> Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-safari-green transition-colors flex items-center gap-2 group"><span className="text-safari-green group-hover:translate-x-1 transition-transform">›</span> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold mb-6 text-safari-green">Our Services</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-2"><span className="text-safari-green">›</span> <Link href="/services#tours-and-excursions" className="hover:text-safari-green transition-colors">Tours</Link></li>
                            <li className="flex items-center gap-2"><span className="text-safari-green">›</span> <Link href="/services#luxury-safaris" className="hover:text-safari-green transition-colors">Safaris</Link></li>
                            <li className="flex items-center gap-2"><span className="text-safari-green">›</span> <Link href="/services#hotel-booking" className="hover:text-safari-green transition-colors">Hotel Booking</Link></li>
                            <li className="flex items-center gap-2"><span className="text-safari-green">›</span> <Link href="/services#flight-ticketing" className="hover:text-safari-green transition-colors">Ticketing</Link></li>
                            <li className="flex items-center gap-2"><span className="text-safari-green">›</span> <Link href="/services#airport-transfers" className="hover:text-safari-green transition-colors">Transfers</Link></li>
                            <li className="flex items-center gap-2"><span className="text-safari-green">›</span> <Link href="/services#tent-camping" className="hover:text-safari-green transition-colors">Tent Camping</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <h3 className="text-lg font-bold mb-6 text-safari-green text-center md:text-left">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300 flex flex-col items-center md:items-start">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-safari-green mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Kenya House S1<br />Nairobi, Kenya</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-safari-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>+254 721 330243</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-safari-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>info@niletozion.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Nile to Zion Tours and Safaris. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
