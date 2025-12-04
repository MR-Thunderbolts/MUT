"use client";

import { MapTrifold, Storefront, Wallet, Bicycle, Info } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SimpleHeader() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="w-full h-full bg-brand-coral flex flex-col items-center justify-center pt-4 pb-2 shadow-soft pointer-events-auto">
            <span className="text-white font-bold text-base mb-2">
                {isActive("/info") ? "Info" : isActive("/stores") ? "Tiendas" : "Ver y Hacer"}
            </span>

            <div className="w-full px-6 flex justify-between items-center text-white">
                <Link href="/map" className={`p-2 rounded-full transition-colors ${isActive("/map") ? "bg-white text-brand-coral scale-110 shadow-md" : "hover:bg-white/10"}`}>
                    <MapTrifold size={28} weight={isActive("/map") ? "fill" : "regular"} />
                </Link>
                <Link href="/stores" className={`p-2 rounded-full transition-colors ${isActive("/stores") ? "bg-white text-brand-coral scale-110 shadow-md" : "hover:bg-white/10"}`}>
                    <Storefront size={28} weight={isActive("/stores") ? "fill" : "regular"} />
                </Link>
                <Link href="/" className={`p-2 rounded-full transition-colors ${isActive("/") ? "bg-white text-brand-coral scale-110 shadow-md" : "hover:bg-white/10"}`}>
                    <Wallet size={28} weight={isActive("/") ? "fill" : "regular"} />
                </Link>
                <Link href="/services" className={`p-2 rounded-full transition-colors ${pathname.startsWith('/services') ? 'text-brand-coral bg-white scale-110 shadow-md' : 'text-white hover:bg-white/20'}`}>
                    <Bicycle size={28} weight={pathname.startsWith('/services') ? "fill" : "regular"} />
                </Link>
                <Link href="/info" className={`p-2 rounded-full transition-colors ${isActive("/info") ? "bg-white text-brand-coral scale-110 shadow-md" : "hover:bg-white/10"}`}>
                    <Info size={28} weight={isActive("/info") ? "fill" : "regular"} />
                </Link>
            </div>
        </div>
    );
}
