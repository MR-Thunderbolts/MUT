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

                {/* Card Row with Arrows - Fills available vertical space */}
                <div className="flex flex-1 items-center justify-center w-full gap-4 min-h-0">
                    {/* Left Arrow */}
                    <Button
                        onClick={prevEvent}
                        size="icon"
                        className="bg-brand-dark text-white rounded-2xl hover:bg-brand-dark/90 hover:scale-105 transition-transform shadow-md shrink-0"
                    >
                        <CaretLeft size={24} weight="bold" />
                    </Button>

                    {/* Main Card Container */}
                    <Card
                        className="relative h-full max-h-full w-auto min-w-[320px] max-w-full aspect-[2/3] overflow-hidden shadow-soft flex flex-col shrink-0 transition-colors duration-500 border-none justify-end"
                        style={{ backgroundColor: currentEvent.color }}
                    >

                        {/* Background Graphics / Image Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-90">
                            <h1 className="text-5xl font-black text-white/20 text-center leading-none tracking-tighter uppercase break-words px-4">
                                {currentEvent.title}
                            </h1>
                        </div>

                        {/* Bottom Overlay Card */}
                        <div className="mt-auto mx-3 mb-3 bg-brand-dark rounded-2xl p-3 flex gap-3 shadow-lg relative z-20">

                            {/* Date Widget */}
                            <div className="bg-white rounded-xl w-16 shrink-0 flex flex-col items-center justify-center py-1 shadow-sm">
                                <span className="text-brand-dark font-bold text-lg leading-none">{currentEvent.dateStart}</span>
                                <span className="text-brand-dark font-bold text-[10px] uppercase">{currentEvent.month}</span>
                                <div className="w-8 h-[1px] bg-brand-dark my-0.5"></div>
                                <span className="text-brand-dark font-bold text-lg leading-none">{currentEvent.dateEnd}</span>
                                <span className="text-brand-dark font-bold text-[10px] uppercase">{currentEvent.month}</span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-between min-w-0">
                                <div className="flex justify-between items-start gap-2">
                                    <h3 className="text-white font-bold text-base leading-tight break-words">{currentEvent.title}</h3>
                                    <span className="text-[10px] text-brand-gray/80 underline decoration-2 underline-offset-2 shrink-0 pt-0.5">{currentEvent.subtitle}</span>
                                </div>

                                <p className="text-brand-gray text-[9px] leading-tight mt-1 line-clamp-2">
                                    {currentEvent.description}
                                </p>

                                <Button
                                    onClick={() => setIsModalOpen(true)}
                                    size="sm"
                                    className="mt-2 w-full text-brand-dark text-[10px] font-bold rounded-full hover:bg-white transition-colors h-8"
                                    style={{ backgroundColor: currentEvent.buttonColor }}
                                >
                                    Conocer más
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Right Arrow */}
                    <Button
                        onClick={nextEvent}
                        size="icon"
                        className="bg-brand-dark text-white rounded-2xl hover:bg-brand-dark/90 hover:scale-105 transition-transform shadow-md shrink-0"
                    >
                        <CaretRight size={24} weight="bold" />
                    </Button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 shrink-0">
                    {EVENTS.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-brand-dark scale-110" : "bg-brand-gray"}`}
                        ></div>
                    ))}
                </div>
            </div >
        </>
    );
}
