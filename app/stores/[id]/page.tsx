"use client";

import { use } from "react";
import { ArrowLeft, Clock, MapPin, Diamond, MapTrifold } from "@phosphor-icons/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STORES } from "@/lib/data";

interface StorePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function StoreDetailPage({ params }: StorePageProps) {
    const { id } = use(params);
    const store = STORES.find((s) => s.id === id);

    if (!store) {
        notFound();
    }

    return (
        <div className="w-full h-full bg-brand-cream relative flex flex-col overflow-y-auto no-scrollbar">
            {/* Hero Image Section */}
            <div className="relative w-full h-[45%] shrink-0">
                <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Back Button */}
                <Link
                    href="/stores"
                    className="absolute top-4 left-4 w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-dark shadow-md hover:scale-105 transition-transform z-20"
                >
                    <ArrowLeft size={20} weight="bold" />
                </Link>
            </div>

            {/* Content Container - Overlapping the image */}
            <div className="relative -mt-12 px-4 pb-24 flex flex-col gap-4 z-10">

                {/* Logo/Title Card */}
                <div className="bg-brand-cream rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center text-center gap-2 relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-dark flex items-center justify-center mb-1">
                        <span className="font-serif text-3xl font-bold text-brand-dark">{store.name.charAt(0)}</span>
                    </div>
                    <h1 className="text-2xl font-black text-brand-dark uppercase tracking-tight leading-none">{store.name}</h1>
                    <p className="text-xs font-medium text-brand-gray uppercase tracking-widest">{store.category}</p>
                </div>

                {/* Status Pill */}
                <div className="self-center">
                    <div className="bg-white border border-brand-dark/10 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm">
                        <div className={`w-2 h-2 rounded-full ${store.status === "Abierto" ? "bg-green-500" : "bg-red-500"}`} />
                        <span className={`text-xs font-bold uppercase ${store.status === "Abierto" ? "text-green-600" : "text-red-600"}`}>{store.status}</span>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="flex flex-col gap-2 mt-2">
                    {/* Schedule */}
                    <div className="flex items-center justify-center gap-2 text-brand-dark/80">
                        <Clock size={16} weight="fill" />
                        <p className="text-[10px] font-medium">
                            <span className="font-bold">L-S:</span> {store.schedule.week} &nbsp; <span className="font-bold">D&F:</span> {store.schedule.weekend}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-center text-sm text-brand-dark/90 leading-relaxed px-2 py-2">
                        {store.description}
                    </p>
                </div>

                {/* Action Buttons Row */}
                <div className="flex items-center justify-center gap-3 mt-2">
                    <div className="bg-brand-dark text-white px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-md">
                        <Diamond size={16} weight="fill" />
                        <span>{store.category}</span>
                    </div>
                    <div className="bg-brand-dark text-white px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-md">
                        <MapPin size={16} weight="fill" />
                        <span>{store.level}</span>
                    </div>
                    <Link
                        href={`/map?storeId=${store.id}`}
                        className="bg-brand-coral text-white px-5 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-md hover:bg-brand-coral/90 transition-colors"
                    >
                        <MapTrifold size={16} weight="fill" />
                        <span>Cómo llegar</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
