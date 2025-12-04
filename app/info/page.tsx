"use client";

import { Info, MagnifyingGlass } from "@phosphor-icons/react";

export default function InfoPage() {
    return (
        <div className="flex flex-col items-center h-full w-full relative overflow-hidden">
            {/* Main Content Container */}
            <div className="flex-1 w-full flex flex-col items-center justify-center px-6 gap-8 z-10 pb-20">

                {/* Title Pill */}
                <div className="w-full bg-brand-coral rounded-full py-6 px-4 shadow-lg flex items-center justify-center text-center mt-8">
                    <h1 className="text-white text-2xl font-bold leading-tight">
                        ¿En qué te <br /> podemos ayudar?
                    </h1>
                </div>

                {/* Subtitle */}
                <p className="text-brand-dark font-medium text-center text-sm max-w-[80%]">
                    Escanea el código QR y contacta a Servicio al Cliente
                </p>

                {/* QR and Illustration Section */}
                <div className="flex items-center justify-center gap-8 w-full mt-4">
                    {/* QR Code Container */}
                    <div className="bg-black p-4 pb-2 rounded-none shadow-xl flex flex-col items-center gap-2">
                        <div className="bg-white p-1">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://mut.cl/contacto&color=000000"
                                alt="Contact QR"
                                className="w-32 h-32 object-contain"
                            />
                        </div>
                        <div className="w-full flex justify-center pt-1">
                            <div className="rounded-full border-2 border-white p-0.5">
                                <Info size={20} weight="regular" className="text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Illustration Placeholder */}
                    <div className="flex flex-col items-center">
                        <MagnifyingGlass size={120} weight="thin" className="text-brand-dark" />
                    </div>
                </div>

            </div>

            {/* Footer Pattern */}
            <div className="w-full h-32 flex flex-col justify-end pb-6 gap-3 opacity-60">
                <div className="w-full flex justify-center gap-4">
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                </div>
                <div className="w-full flex justify-center gap-4 pl-8">
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                </div>
                <div className="w-full flex justify-center gap-4">
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                </div>
                <div className="w-full flex justify-center gap-4 pl-8">
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-16 h-3 bg-brand-coral rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
