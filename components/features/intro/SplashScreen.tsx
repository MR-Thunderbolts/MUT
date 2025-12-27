"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface SplashScreenProps {
    onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Show splash for 2 seconds, then fade out
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onFinish, 500); // Wait for fade out transition
        }, 2000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-brand-cream transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* Placeholder for Logo - using text for now if asset missing */}
            <div className="text-brand-coral font-black text-4xl tracking-widest animate-pulse">
                MUT
            </div>
        </div>
    );
}
