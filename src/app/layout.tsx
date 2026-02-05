import type { Metadata } from "next";
import "@shared/styles/globals.scss"
import Header from "@widgets/Header/ui";
import Footer from "@widgets/Footer/ui";
import { ModalProvider } from "@shared/context/Modal";
import Snowfall from "@shared/ui/SnowFall";

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: {
    default: `Туры по Кыргызстану ${year} — Авторские путешествия, джип-туры и Иссык-Куль | TursanKG`,
    
    template: "%s | TursanKG",
  },

  description: `TursanKG — авторские туры по Кыргызстану: Иссык-Куль, горы Тянь-Шаня, конные прогулки, джип-туры и индивидуальные маршруты. Актуальные цены ${year}, онлайн-бронирование и профессиональные гиды.`,


  keywords: [
    "туры по Кыргызстану",
    "туры в Киргизию",
    "авторские туры Кыргызстан",
    "джип туры Кыргызстан",
    "отдых Иссык-Куль",
    "экскурсии Бишкек",
    "активный отдых Кыргызстан",
    "индивидуальные туры Кыргызстан",
    "путешествия по Кыргызстану",
    "горные туры Кыргызстан",
    "гид по Кыргызстану",
    "бронирование туров онлайн",
    "TursanKG",
  ],

    verification: {
    google: "GnqoICP3DkOE1RmjobY-MzfflXj8uaQpqtWMBlZ4r9Q",
  },


  openGraph: {
    title: `Туры по Кыргызстану ${year} — Авторские маршруты и джип-туры | TursanKG`,
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
