"use client";

import { MapTrifold, Storefront, Ticket, Bicycle, Info } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SimpleHeader() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

    const navItems = [
        { href: "/", icon: MapTrifold, label: "Mapa" },
        { href: "/tiendas", icon: Storefront, label: "Tiendas" },
        { href: "/ver-y-hacer", icon: Ticket, label: "Ver y Hacer" },
        { href: "/servicios", icon: Bicycle, label: "Servicios" },
        { href: "/informaciones", icon: Info, label: "Informaciones" },
    ];

    return (
        <div className="w-full bg-brand-coral flex flex-col items-center justify-center pt-4 pb-4 shadow-soft pointer-events-auto">
            <span className="text-white font-bold text-lg mb-3">
                {navItems.find(item => isActive(item.href) && (item.href !== "/" || pathname === "/"))?.label || "Ver y Hacer"}
            </span>
            <div className="bg-white rounded-full px-8 py-2 shadow-md flex justify-between items-center text-brand-coral w-[85%] max-w-md">
                {navItems.map((item) => {
                    const active = item.href === "/" ? pathname === "/" : isActive(item.href);
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "p-2 rounded-full transition-all duration-300",
                                active ? "bg-brand-coral text-white scale-110 shadow-md" : "hover:bg-brand-coral/10 text-brand-coral"
                            )}
                        >
                            <Icon size={28} weight={active ? "fill" : "regular"} />
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}
