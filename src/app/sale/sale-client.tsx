'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/product-card';
import { useEffect, useState } from 'react';

// Simple Countdown Component (Client Side)
const SaleCountdown = () => {
    // Optional: Make it actually tick or just static as before
    // Let's make it static for stability or simple ticking if desired. 
    // Keeping it static to match previous design for now, but in Client Component it causes no harm.
    return (
        <div className="flex gap-4 justify-center py-8 text-white relative z-20">
            {['02', '45', '12'].map((time, i) => (
                <div key={i} className="flex flex-col items-center group">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center text-3xl sm:text-5xl font-mono font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] group-hover:border-yellow-400/50 transition-all duration-300">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 group-hover:from-yellow-200 group-hover:to-yellow-500">
                            {time}
                        </span>
                    </div>
                    <span className="text-[10px] sm:text-xs uppercase mt-3 tracking-[0.2em] text-gray-400 font-semibold group-hover:text-yellow-400 transition-colors">{['Hours', 'Mins', 'Secs'][i]}</span>
                </div>
            ))}
        </div>
    );
};

export default function SaleClient({ products }: { products: any[] }) {
    // Hydration check to ensure client-only logic like random text generation doesn't mismatch?
    // Actually our passed 'products' are from server, so they are stable during render.
    // 'style jsx' works in client components in Next.js registry usually.

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-neutral-100 overflow-x-hidden selection:bg-yellow-400 selection:text-black">
            {/* Marquee Banner */}
            <div className="bg-yellow-400 text-black overflow-hidden py-3 whitespace-nowrap sticky top-0 z-50 shadow-[0_0_20px_rgba(234,179,8,0.5)] border-b-4 border-black">
                <div className="animate-marquee inline-block font-black tracking-widest text-sm sm:text-base uppercase">
                    ⚠️ FLASH SALE LIVE &nbsp;•&nbsp; UNSTABLE PRICES &nbsp;•&nbsp; REFRESH TO RESET &nbsp;•&nbsp; 50% OFF FLASH ITEMS &nbsp;•&nbsp; LIMITED TIME ONLY &nbsp;•&nbsp; ⚠️ FLASH SALE LIVE &nbsp;•&nbsp; UNSTABLE PRICES &nbsp;•&nbsp; REFRESH TO RESET &nbsp;•&nbsp; 50% OFF FLASH ITEMS &nbsp;•&nbsp; LIMITED TIME ONLY &nbsp;•&nbsp;
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-40">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#050505] to-[#050505] z-0"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0 scale-150"></div>

                {/* Animated blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>

                <div className="container relative z-10 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-700">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                        </span>
                        <span className="text-yellow-400 font-bold tracking-wider text-xs sm:text-sm uppercase">Live Random Drops</span>
                    </div>

                    <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.9] text-white drop-shadow-2xl relative">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-600">FLASH</span>
                        <span className="block text-stroke-2 text-stroke-white/20 text-transparent relative">
                            SALE
                            <span className="absolute inset-0 text-yellow-400/10 blur-sm select-none" aria-hidden="true">SALE</span>
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-400 mb-10 font-light leading-relaxed">
                        Prices fluctuate. Items vanish. <br />
                        <span className="text-yellow-400 font-medium">Fortune favors the fast.</span>
                    </p>

                    <SaleCountdown />

                    <div className="mt-10 flex flex-col sm:flex-row gap-6 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-black text-lg h-14 px-12 rounded-full shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)] transition-all hover:scale-105" asChild>
                            <Link href="#deals">HUNT DEALS ↓</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Sale Grid */}
            <section id="deals" className="py-24 container relative">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-white/5 pb-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white">Current Inventory</h2>
                        <p className="text-gray-500 text-lg">
                            Displaying <span className="text-white font-mono">{products.length}</span> items. Next refresh in... whenever you click refresh.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        onClick={() => window.location.reload()}
                        className="h-12 px-6 border-white/10 hover:bg-white/5 hover:border-yellow-400/50 hover:text-yellow-400 transition-all duration-300 font-bold tracking-wide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21h5v-5" /></svg>
                        SHUFFLE ITEMS
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                    {products.map((product, idx) => {
                        const isFlash = product.name.startsWith('[⚡FLASH]');
                        return (
                            <div key={product.id} className="group relative">
                                {isFlash && (
                                    <div className="absolute -top-4 -right-4 z-30 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                        <div className="bg-yellow-400 text-black text-xs font-black px-3 py-1 shadow-lg border-2 border-black">
                                            GLITCH PRICE
                                        </div>
                                    </div>
                                )}

                                <div className={`relative transition-all duration-500 hover:-translate-y-2 ${isFlash ? '' : ''}`}>
                                    <div className={`
                                        rounded-2xl overflow-hidden bg-[#111] border transition-all duration-300
                                        ${isFlash
                                            ? 'border-yellow-400/30 shadow-[0_0_30px_-10px_rgba(234,179,8,0.2)] hover:border-yellow-400 hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.4)]'
                                            : 'border-white/5 hover:border-white/20 hover:shadow-2xl'
                                        }
                                    `}>
                                        <div className="relative">
                                            <div className={`${isFlash ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'} transition-opacity`}>
                                                <ProductCard product={product} />
                                            </div>

                                            {/* Overlay for quick action */}
                                            {isFlash && (
                                                <div className="absolute inset-0 pointer-events-none border-4 border-yellow-400/20 rounded-2xl"></div>
                                            )}
                                        </div>
                                    </div>

                                    {isFlash && (
                                        <div className="absolute -bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase glow-text">
                                                ⚡ 5 people viewing
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-40 text-center border-t border-white/5 pt-20">
                    <h3 className="text-2xl font-bold mb-4 text-white">Missed a deal?</h3>
                    <p className="mb-8 text-gray-500">
                        It happens. The matrix resets every time you blink (or refresh).
                    </p>
                    <Link
                        href="/all-products"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-white/5 px-8 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-all"
                    >
                        View Stable Collection
                    </Link>
                </div>
            </section>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .text-stroke-2 {
                    -webkit-text-stroke: 2px transparent;
                }
                .text-stroke-white\\/20 {
                    -webkit-text-stroke-color: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    );
}
