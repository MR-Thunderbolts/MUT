"use client";

import { motion } from "framer-motion";

export default function FooterPattern() {
    // Generate enough items to cover wide screens (e.g., 40 items * ~80px = ~3200px)
    const pills = Array(40).fill(null);

    return (
        <div className="w-full h-32 flex flex-col justify-end pb-6 gap-3 opacity-60 pointer-events-none overflow-hidden">
            {/* Row 1 - Right */}
            <motion.div
                className="flex gap-4 min-w-[200%]"
                animate={{ x: [0, -80] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
                {pills.map((_, i) => (
                    <div key={`r1-${i}`} className="w-16 h-3 bg-brand-coral rounded-full flex-shrink-0"></div>
                ))}
            </motion.div>
            {/* Row 2 - Left */}
            <motion.div
                className="flex gap-4 min-w-[200%] -ml-8"
                animate={{ x: [-80, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
                {pills.map((_, i) => (
                    <div key={`r2-${i}`} className="w-16 h-3 bg-brand-coral rounded-full flex-shrink-0"></div>
                ))}
            </motion.div>
            {/* Row 3 - Right */}
            <motion.div
                className="flex gap-4 min-w-[200%]"
                animate={{ x: [0, -80] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
                {pills.map((_, i) => (
                    <div key={`r3-${i}`} className="w-16 h-3 bg-brand-coral rounded-full flex-shrink-0"></div>
                ))}
            </motion.div>
            {/* Row 4 - Left */}
            <motion.div
                className="flex gap-4 min-w-[200%] -ml-8"
                animate={{ x: [-80, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
                {pills.map((_, i) => (
                    <div key={`r4-${i}`} className="w-16 h-3 bg-brand-coral rounded-full flex-shrink-0"></div>
                ))}
            </motion.div>
        </div>
    );
}
