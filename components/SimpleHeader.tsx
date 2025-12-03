"use client";

import { MapTrifold, Storefront, Wallet, Bicycle, Info } from "@phosphor-icons/react";

export default function SimpleHeader() {
    return (
        <div className="w-full h-full bg-brand-coral flex flex-col items-center justify-center pt-4 pb-2 shadow-soft">
            <span className="text-white font-bold text-base mb-2">Ver y Hacer</span>

            <div className="w-full px-6 flex justify-between items-center text-white">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <MapTrifold size={28} weight="regular" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Storefront size={28} weight="regular" />
                </button>
                <button className="p-2 bg-white/20 rounded-full transition-colors">
                    <Wallet size={28} weight="fill" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Bicycle size={28} weight="regular" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Info size={28} weight="regular" />
                </button>
            </div>
        </div>
    );
}
