import React from "react";

interface LocationPillProps {
    label: string;
}

export default function LocationPill({ label }: LocationPillProps) {
    return (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-brand-coral text-white px-4 py-2 rounded-full text-sm font-bold shadow-md z-10 pointer-events-none w-32 flex justify-center">
            {label}
        </div>
    );
}
