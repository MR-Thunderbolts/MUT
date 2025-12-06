"use client";

interface MapLevelSelectorProps {
    currentLevel: number;
    onLevelChange: (level: number) => void;
}

const LEVELS = [4, 3, 2, 1, -1, -2, -3];
const DISABLED_LEVELS = [4]; // Levels that are shown but not selectable

export default function MapLevelSelector({ currentLevel, onLevelChange }: MapLevelSelectorProps) {
    return (
        <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-full py-2 px-1.5 shadow-lg border border-brand-dark/5">
            {LEVELS.map((level) => {
                const isDisabled = DISABLED_LEVELS.includes(level);
                return (
                    <button
                        key={level}
                        onClick={() => !isDisabled && onLevelChange(level)}
                        disabled={isDisabled}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all mb-1 last:mb-0 ${isDisabled
                                ? "text-brand-dark/10 bg-gray-100/50 cursor-not-allowed"
                                : currentLevel === level
                                    ? "bg-brand-coral text-white shadow-md scale-110"
                                    : "text-brand-dark hover:bg-brand-dark/5"
                            }`}
                    >
                        {level}
                    </button>
                );
            })}
        </div>
    );
}
