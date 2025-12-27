"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MainLayoutZone({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const scrollRef = useRef<HTMLDivElement>(null);
    const isMapPage = pathname === "/";

    // Reset scroll on navigation
    useEffect(() => {
        if (scrollRef.current && !isMapPage) {
            scrollRef.current.scrollTop = 0;
        }
    }, [pathname, isMapPage]);

    return (
        <div
            ref={scrollRef}
            className={cn(
                "w-full flex-1 relative z-10 pointer-events-auto min-h-0",
                isMapPage ? "overflow-hidden" : "overflow-y-auto no-scrollbar",
                // Extra padding/spacing if needed globally can go here
            )}
        >
            {children}
        </div>
    );
}
