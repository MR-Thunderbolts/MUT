"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import MapLevelSelector from "../../components/pisos/MapLevelSelector";
import MapLegendModal from "../../components/pisos/MapLegendModal";
import MapSVG from "../../components/pisos/MapSVG";
import LocationPill from "../../components/pisos/LocationPill";
import { STORES } from "@/lib/data";

export default function MapPage() {
    const searchParams = useSearchParams();
    const storeId = searchParams.get("storeId");

    const [currentLevel, setCurrentLevel] = useState(-2);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

    // Zoom State
    const [scale, setScale] = useState(1);
    const MIN_SCALE = 0.5;
    const MAX_SCALE = 3;

    // Handle store selection from URL
    useEffect(() => {
        if (storeId) {
            const store = STORES.find(s => s.id === storeId);
            if (store && store.mapCoordinates) {
                setCurrentLevel(store.mapCoordinates.level);
            }
        }
    }, [storeId]);

    // Mouse Drag Handlers
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        dragStartRef.current = {
            x: e.pageX - scrollContainerRef.current.offsetLeft,
            y: e.pageY - scrollContainerRef.current.offsetTop,
            scrollLeft: scrollContainerRef.current.scrollLeft,
            scrollTop: scrollContainerRef.current.scrollTop
        };
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const y = e.pageY - scrollContainerRef.current.offsetTop;
        const walkX = (x - dragStartRef.current.x) * 1.5;
        const walkY = (y - dragStartRef.current.y) * 1.5;
        scrollContainerRef.current.scrollLeft = dragStartRef.current.scrollLeft - walkX;
        scrollContainerRef.current.scrollTop = dragStartRef.current.scrollTop - walkY;
    }, [isDragging]);

    // Wheel Zoom Handler
    const handleWheel = useCallback((e: React.WheelEvent) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault(); // Prevent browser zoom
            const delta = -e.deltaY * 0.001;
            setScale(prev => Math.min(Math.max(prev + delta, MIN_SCALE), MAX_SCALE));
        } else {
            // Optional: Allow normal wheel zoom without ctrl if preferred, 
            // but standard behavior usually requires ctrl for zoom to distinguish from scroll.
            // For this specific map app, maybe direct zoom is better? 
            // Let's try direct zoom since the map is the main content.
            const delta = -e.deltaY * 0.001;
            setScale(prev => Math.min(Math.max(prev + delta, MIN_SCALE), MAX_SCALE));
        }
    }, []);

    // Touch Pinch Zoom Logic
    const touchStartDist = useRef<number | null>(null);
    const initialScale = useRef(1);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const dist = Math.hypot(touch1.pageX - touch2.pageX, touch1.pageY - touch2.pageY);
            touchStartDist.current = dist;
            initialScale.current = scale;
        }
    }, [scale]);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (e.touches.length === 2 && touchStartDist.current !== null) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const dist = Math.hypot(touch1.pageX - touch2.pageX, touch1.pageY - touch2.pageY);
            const scaleFactor = dist / touchStartDist.current;
            setScale(Math.min(Math.max(initialScale.current * scaleFactor, MIN_SCALE), MAX_SCALE));
        }
    }, []);

    const handleTouchEnd = useCallback(() => {
        touchStartDist.current = null;
    }, []);


    return (
        <div className="flex flex-col h-full w-full bg-brand-cream relative overflow-hidden">
            {/* Map Container */}
            <div className="flex-1 relative w-full h-full overflow-hidden">

                {/* Scrollable/Draggable Map Area */}
                <div
                    ref={scrollContainerRef}
                    className={`absolute inset-0 w-full h-full overflow-auto no-scrollbar touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onWheel={handleWheel}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="w-full h-full p-4 transition-transform duration-75 ease-out origin-top-left"
                        style={{
                            width: `${150 * scale}%`,
                            height: `${120 * scale}%`,
                            // We use width/height instead of transform scale to ensure scrollbars work correctly with the zoomed content
                        }}
                    >
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
                <LocationPill label={`PISO ${currentLevel}`} />


            </div>

            {/* Legend Modal */}
            <MapLegendModal />
        </div>
    );
}
