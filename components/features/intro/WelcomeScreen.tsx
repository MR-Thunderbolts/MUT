"use client";

import { Button } from "@/components/ui/Button";

interface WelcomeScreenProps {
    onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
    return (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-brand-coral text-white p-6 gap-8">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-black tracking-tight">¡Bienvenido<br />al MUT!</h1>
                <p className="text-lg font-medium opacity-90 max-w-xs mx-auto">
                    Descubre el primer mercado urbano de Chile.
                </p>
            </div>

            <Button
                size="lg"
                onClick={onStart}
                className="bg-white text-brand-coral hover:bg-white/90 font-bold text-xl px-12 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
                Ver Mapa
            </Button>
        </div>
    );
}
