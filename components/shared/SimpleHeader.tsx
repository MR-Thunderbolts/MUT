"use client";

import { MapTrifold, Storefront, Ticket, Bicycle, Info } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SimpleHeader() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

    return (
        <div className="w-full bg-brand-coral flex flex-col items-center justify-center pt-4 pb-4 shadow-soft pointer-events-auto">
            <span className="text-white font-bold text-lg mb-3">
                {isActive("/informaciones") ? "Informaciones" : isActive("/tiendas") ? "Tiendas" : isActive("/mapa") ? "Mapa" : isActive("/servicios") ? "Servicios" : "Ver y Hacer"}
            </span>
            <div className="bg-white rounded-full px-8 py-2 shadow-md flex justify-between items-center text-brand-coral w-[85%] max-w-md">
                <Link href="/mapa" className={`p-2 rounded-full transition-colors ${isActive("/mapa") ? "bg-brand-coral text-white scale-110 shadow-md" : "hover:bg-brand-coral/10"}`}>
                    <MapTrifold size={28} weight={isActive("/mapa") ? "fill" : "regular"} />
                </Link>
                <Link href="/tiendas" className={`p-2 rounded-full transition-colors ${isActive("/tiendas") ? "bg-brand-coral text-white scale-110 shadow-md" : "hover:bg-brand-coral/10"}`}>
                    <Storefront size={28} weight={isActive("/tiendas") ? "fill" : "regular"} />
                </Link>
                <Link href="/" className={`p-2 rounded-full transition-colors ${pathname === "/" ? "bg-brand-coral text-white scale-110 shadow-md" : "hover:bg-brand-coral/10"}`}>
                    <Ticket size={28} weight={pathname === "/" ? "fill" : "regular"} />
                </Link>
                <Link href="/servicios" className={`p-2 rounded-full transition-colors ${pathname.startsWith('/servicios') ? 'bg-brand-coral text-white scale-110 shadow-md' : 'hover:bg-brand-coral/10'}`}>
                    <Bicycle size={28} weight={pathname.startsWith('/servicios') ? "fill" : "regular"} />
                </Link>
                <Link href="/informaciones" className={`p-2 rounded-full transition-colors ${isActive("/informaciones") ? "bg-brand-coral text-white scale-110 shadow-md" : "hover:bg-brand-coral/10"}`}>
                    <Info size={28} weight={isActive("/informaciones") ? "fill" : "regular"} />
                </Link>
            </div>
        </div>
    );
}
