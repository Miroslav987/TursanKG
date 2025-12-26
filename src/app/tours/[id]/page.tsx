import { tours } from "@entities/tour/config/tours";
import { TourType } from "@entities/tour/model/types";
import TourDetails from "view/tour-details/TourDetails";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
    const resolvedParams = await Promise.resolve(params); 
  const id = resolvedParams.id;
  const tour: TourType | undefined = tours.find(t => t.id === id);

  if (!tour) return <div>Тур не найден</div>;

  return <TourDetails tour={tour} />;
}
