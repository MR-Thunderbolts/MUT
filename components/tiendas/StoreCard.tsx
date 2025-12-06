"use client";

import Link from "next/link";

interface StoreCardProps {
    id: string;
    name: string;
    image: string;
    status: "Abierto" | "Cerrado";
}

export default function StoreCard({ id, name, image, status }: StoreCardProps) {
    return (
        <Link href={`/tiendas/${id}`} className="block relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform">
            {/* Background Image */}
            <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-col items-start gap-1">
                <h3 className="text-white font-bold text-sm leading-tight">{name}</h3>

                {/* Status Pill */}
                <div className="bg-white rounded-full px-2 py-0.5 flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${status === "Abierto" ? "bg-green-500" : "bg-red-500"}`} />
                    <span className="text-[10px] font-bold text-brand-dark uppercase tracking-wide">{status}</span>
                </div>
            </div>
        </Link>
    );
}
