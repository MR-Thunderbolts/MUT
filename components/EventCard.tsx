"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import EventModal from "./EventModal";

export default function EventCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <EventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="w-full h-full flex flex-col items-center justify-center relative p-4 gap-4">

                {/* Card Row with Arrows */}
                <div className="flex items-center justify-center w-full gap-4">
                    {/* Left Arrow */}
                    <button className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center text-white shadow-md shrink-0">
                        <CaretLeft size={24} weight="bold" />
                    </button>

                    {/* Main Card Container */}
                    {/* Uses flex-1 to take available space, but constrained by aspect ratio */}
                    <div className="relative h-auto max-h-full w-auto aspect-[4/5] max-w-full bg-[#2DBC9F] rounded-3xl overflow-hidden shadow-soft flex flex-col shrink-1 min-h-0">

                        {/* Background Graphics / Image Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-90">
                            {/* Placeholder for the "OKTOBER MUT" text graphic */}
                            <h1 className="text-6xl font-black text-white/20 text-center leading-none tracking-tighter">
                                OKTOBER<br />MUT
                            </h1>
                        </div>

                        {/* Bottom Overlay Card */}
                        <div className="mt-auto mx-3 mb-3 bg-brand-dark rounded-2xl p-3 flex gap-3 shadow-lg relative z-20">

                            {/* Date Widget */}
                            <div className="bg-white rounded-xl w-16 shrink-0 flex flex-col items-center justify-center py-1 shadow-sm">
                                <span className="text-brand-dark font-bold text-lg leading-none">08</span>
                                <span className="text-brand-dark font-bold text-[10px] uppercase">Nov</span>
                                <div className="w-8 h-[1px] bg-brand-dark my-0.5"></div>
                                <span className="text-brand-dark font-bold text-lg leading-none">10</span>
                                <span className="text-brand-dark font-bold text-[10px] uppercase">Nov</span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-between min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-white font-bold text-base leading-tight truncate pr-1">Oktober MUT</h3>
                                    <span className="text-[10px] text-brand-gray/80 underline decoration-brand-coral decoration-2 underline-offset-2 shrink-0">Evento</span>
                                </div>

                                <p className="text-brand-gray text-[9px] leading-tight mt-1 line-clamp-2">
                                    Siente el espíritu del Oktoberfest: cerveza, comida y diversión.
                                </p>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="mt-2 w-full bg-[#9EE4D6] text-brand-dark text-[10px] font-bold py-1.5 rounded-lg hover:bg-white transition-colors"
                                >
                                    Conocer más
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center text-white shadow-md shrink-0">
                        <CaretRight size={24} weight="bold" />
                    </button>
                </div>

                {/* Pagination Dots - Outside the card */}
                <div className="flex justify-center gap-2 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-gray"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-gray"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-gray"></div>
                    <div className="w-3 h-3 rounded-full bg-brand-gray"></div>
                </div>
            </div>
        </>
    );
}
