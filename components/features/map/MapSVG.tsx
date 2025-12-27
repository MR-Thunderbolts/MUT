"use client";

import { StoreData } from "@/lib/data";

interface MapSVGProps {
    level: number;
    highlightedStoreId?: string | null;
    stores?: StoreData[];
}

export default function MapSVG({ level, highlightedStoreId, stores }: MapSVGProps) {
    // Find highlighted store
    const highlightedStore = stores?.find(s => s.id === highlightedStoreId);
    const showPin = highlightedStore && highlightedStore.mapCoordinates?.level === level;

    // Render different content based on level
    const renderLevelContent = () => {
        switch (level) {
            case 3:
                return <Level3Content />;
            case 2:
                return <Level2Content />;
            case 1:
                return <Level1Content />;
            case -1:
                return <LevelMinus1Content />;
            case -2:
                return <LevelMinus2Content />;
            case -3:
                return <LevelMinus3Content />;
            default:
                return null;
        }
    };

    return (
        <svg
            viewBox="0 0 800 1200"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Dynamic Content */}
            {renderLevelContent()}

            {/* Store Pin Highlight */}
            {showPin && highlightedStore.mapCoordinates && (
                <g transform={`translate(${highlightedStore.mapCoordinates.x}, ${highlightedStore.mapCoordinates.y})`}>
                    {/* Pulsing Effect - Static for performance */}
                    <circle r="25" fill="#FF8B7B" fillOpacity="0.2" />

                    {/* Pin Marker */}
                    <path
                        d="M -15 -45 L 0 -5 L 15 -45 A 15 15 0 1 0 -15 -45"
                        fill="#FF8B7B"
                        stroke="white"
                        strokeWidth="2"
                    />
                    <circle cx="0" cy="-45" r="5" fill="white" />

                    {/* Store Name Label */}
                    <rect x="-60" y="-85" width="120" height="24" rx="12" fill="white" fillOpacity="0.9" stroke="#FF8B7B" strokeWidth="1" />
                    <text x="0" y="-70" textAnchor="middle" fill="#2A2A2A" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                        {highlightedStore.name}
                    </text>
                </g>
            )}

            {/* Common Elements (if any) */}
        </svg>
    );
}

// Level 3
function Level3Content() {
    return (
        <image
            href="/SVGs/Floor_3.svg"
            x="0"
            y="0"
            width="800"
            height="1200"
            preserveAspectRatio="xMidYMid meet"
        />
    );
}

// Level 2
function Level2Content() {
    return (
        <image
            href="/SVGs/Floor_2.svg"
            x="0"
            y="0"
            width="800"
            height="1200"
            preserveAspectRatio="xMidYMid meet"
        />
    );
}

// Level 1: Plaza & Street Access
function Level1Content() {
    return (
        <image
            href="/SVGs/Floor_1.svg"
            x="0"
            y="0"
            width="800"
            height="1200"
            preserveAspectRatio="xMidYMid meet"
        />
    );
}

// Level -1
function LevelMinus1Content() {
    return (
        <image
            href="/SVGs/Floor_-1.svg"
            x="0"
            y="0"
            width="800"
            height="1200"
            preserveAspectRatio="xMidYMid meet"
        />
    );
}

// Level -2
function LevelMinus2Content() {
    return (
        <image
            href="/SVGs/Floor_-2.svg"
            x="0"
            y="0"
            width="800"
            height="1200"
            preserveAspectRatio="xMidYMid meet"
        />
    );
}

// Level -3
function LevelMinus3Content() {
    return (
        <image
            href="/SVGs/Floor_-3.svg"
            x="0"
            y="0"
            width="800"
            height="1200"
            preserveAspectRatio="xMidYMid meet"
        />
    );
}
