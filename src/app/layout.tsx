import type { Metadata } from "next";
import "@shared/styles/globals.scss"
import Header from "@widgets/Header/ui";
import Footer from "@widgets/Footer/ui";
import { ModalProvider } from "@shared/context/Modal";
import Snowfall from "@shared/ui/SnowFall";

export const metadata: Metadata = {
  title: "TusranKG",
  description: "Путешествия и туры по Кыргызстану — лучшие предложения, актуальные цены и удобное бронирование онлайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
