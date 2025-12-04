"use client";

import { MapPin } from "@phosphor-icons/react";
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
            case 1:
                return <Level1Content />;
            case -1:
                return <LevelMinus1Content />;
            case -2:
            default:
                return <LevelMinus2Content />;
        }
    };

    return (
        <svg
            viewBox="0 0 800 1200"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background - Soft Cream Base */}
            <rect width="100%" height="100%" fill="#FDFBF7" />

            {/* Dynamic Content */}
            {renderLevelContent()}

            {/* Store Pin Highlight */}
            {showPin && highlightedStore.mapCoordinates && (
                <g transform={`translate(${highlightedStore.mapCoordinates.x}, ${highlightedStore.mapCoordinates.y})`}>
                    {/* Pulsing Effect */}
                    <circle r="20" fill="#FF8B7B" fillOpacity="0.3">
                        <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>

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

// Level -2: The Market (Original Design)
function LevelMinus2Content() {
    return (
        <>
            {/* Abstract Flow */}
            <path d="M -50 200 Q 200 100 400 300 T 850 400 V 1300 H -50 Z" fill="#F5F2EB" />

            {/* Market Clusters */}
            <g transform="translate(100, 200)">
                <circle cx="50" cy="50" r="40" fill="#FF8B7B" fillOpacity="0.8" />
                <circle cx="120" cy="80" r="25" fill="#2A2A2A" fillOpacity="0.1" />
                <rect x="20" y="120" width="60" height="60" rx="12" fill="#FF8B7B" fillOpacity="0.4" />
            </g>

            <g transform="translate(500, 150)">
                <rect x="0" y="0" width="120" height="80" rx="40" fill="#2A2A2A" fillOpacity="0.05" />
                <circle cx="100" cy="100" r="35" fill="#FF8B7B" fillOpacity="0.6" />
            </g>

            <g transform="translate(200, 500)">
                <rect x="0" y="0" width="400" height="300" rx="150" fill="white" stroke="#FF8B7B" strokeWidth="2" strokeDasharray="10 10" />
                <circle cx="100" cy="150" r="60" fill="#FF8B7B" fillOpacity="0.1" />
                <circle cx="300" cy="150" r="60" fill="#FF8B7B" fillOpacity="0.1" />
                <rect x="150" y="100" width="100" height="100" rx="20" fill="#2A2A2A" fillOpacity="0.8" />
                <text x="200" y="160" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="var(--font-montserrat)">MERCADO</text>
            </g>

            <g transform="translate(100, 900)">
                <rect x="0" y="0" width="100" height="150" rx="50" fill="#FF8B7B" fillOpacity="0.2" />
            </g>

            {/* You Are Here */}
            <g transform="translate(400, 650)">
                <circle r="12" fill="#FF8B7B" stroke="white" strokeWidth="3">
                    <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" values="1;0.8;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="0" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2A2A2A" letterSpacing="1">TÚ</text>
            </g>
        </>
    );
}

// Level -1: Services & Metro Connection
function LevelMinus1Content() {
    return (
        <>
            {/* Metro Connection Theme - Linear Flow */}
            <path d="M 0 400 H 800 V 800 H 0 Z" fill="#F5F2EB" />
            <path d="M 0 500 H 800" stroke="#2A2A2A" strokeWidth="2" strokeDasharray="20 10" strokeOpacity="0.1" />
            <path d="M 0 700 H 800" stroke="#2A2A2A" strokeWidth="2" strokeDasharray="20 10" strokeOpacity="0.1" />

            {/* Metro Station Hub */}
            <g transform="translate(200, 450)">
                <rect x="0" y="0" width="400" height="300" rx="20" fill="white" stroke="#2A2A2A" strokeWidth="2" />
                <path d="M 50 150 H 350" stroke="#FF8B7B" strokeWidth="8" strokeLinecap="round" />
                <circle cx="200" cy="150" r="40" fill="#FF8B7B" />
                <text x="200" y="155" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="var(--font-montserrat)">METRO</text>
            </g>

            {/* Service Blocks */}
            <g transform="translate(100, 200)">
                <rect width="150" height="100" rx="10" fill="#2A2A2A" fillOpacity="0.05" />
                <text x="75" y="55" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontWeight="bold">SERVICIOS</text>
            </g>

            <g transform="translate(550, 200)">
                <rect width="150" height="100" rx="10" fill="#2A2A2A" fillOpacity="0.05" />
                <text x="75" y="55" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontWeight="bold">BANCO</text>
            </g>
        </>
    );
}

// Level 1: Plaza & Street Access
function Level1Content() {
    return (
        <>
            {/* Open Plaza Theme - Circular/Radial */}
            <circle cx="400" cy="600" r="350" fill="#F5F2EB" />

            {/* Green Areas / Garden */}
            <g transform="translate(400, 600)">
                <circle r="200" fill="none" stroke="#FF8B7B" strokeWidth="1" strokeDasharray="4 4" />
                <circle r="150" fill="white" />
                <path d="M -100 0 A 100 100 0 0 1 100 0" fill="#FF8B7B" fillOpacity="0.1" />
                <text x="0" y="-20" textAnchor="middle" fill="#2A2A2A" fontSize="16" fontWeight="bold" fontFamily="var(--font-montserrat)">PLAZA</text>
            </g>

            {/* Street Entrances */}
            <g transform="translate(400, 100)">
                <path d="M -50 0 L 0 50 L 50 0" fill="#2A2A2A" />
                <text x="0" y="80" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontWeight="bold">ACCESO NORTE</text>
            </g>

            <g transform="translate(400, 1100)">
                <path d="M -50 0 L 0 -50 L 50 0" fill="#2A2A2A" />
                <text x="0" y="-70" textAnchor="middle" fill="#2A2A2A" fontSize="12" fontWeight="bold">ACCESO SUR</text>
            </g>

            {/* Retail Blocks */}
            <rect x="100" y="400" width="80" height="120" rx="8" fill="#FF8B7B" fillOpacity="0.2" transform="rotate(-15 140 460)" />
            <rect x="620" y="400" width="80" height="120" rx="8" fill="#FF8B7B" fillOpacity="0.2" transform="rotate(15 660 460)" />
        </>
    );
}
