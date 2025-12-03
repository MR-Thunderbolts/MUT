import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 pt-4 pb-4 h-full">
      <div className="text-center mb-4 shrink-0">
        <h1 className="text-3xl font-bold text-brand-dark mb-1">
          No te pierdas de nada!
        </h1>
        <p className="text-brand-dark/80 text-sm px-4">
          ¡Participa en nuestros eventos y talleres y vive la experiencia del mercado urbano!
        </p>
      </div>

      <div className="flex-1 min-h-0 w-full flex items-center justify-center">
        <EventCard />
      </div>
    </div>
  );
}
