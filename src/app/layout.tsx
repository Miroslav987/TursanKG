import type { Metadata } from "next";
import "@shared/styles/globals.scss"
import Header from "@widgets/Header/ui";
import Footer from "@widgets/Footer/ui";
import { ModalProvider } from "@shared/context/Modal";
import Snowfall from "@shared/ui/SnowFall";

export const metadata: Metadata = {
  title: {
    default: "TursanKG — Туры и Путешествия по Кыргызстану | Забронировать отдых",
    template: "%s | TursanKG",
  },

  description: "Откройте Кыргызстан с TursanKG: авторские туры, поездки на Иссык-Куль, конные прогулки и джип-туры. Актуальные цены 2024-2025, отзывы и удобное онлайн-бронирование.",



  keywords: [
    "туры в Кыргызстан", 
    "отдых на Иссык-Куле", 
    "экскурсии Бишкек", 
    "TursanKG", 
    "поездки в горы Киргизия", 
    "активный отдых Кыргызстан",
    "гид по Киргизии",
    "бронирование туров онлайн"
  ],

    verification: {
    google: "GnqoICP3DkOE1RmjobY-MzfflXj8uaQpqtWMBlZ4r9Q",
  },


  openGraph: {
    title: "TursanKG — Ваш проводник по самым красивым местам Кыргызстана",
    description: "Лучшие туристические маршруты, профессиональные гиды и незабываемые впечатления. Начните свое приключение здесь!",
    url: "https://tursan.kg", 
    siteName: "TursanKG",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://tursan.kg/main.jpg", 
        width: 1200,
        height: 630,
        alt: "Путешествия по Кыргызстану с TursanKG",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Туры по Кыргызстану | TursanKG",
    description: "Бронируйте авторские туры по Кыргызстану онлайн.",
    images: ["https://tursan.kg/main.jpg"],
  },



  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },


  alternates: {
    canonical: "https://tursan.kg",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body >
        <ModalProvider>
        <Header/>
        <main>
          <Snowfall/>
        {children}
        </main>
        <Footer/>
        </ModalProvider>
      </body>
    </html>
  );
}
