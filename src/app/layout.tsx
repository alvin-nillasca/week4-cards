import type { Metadata } from "next";
import { Genos, Oswald, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Configure fonts from Google Fonts
const genos = Genos({
  variable: "--font-genos",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Next.js Portfolio",
  description: "Dynamic card rendering with custom typography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${genos.variable} ${oswald.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-grow p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}