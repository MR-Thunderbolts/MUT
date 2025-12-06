"use client";

import { useState, useMemo } from "react";
import { MagnifyingGlass, MapPin, ForkKnife, Baby, House, Palette, TShirt, Laptop, Plant, Bicycle } from "@phosphor-icons/react";
import StoreCard from "../../components/tiendas/StoreCard";
import PageHeader from "../../components/shared/PageHeader";
import { STORES } from "@/lib/data";

const CATEGORIES = [
    { name: "Alimentos y bebidas", icon: ForkKnife },
    { name: "Niños y Juguetes", icon: Baby },
    { name: "Hogar y Decoración", icon: House },
    { name: "Arte y Manualidades", icon: Palette },
    { name: "Moda y accesorios", icon: TShirt },
    { name: "Tecnología y Entretenimiento", icon: Laptop },
    { name: "Flores y Jardinería", icon: Plant },
    { name: "Movilidad y Transporte", icon: Bicycle },
];

export default function StoresPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Memoized filter for better performance
    const filteredStores = useMemo(() => {
        return STORES.filter((store) => {
            const matchesCategory = selectedCategory ? store.category === selectedCategory : true;
            const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="flex flex-col w-full bg-brand-cream pt-4 pb-6 min-h-full relative">
            <PageHeader
                title="¡Encuentra lo que buscas!"
                subtitle="Explora nuestras tiendas, restaurantes y más"
            />
            {/* Search Bar Section */}
            <div className="px-4 pt-0 pb-2">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <MagnifyingGlass size={20} className="text-brand-dark/50" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="¿Qué estás buscando hoy?"
                        className="w-full pl-10 pr-32 py-3 rounded-full border-2 border-brand-coral/20 bg-white text-sm text-brand-dark focus:outline-none focus:border-brand-coral placeholder:text-brand-dark/40 shadow-sm"
                    />
                    <div className="absolute inset-y-0 right-2 flex items-center">
                        <div className="bg-brand-coral text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                            <MapPin size={14} weight="fill" />
                            <span className="text-xs font-bold whitespace-nowrap">Piso -2</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Row */}
            <div className="w-full overflow-x-auto no-scrollbar py-4 pl-4">
                <div className="flex min-w-full justify-between gap-4 px-4">
                    {/* Show All Button */}
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`flex flex-col items-center gap-1 w-16 transition-all ${selectedCategory === null ? "scale-110" : "hover:scale-105"
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selectedCategory === null ? "bg-brand-coral text-white" : "border-2 border-brand-dark/20 text-brand-dark"
                            }`}>
                            <span className="text-lg font-bold">∞</span>
                        </div>
                        <span className={`text-[9px] text-center leading-tight font-medium transition-colors ${selectedCategory === null ? "text-brand-coral font-bold" : "text-brand-dark"
                            }`}>
                            Todos
                        </span>
                    </button>

                    {/* Category Buttons */}
                    {CATEGORIES.map((cat, index) => {
                        const isActive = selectedCategory === cat.name;
                        return (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(isActive ? null : cat.name)}
                                className={`flex flex-col items-center gap-1 w-16 transition-all ${isActive ? "scale-110" : "hover:scale-105"
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-brand-coral text-white" : "text-brand-dark"
                                    }`}>
                                    <cat.icon size={24} weight={isActive ? "fill" : "regular"} />
                                </div>
                                <span className={`text-[9px] text-center leading-tight font-medium transition-colors ${isActive ? "text-brand-coral font-bold" : "text-brand-dark"
                                    }`}>
                                    {cat.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Stores Grid */}
            <div className="px-4 pb-24">
                {filteredStores.length > 0 ? (
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredStores.map((store) => (
                            <StoreCard
                                key={store.id}
                                id={store.id}
                                name={store.name}
                                image={store.image}
                                status={store.status}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-2">
                        <p className="text-brand-dark/60 text-sm">
                            {searchQuery ? `No se encontraron tiendas con "${searchQuery}"` : "No hay tiendas en esta categoría"}
                        </p>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="text-brand-coral text-xs font-bold hover:underline"
                            >
                                Limpiar búsqueda
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
