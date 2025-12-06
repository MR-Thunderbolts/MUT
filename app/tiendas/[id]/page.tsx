"use client";

import { use, useState, useEffect } from "react";
import { ArrowLeft, Clock, MapPin, Tag, CheckCircle, XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { STORES } from "@/lib/data";
import { notFound } from "next/navigation";

export default function StoreDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use()
    const { id } = use(params);
    const [store, setStore] = useState<typeof STORES[0] | null>(null);

    useEffect(() => {
        const foundStore = STORES.find((s) => s.id === id);
        if (foundStore) {
            setStore(foundStore);
        }
    }, [id]);

    if (!store) {
        // Simple loading state while checking data
        return <div className="w-full h-full flex items-center justify-center bg-brand-cream">Cargando...</div>;
    }

    return (
        <div className="flex flex-col h-full w-full bg-brand-cream relative overflow-y-auto no-scrollbar">
            {/* Header Image */}
            <div className="relative w-full h-[35vh] shrink-0">
                <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Back Button */}
                <Link href="/tiendas" className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10">
                    <ArrowLeft size={24} weight="bold" />
                </Link>

                {/* Title & Category */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-brand-coral rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {store.category}
                        </span>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${store.status === "Abierto" ? "bg-green-500/90" : "bg-red-500/90"}`}>
                            {store.status === "Abierto" ? <CheckCircle weight="fill" /> : <XCircle weight="fill" />}
                            {store.status}
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold leading-tight mb-1">{store.name}</h1>
                    <p className="text-white/80 text-sm flex items-center gap-1">
                        <MapPin weight="fill" />
                        {store.level}
                    </p>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 px-6 py-8 flex flex-col gap-8 pb-24">

                {/* Description */}
                <div>
                    <h2 className="text-brand-dark font-bold text-lg mb-3">Sobre la tienda</h2>
                    <p className="text-brand-dark/70 leading-relaxed text-sm">
                        {store.description}
                    </p>
                </div>

                {/* Schedule */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-brand-dark/5">
                    <h3 className="text-brand-dark font-bold text-sm mb-4 flex items-center gap-2">
                        <Clock size={20} className="text-brand-coral" weight="fill" />
                        Horarios de atención
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                            <span className="text-brand-dark/60">Lunes a Viernes</span>
                            <span className="font-semibold text-brand-dark">{store.schedule.week}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-brand-dark/60">Sábados y Domingos</span>
                            <span className="font-semibold text-brand-dark">{store.schedule.weekend}</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <Link
                    href={`/mapa?storeId=${store.id}`}
                    className="w-full bg-brand-coral text-white py-4 rounded-full font-bold text-center shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    <MapPin size={20} weight="fill" className="text-brand-coral" />
                    Cómo llegar
                </Link>

            </div>
        </div>
    );
}
