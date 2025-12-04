"use client";

import { useState } from "react";
import { CaretUp, ForkKnife, Baby, House, Palette, TShirt, Laptop, Plant, Bicycle, Info, Ticket, Toilet } from "@phosphor-icons/react";

export default function MapLegendModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-y-0" : "translate-y-[calc(100%-60px)]"
                }`}
            style={{ maxHeight: "80vh" }}
        >
            {/* Handle / Header */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="h-[60px] flex flex-col items-center justify-center cursor-pointer bg-brand-coral rounded-t-3xl"
            >
                <div className="w-12 h-1.5 bg-white/50 rounded-full mb-2" />
                <span className="text-white font-bold text-sm">Leyenda</span>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-60px)] bg-brand-cream">
                <div className="grid grid-cols-2 gap-4">
                    <LegendItem icon={ForkKnife} label="Alimentos" color="text-brand-dark" />
                    <LegendItem icon={Baby} label="Niños" color="text-brand-dark" />
                    <LegendItem icon={House} label="Hogar" color="text-brand-dark" />
                    <LegendItem icon={Palette} label="Arte" color="text-brand-dark" />
                    <LegendItem icon={TShirt} label="Moda" color="text-brand-dark" />
                    <LegendItem icon={Laptop} label="Tecnología" color="text-brand-dark" />
                    <LegendItem icon={Toilet} label="Baños" color="text-brand-dark" />
                    <LegendItem icon={Info} label="Informaciones" color="text-brand-dark" />
                </div>
            </div>
        </div>
    );
}

function LegendItem({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
    return (
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
            <div className={`w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center ${color}`}>
                <Icon size={18} weight="fill" />
            </div>
            <span className="text-xs font-bold text-brand-dark">{label}</span>
        </div>
    );
}
