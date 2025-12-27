import EventCard from "../../components/features/events/EventCard";
import PageHeader from "../../components/layout/PageHeader";

export default function VerYHacerPage() {
    return (
        <div className="flex flex-col items-center px-6 pt-4 pb-4 h-full overflow-hidden">
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
