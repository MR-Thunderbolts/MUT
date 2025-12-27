"use client";

import { ArrowLeft } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface EventData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    dateStart: string;
    dateEnd: string;
    month: string;
    location: string;
    color: string;
    buttonColor: string;
    qrData: string;
    schedule: { day: string; time: string }[];
    details: { title: string; content: string };
}

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
    event: EventData;
}

export default function EventModal({ isOpen, onClose, event }: EventModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            {/* Backdrop - Cream color with 40% opacity and animated blur */}
            <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                onClick={onClose}
                className="absolute inset-0 bg-brand-cream/40"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-sm rounded-3xl p-5 shadow-2xl flex flex-col gap-4 text-white"
                style={{ backgroundColor: event.color }}
            >
                {/* Header with Back Button */}
                <div className="flex items-start justify-between">
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-dark shadow-md hover:scale-105 transition-transform"
                    >
                        <ArrowLeft size={20} weight="bold" />
                    </button>
                </div>

                {/* Title Section */}
                <div className="text-center space-y-0.5 -mt-2">
                    <h3 className="text-lg font-bold">{event.dateStart} - {event.dateEnd} {event.month}</h3>
                    <h2 className="text-3xl font-black tracking-tight leading-none">{event.title}</h2>
                    <p className="text-base font-medium opacity-90">{event.location}</p>
                </div>

                {/* Description & QR Row */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Description Box */}
                    <div className="bg-white/10 rounded-2xl p-3 flex items-center">
                        <p className="text-xs font-bold leading-snug">
                            {event.description}
                        </p>
                    </div>

                    {/* QR Box */}
                    <div className="bg-white rounded-2xl p-2 flex flex-col items-center justify-between gap-1 text-brand-dark overflow-hidden">
                        <span className="text-[9px] font-bold text-center leading-tight">Compra tus tickets aquí</span>
                        {/* Real QR Image */}
                        <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${event.qrData}&color=393939`}
                            alt="QR Code"
                            className="w-full h-auto object-contain mix-blend-multiply max-h-24"
                        />
                    </div>
                </div>

                {/* Bottom Info Row */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Horarios */}
                    <div className="bg-white/10 rounded-2xl p-3 space-y-1">
                        <h4 className="font-bold text-base">Horarios</h4>
                        <div className="text-[10px] space-y-0.5 opacity-90">
                            {event.schedule.map((item, index) => (
                                <p key={index}><span className="font-semibold">{item.day}</span><br />{item.time}</p>
                            ))}
                        </div>
                    </div>

                    {/* Details (Cervezas / Wines / Stories) */}
                    <div className="bg-white/10 rounded-2xl p-3 space-y-1">
                        <h4 className="font-bold text-xs leading-tight">{event.details.title}</h4>
                        <p className="text-[9px] opacity-80 leading-relaxed line-clamp-5">
                            {event.details.content}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    );
}
