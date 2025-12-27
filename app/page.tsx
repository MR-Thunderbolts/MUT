"use client";

import { useState, useRef, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MapLevelSelector from "@/components/features/map/MapLevelSelector";
import MapLegendModal from "@/components/features/map/MapLegendModal";
import MapSVG from "@/components/features/map/MapSVG";
import LocationPill from "@/components/features/map/LocationPill";
import { STORES } from "@/lib/data";

function MapContent() {
  const searchParams = useSearchParams();
  const storeId = searchParams.get("storeId");

  const [currentLevel, setCurrentLevel] = useState(-2);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

  // Zoom State - Start at 300% (200% zoomed in)
  const [scale, setScale] = useState(3.0);
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;

  // Track if we've done the initial centering
  const hasInitialCentered = useRef(false);

  // Center the map on initial load only
  useEffect(() => {
    if (scrollContainerRef.current && !hasInitialCentered.current) {
      const container = scrollContainerRef.current;
      // Calculate center position
      const centerX = (container.scrollWidth - container.clientWidth) / 2;
      const centerY = (container.scrollHeight - container.clientHeight) / 2;
      // Scroll to center
      container.scrollLeft = centerX;
      container.scrollTop = centerY;
      hasInitialCentered.current = true;
    }
  }, []); // Only run once on mount

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
    // Prevent default browser zoom/scroll behavior
    e.preventDefault();

    const delta = -e.deltaY * 0.001;
    setScale(prev => Math.min(Math.max(prev + delta, MIN_SCALE), MAX_SCALE));
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
      // Prevent default to avoid browser zoom/scroll during pinch
      e.preventDefault();
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

  // Re-center function - resets zoom and scroll position
  const handleRecenter = useCallback(() => {
    // Reset scale to initial 300%
    setScale(3.0);

    // Re-center the scroll position
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Use setTimeout to ensure scale change is applied first
      setTimeout(() => {
        const centerX = (container.scrollWidth - container.clientWidth) / 2;
        const centerY = (container.scrollHeight - container.clientHeight) / 2;
        container.scrollLeft = centerX;
        container.scrollTop = centerY;
      }, 50);
    }
  }, []);


  return (
    <div className="flex flex-col h-full w-full bg-brand-cream relative overflow-hidden">
      {/* Map Container */}
      <div className="flex-1 relative w-full h-full overflow-hidden">

        {/* Scrollable/Draggable Map Area */}
        <div
          ref={scrollContainerRef}
          className={`absolute inset-0 w-full h-full overflow-auto no-scrollbar touch-pan-x touch-pan-y ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <MapLevelSelector
              currentLevel={currentLevel}
              onLevelChange={setCurrentLevel}
            />
          </div>
        </div>

        {/* Current Level Indicator (Floating) */}
        <LocationPill label={`PISO ${currentLevel}`} />

        {/* Re-center Button - Bottom Left (Above Legend) */}
        <div className="fixed left-4 bottom-28 z-10 pointer-events-auto">
          <button
            onClick={handleRecenter}
            className="bg-white/90 backdrop-blur-sm border border-brand-dark/5 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Re-center map"
            title="Re-center map"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-brand-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </button>
        </div>


      </div>

      {/* Legend Modal */}
      <MapLegendModal />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="flex items-center justify-center h-full w-full bg-brand-cream">Cargando mapa...</div>}>
        <MapContent />
      </Suspense>
    </>
  );
}
