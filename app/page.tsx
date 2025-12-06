import EventCard from "../components/ver-y-hacer/EventCard";
import PageHeader from "../components/shared/PageHeader";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 pt-4 pb-4 h-full">
      <PageHeader
        title="¡No te pierdas de nada!"
        subtitle="¡Participa en nuestros eventos y talleres y vive la experiencia del mercado urbano!"
      />

      <div className="flex-1 min-h-0 w-full flex items-center justify-center">
        <EventCard />
      </div>
    </div>
  );
}
