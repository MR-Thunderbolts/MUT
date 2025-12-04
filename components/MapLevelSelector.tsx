"use client";

interface MapLevelSelectorProps {
    currentLevel: number;
    onLevelChange: (level: number) => void;
}

const LEVELS = [4, 3, 2, 1, -1, -2, -3];

export default function MapLevelSelector({ currentLevel, onLevelChange }: MapLevelSelectorProps) {
    return (
        <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-full py-2 px-1.5 shadow-lg border border-brand-dark/5">
            {LEVELS.map((level) => (
                <button
                    key={level}
                    onClick={() => onLevelChange(level)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all mb-1 last:mb-0 ${currentLevel === level
                            ? "bg-brand-coral text-white shadow-md scale-110"
                            : "text-brand-dark hover:bg-brand-dark/5"
                        }`}
                >
                    {level}
                </button>
            ))}
        </div>
    );
}
