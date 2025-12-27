"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "./SplashScreen";
import WelcomeScreen from "./WelcomeScreen";

export default function IntroManager() {
    // Check session storage to only show intro once per session (optional, but good UX)
    // For this request, we'll force it every time or strictly as requested "before loading into the app".
    // Let's keep it simple: Show every time app loads (refresh).

    const [step, setStep] = useState<"splash" | "welcome" | "finished">("splash");

    const handleSplashFinish = () => {
        setStep("welcome");
    };

    const router = useRouter();

    const handleWelcomeFinish = () => {
        setStep("finished");
        router.push("/");
    };

    // Cleanup on unmount or if logic changes? 
    // Actually, if we re-enter splash state (e.g. screensaver), we should remove class?
    useEffect(() => {
        if (step === "finished") {
            document.body.classList.add("intro-finished");
        } else {
            document.body.classList.remove("intro-finished");
        }
    }, [step]);

    if (step === "finished") return null;

    return (
        <div className="fixed inset-0 z-[100] pointer-events-auto">
            {step === "splash" && <SplashScreen onFinish={handleSplashFinish} />}
            {step === "welcome" && <WelcomeScreen onStart={handleWelcomeFinish} />}
        </div>
    );
}
