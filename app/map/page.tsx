"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import MapLevelSelector from "../../components/MapLevelSelector";
import MapLegendModal from "../../components/MapLegendModal";
import MapSVG from "../../components/MapSVG";
import { STORES } from "@/lib/data";

export default function MapPage() {
    const searchParams = useSearchParams();
    const storeId = searchParams.get("storeId");

    const [currentLevel, setCurrentLevel] = useState(-2);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    // Handle store selection from URL
    useEffect(() => {
        if (storeId) {
            const store = STORES.find(s => s.id === storeId);
            if (store && store.mapCoordinates) {
                setCurrentLevel(store.mapCoordinates.level);
            }
        }
    }, [storeId]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setStartY(e.pageY - scrollContainerRef.current.offsetTop);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        setScrollTop(scrollContainerRef.current.scrollTop);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const y = e.pageY - scrollContainerRef.current.offsetTop;
        const walkX = (x - startX) * 1.5; // Scroll-fast
        const walkY = (y - startY) * 1.5;
        scrollContainerRef.current.scrollLeft = scrollLeft - walkX;
        scrollContainerRef.current.scrollTop = scrollTop - walkY;
    };

    return (
        <div className="flex flex-col h-full w-full bg-brand-cream relative overflow-hidden">
            {/* Map Container */}
            <div className="flex-1 relative w-full h-full overflow-hidden">

                {/* Scrollable/Draggable Map Area */}
                <div
                    ref={scrollContainerRef}
                    className={`absolute inset-0 w-full h-full overflow-auto no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="min-w-[150%] min-h-[120%] w-full h-full p-4">
                        <MapSVG
                            level={currentLevel}
                            highlightedStoreId={storeId}
                            stores={STORES}
                        />
                    </div>
                </div>

                {/* Level Selector - Right Side (Fixed) */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <div className="pointer-events-auto">
                        <MapLevelSelector
                            currentLevel={currentLevel}
                            onLevelChange={setCurrentLevel}
                        />
                    </div>
                </div>

                {/* Current Level Indicator (Floating) */}
                <div className="absolute top-8 right-16 bg-brand-coral text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-10 pointer-events-none">
                    PISO {currentLevel}
                </div>
            </div>

            {/* Legend Modal */}
            <MapLegendModal />
        </div>
    );
}
