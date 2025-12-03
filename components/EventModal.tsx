"use client";

import { ArrowLeft, QrCode } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EventModal({ isOpen, onClose }: EventModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            {/* Backdrop - Cream color with 40% opacity and blur */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-brand-cream/40 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-md bg-[#1A535C] rounded-3xl p-6 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto no-scrollbar text-white"
            >
                {/* Header with Back Button */}
                <div className="flex items-start justify-between">
                    <button
                        onClick={onClose}
                        className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-dark shadow-md hover:scale-105 transition-transform"
                    >
                        <ArrowLeft size={24} weight="bold" />
                    </button>
                </div>

                {/* Title Section */}
                <div className="text-center space-y-1">
                    <h3 className="text-xl font-bold">08 - 09 - 10 Nov</h3>
                    <h2 className="text-4xl font-black tracking-tight">Oktober MUT</h2>
                    <p className="text-lg font-medium opacity-90">Piso 2: El Barrio</p>
                </div>

                {/* Description & QR Row */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Description Box */}
                    <div className="bg-white/10 rounded-2xl p-4 flex items-center">
                        <p className="text-sm font-bold leading-snug">
                            Siente el espíritu del Oktoberfest en nuestro mercado: cerveza, comida, y mucha diversión en un solo lugar.
                            <br />
                            ¡No te lo pierdas!
                        </p>
                    </div>

                    {/* QR Box */}
                    <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-between gap-2 text-brand-dark">
                        <span className="text-[10px] font-medium text-center leading-tight">Compra tus tickets aquí</span>
                        <QrCode size={80} weight="fill" />
                    </div>
                </div>

                {/* Bottom Info Row */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Horarios */}
                    <div className="bg-white/10 rounded-2xl p-4 space-y-2">
                        <h4 className="font-bold text-lg">Horarios</h4>
                        <div className="text-xs space-y-1 opacity-90">
                            <p><span className="font-semibold">Viernes 08</span><br />13:00 – 20:00</p>
                            <p><span className="font-semibold">Sábado 09</span><br />12:00 – 20:00</p>
                            <p><span className="font-semibold">Domingo 10</span><br />12:00 – 19:00</p>
                        </div>
                    </div>

                    {/* Cervezas */}
                    <div className="bg-white/10 rounded-2xl p-4 space-y-2">
                        <h4 className="font-bold text-sm leading-tight">36+ Variedades de cervezas artesanales premium</h4>
                        <p className="text-[10px] opacity-80 leading-relaxed">
                            Cervecerías participantes: Granizo, Szot, Hasta Pronto, Jester, Alameda, Loa, Spoh, Muster, Intergalactic, Coda, Sokos, Bodega Ergo
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    );
}
