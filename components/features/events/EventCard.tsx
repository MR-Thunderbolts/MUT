"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import EventModal, { EventData } from "./EventModal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const EVENTS: EventData[] = [
    {
        id: "oktober-mut",
        title: "Oktober MUT",
        subtitle: "Evento",
        description: "Siente el espíritu del Oktoberfest: cerveza, comida y diversión.",
        dateStart: "08",
        dateEnd: "10",
        month: "Nov",
        location: "Piso 2: El Barrio",
        color: "#2DBC9F", // Green
        buttonColor: "#9EE4D6",
        qrData: "https://mut.cl/oktober",
        schedule: [
            { day: "Viernes 08", time: "13:00 – 20:00" },
            { day: "Sábado 09", time: "12:00 – 20:00" },
            { day: "Domingo 10", time: "12:00 – 19:00" },
        ],
        details: {
            title: "36+ Variedades de cervezas artesanales premium",
            content: "Cervecerías participantes: Granizo, Szot, Hasta Pronto, Jester, Alameda, Loa, Spoh, Muster, Intergalactic, Coda, Sokos, Bodega Ergo"
        }
    },
    {
        id: "bocas-moradas",
        title: "Bocas Moradas",
        subtitle: "Cata de Vinos",
        description: "Descubre los mejores vinos de autor en una experiencia única.",
        dateStart: "15",
        dateEnd: "17",
        month: "Nov",
        location: "Piso 3: Terraza",
        color: "#6A0DAD", // Purple
        buttonColor: "#D8BFD8",
        qrData: "https://mut.cl/bocas-moradas",
        schedule: [
            { day: "Viernes 15", time: "18:00 – 22:00" },
            { day: "Sábado 16", time: "12:00 – 22:00" },
            { day: "Domingo 17", time: "12:00 – 18:00" },
        ],
        details: {
            title: "20+ Viñas de Autor",
            content: "Participan: Viña Casa Donoso, Viña La Recova, Viña Koyle, Viña Aquitania, y muchas más. Incluye copa de regalo."
        }
    },
    {
        id: "santiago-100",
        title: "Santiago en 100 Palabras",
        subtitle: "Cultura",
        description: "Retira tu libro gratuito con los mejores cuentos breves de la ciudad.",
        dateStart: "22",
        dateEnd: "24",
        month: "Nov",
        location: "Plaza Central",
        color: "#FF8C00", // Orange
        buttonColor: "#FFDAB9",
        qrData: "https://mut.cl/santiago-100",
        schedule: [
            { day: "Viernes 22", time: "10:00 – 20:00" },
            { day: "Sábado 23", time: "10:00 – 20:00" },
            { day: "Domingo 24", time: "10:00 – 18:00" },
        ],
        details: {
            title: "Edición Especial 2024",
            content: "Ven por tu ejemplar gratuito de la última edición del concurso de cuentos breves más importante del país. Hasta agotar stock."
        }
    }
];

export default function EventCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentEvent = EVENTS[currentIndex];

    const nextEvent = () => {
        setCurrentIndex((prev) => (prev + 1) % EVENTS.length);
    };

    const prevEvent = () => {
        setCurrentIndex((prev) => (prev - 1 + EVENTS.length) % EVENTS.length);
    };

    return (
        <>
            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                event={currentEvent}
            />

            <div className="w-full h-full flex flex-col items-center justify-center relative p-4 gap-4">

                {/* Card Container with Navigation */}
                <div className="flex-1 w-full flex flex-col items-center justify-center min-h-0 gap-4 relative">

                    {/* Main Card Wrapper - Flex Row for Robust Layout with Constraints */}
                    <div className="flex flex-row items-center justify-center w-full max-w-[420px] h-full max-h-full gap-2 px-1 min-h-0">

                        {/* Left Arrow - Relative in Flex Flow */}
                        <Button
                            onClick={prevEvent}
                            className="shrink-0 z-30 w-10 h-10 rounded-full bg-white shadow-lg border border-brand-gray/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all p-0"
                            aria-label="Previous event"
                        >
                            <CaretLeft size={20} weight="bold" color="#393939" />
                        </Button>

                        {/* Card Container - Constrained to fit both width and height */}
                        <div className="flex-1 min-w-0 h-full max-h-full flex items-center justify-center py-2">
                            <Card
                                className="w-auto h-auto max-w-full max-h-full aspect-[2/3] rounded-3xl overflow-hidden shadow-xl flex flex-col border-none relative z-10"
                                style={{ backgroundColor: currentEvent.color }}
                            >
                                {/* Background Title Watermark - Reverted size */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none overflow-hidden">
                                    <h1 className="text-5xl font-black text-white/20 text-center leading-none tracking-tighter uppercase break-words px-4 select-none w-full">
                                        {currentEvent.title}
                                    </h1>
                                </div>

                                {/* Content Overlay */}
                                <div
                                    className="mt-auto m-2 sm:m-3 rounded-2xl p-2 sm:p-3 flex gap-2 sm:gap-3 shadow-lg relative z-20"
                                    style={{ backgroundColor: currentEvent.buttonColor }}
                                >
                                    {/* Date Box */}
                                    <div className="bg-white rounded-xl w-12 sm:w-14 shrink-0 flex flex-col items-center justify-center py-2 shadow-sm">
                                        <span className="text-brand-dark font-bold text-base sm:text-lg leading-none">{currentEvent.dateStart}</span>
                                        <span className="text-brand-dark font-bold text-[8px] sm:text-[9px] uppercase tracking-wider">{currentEvent.month}</span>
                                        <div className="w-6 h-[1px] bg-brand-dark/20 my-1"></div>
                                        <span className="text-brand-dark font-bold text-base sm:text-lg leading-none">{currentEvent.dateEnd}</span>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 flex flex-col justify-between min-w-0">
                                        <div>
                                            <div className="flex justify-between items-start gap-1">
                                                <h3 className="text-brand-dark font-bold text-xs sm:text-sm leading-tight line-clamp-2">{currentEvent.title}</h3>
                                            </div>
                                            <p className="text-brand-dark/80 text-[9px] sm:text-[10px] mt-1 line-clamp-2 leading-relaxed font-medium">
                                                {currentEvent.description}
                                            </p>
                                        </div>

                                        <Button
                                            onClick={() => setIsModalOpen(true)}
                                            size="sm"
                                            className="mt-2 w-full h-6 sm:h-7 text-[9px] sm:text-[10px] font-bold rounded-full hover:brightness-110 transition-all active:scale-95 border border-brand-dark/5"
                                            style={{ backgroundColor: 'rgba(255,255,255,0.6)', color: '#1A1A1A' }}
                                        >
                                            Ver detalles
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Right Arrow - Relative in Flex Flow */}
                        <Button
                            onClick={nextEvent}
                            className="shrink-0 z-30 w-10 h-10 rounded-full bg-white shadow-lg border border-brand-gray/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all p-0"
                            aria-label="Next event"
                        >
                            <CaretRight size={20} weight="bold" color="#393939" />
                        </Button>
                    </div>

                    {/* Pagination Dots - Ensure it has space */}
                    <div className="flex justify-center gap-2 h-4 items-center shrink-0 mb-2">
                        {EVENTS.map((_, index) => (
                            <div
                                key={index}
                                className={`rounded-full transition-all duration-300 ${index === currentIndex ? "w-2.5 h-2.5 bg-brand-dark" : "w-1.5 h-1.5 bg-brand-dark/30"}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}
