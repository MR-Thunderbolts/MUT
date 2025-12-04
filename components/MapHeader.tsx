"use client";

import { MapTrifold, Storefront, Wallet, Bicycle, Info } from "@phosphor-icons/react";
import Link from "next/link";

export default function MapHeader() {
    return (
        <div className="w-full bg-brand-coral pt-12 pb-4 px-4 flex flex-col gap-4 shadow-md z-40 relative rounded-b-3xl">
            <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Explora</span>
                    <h1 className="text-white text-2xl font-black leading-none">Mapa</h1>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/stores" className="text-white/80 hover:text-white transition-colors">
                        <Storefront size={24} weight="regular" />
                    </Link>
                    <button className="text-white/80 hover:text-white transition-colors">
                        <Wallet size={24} weight="regular" />
                    </button>
                    <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                        <Bicycle size={24} weight="regular" />
                    </Link>
                    <Link href="/info" className="text-white/80 hover:text-white transition-colors">
                        <Info size={24} weight="regular" />
                    </Link>
                </div>
            </div>

            {/* Active Mode Indicator */}
            <div className="absolute -bottom-6 left-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-brand-cream">
                    <MapTrifold size={24} weight="fill" className="text-brand-coral" />
                </div>
            </div>
        </div>
    );
}
