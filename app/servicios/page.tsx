"use client";

import { useState } from "react";
import { Bicycle, Car, ArrowLeft, X } from "@phosphor-icons/react";
import FooterPattern from "../../components/layout/FooterPattern";
import PageHeader from "../../components/layout/PageHeader";

export default function ServicesPage() {
  const [activeModal, setActiveModal] = useState<"bicihub" | "parking" | null>(null);

  return (
    <div className="flex flex-col h-full w-full bg-brand-cream relative">
      {/* Decorative Background Elements (Footer Pattern) */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <FooterPattern />
      </div>

      <div className="flex-1 flex flex-col items-center gap-2 px-6 z-10 w-full pt-4 pb-32">
        <PageHeader
          title="¡Muévete con libertad!"
          subtitle="Descubre los servicios disponibles en MUT"
        />
        <div className="flex items-center justify-center gap-6 w-full">
          {/* Bicihub Card */}
          <button onClick={() => setActiveModal("bicihub")} className="flex-1 aspect-[3/5] max-w-[160px]">
            <div className="w-full h-full bg-brand-coral rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 text-white hover:scale-105 transition-transform">
              <span className="text-lg font-medium">Bicihub</span>
              <Bicycle size={64} weight="regular" />
            </div>
          </button>

          {/* Parking Card */}
          <button onClick={() => setActiveModal("parking")} className="flex-1 aspect-[3/5] max-w-[160px]">
            <div className="w-full h-full bg-brand-coral rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 text-white hover:scale-105 transition-transform">
              <span className="text-lg font-medium">Parking</span>
              <Car size={64} weight="regular" />
            </div>
          </button>
        </div>
      </div>

      {/* Bicihub Modal */}
      {activeModal === "bicihub" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-brand-cream w-full max-w-[300px] rounded-3xl shadow-2xl overflow-hidden relative flex flex-col animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 max-h-[85vh] overflow-y-auto mt-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-2 w-14 h-14 flex items-center justify-center bg-black/5 hover:bg-black/10 rounded-full transition-colors z-50"
            >
              <X size={24} className="text-brand-dark" />
            </button>

            {/* Header Section */}
            <div className="bg-brand-coral text-white p-5 pb-6 rounded-b-[2rem] relative overflow-hidden shadow-sm">
              <div className="relative z-10 flex flex-col items-center text-center gap-2">
                <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm shadow-inner">
                  <Bicycle size={32} weight="fill" />
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight">Bicihub</h2>
                  <p className="text-white/90 text-[10px] font-medium mt-0.5">Tu bici, nuestro Bicihub</p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-lg" />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col items-center gap-4">
              <p className="text-center text-brand-dark/80 leading-relaxed text-[11px]">
                Bienvenido al Bicihub de MUT. <br />
                <span className="font-semibold text-brand-coral">¡Movilicémonos en bici y cuidemos el planeta!</span>
              </p>

              {/* QR Code Card */}
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-brand-coral/10 flex flex-col items-center gap-2 w-full max-w-[130px] hover:shadow-md transition-shadow">
                <div className="aspect-square w-full bg-brand-dark rounded-lg flex items-center justify-center relative overflow-hidden group">
                  {/* Abstract QR Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 to-black" />
                  <div className="absolute inset-1.5 border border-white/20 rounded-md" />
                  <div className="grid grid-cols-3 gap-0.5 opacity-30">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-full" />
                    ))}
                  </div>
                  <Bicycle size={24} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[9px] font-bold text-brand-dark/50 uppercase tracking-widest">Escanear QR</span>
              </div>
            </div>

            {/* Footer decoration */}
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-coral/20 via-brand-coral/40 to-brand-coral/20" />
          </div>
        </div>
      )}

      {/* Parking Modal */}
      {activeModal === "parking" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-brand-cream w-full max-w-[300px] rounded-3xl shadow-2xl overflow-hidden relative flex flex-col animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 max-h-[85vh] overflow-y-auto mt-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-2 w-14 h-14 flex items-center justify-center bg-black/5 hover:bg-black/10 rounded-full transition-colors z-50"
            >
              <X size={24} className="text-brand-dark" />
            </button>

            {/* Header Section */}
            <div className="bg-brand-coral text-white p-5 pb-6 rounded-b-[2rem] relative overflow-hidden shadow-sm">
              <div className="relative z-10 flex flex-col items-center text-center gap-2">
                <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm shadow-inner">
                  <Car size={32} weight="fill" />
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight">Parking</h2>
                  <p className="text-white/90 text-[10px] font-medium mt-0.5">Ven y disfruta el MUT</p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-lg" />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col items-center gap-4">
              <p className="text-center text-brand-dark/80 leading-relaxed text-[11px]">
                Conoce los servicios de tu MUT o estacionamiento. <br />
                <span className="font-semibold text-brand-coral">¡Te esperamos!</span>
              </p>

              {/* QR Code Card */}
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-brand-coral/10 flex flex-col items-center gap-2 w-full max-w-[130px] hover:shadow-md transition-shadow">
                <div className="aspect-square w-full bg-brand-dark rounded-lg flex items-center justify-center relative overflow-hidden group">
                  {/* Abstract QR Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 to-black" />
                  <div className="absolute inset-1.5 border border-white/20 rounded-md" />
                  <div className="grid grid-cols-3 gap-0.5 opacity-30">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-full" />
                    ))}
                  </div>
                  <Car size={24} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[9px] font-bold text-brand-dark/50 uppercase tracking-widest">Escanear QR</span>
              </div>
            </div>

            {/* Footer decoration */}
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-coral/20 via-brand-coral/40 to-brand-coral/20" />
          </div>
        </div>
      )}
    </div>
  );
}
