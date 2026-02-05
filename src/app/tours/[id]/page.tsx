// import { tours } from "@entities/tour/config/tours";
// import { TourType } from "@entities/tour/model/types";
// import TourDetails from "view/tour-details/TourDetails";

// interface PageProps {
//   params: { id: string };
// }

// export default async function Page({ params }: PageProps) {
//     const resolvedParams = await Promise.resolve(params); 
//   const id = resolvedParams.id;
//   const tour: TourType | undefined = tours.find(t => t.id === id);

//   if (!tour) return <div>Тур не найден</div>;

//   return <TourDetails tour={tour} />;
// }


import { tours, USD_TO_KGS } from "@entities/tour/config/tours";
import TourDetails from "view/tour-details/TourDetails";
import { Metadata } from "next";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const tour = tours.find((t) => t.id === resolvedParams.id);

  if (!tour) return { title: "Тур не найден" };

  const priceInKgs = (tour.price * USD_TO_KGS).toLocaleString("en-US");
  const priceInUsd = tour.price.toLocaleString("en-US");
  
  

  return {
    title: `${tour.title} — $${priceInUsd} | Tursan.kg`,

    description: `Цена: $${priceInUsd} (${priceInKgs} сом). ${tour.title}: авторский джип-тур по Кыргызстану. Включено: 3-разовое питание, гид и трансфер.`,
    openGraph: {
      title: tour.title,
      images: tour.imgTours[0],
    }
  };
}


export default async function Page({ params }: PageProps) {
  const { id } = await params; 
  const tour = tours.find((t) => t.id === id);

  if (!tour) return <div>Тур не найден</div>;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tour.title,
    image: tour.imgTours[0],
    description: "Авторский тур по самым красивым местам Кыргызстана", 
    offers: [
      {
        '@type': 'Offer',
        price: tour.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `https://tursan.kg/tours/${id}`
      },
      {
        '@type': 'Offer',
        price: tour.price * USD_TO_KGS,
        priceCurrency: 'KGS',
        availability: 'https://schema.org/InStock',
        url: `https://tursan.kg/tours/${id}`
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TourDetails tour={tour} />
    </>
  );
}