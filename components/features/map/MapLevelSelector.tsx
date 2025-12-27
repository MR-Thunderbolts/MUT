"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
                    <Button
                        key={level}
                        onClick={() => !isDisabled && onLevelChange(level)}
                        disabled={isDisabled}
                        variant={currentLevel === level ? "solid" : "ghost"}
                        size="icon-sm"
                        className={cn(
                            "rounded-full mb-1 last:mb-0 transition-all",
                            isDisabled && "bg-gray-100/50 text-brand-dark/10 cursor-not-allowed hover:bg-gray-100/50",
                            currentLevel === level && "scale-110 shadow-md",
                            !isDisabled && currentLevel !== level && "text-brand-dark hover:bg-brand-dark/5"
                        )}
                    >
                        {level}
                    </Button>
                );
            })}
        </div>
    );
}
