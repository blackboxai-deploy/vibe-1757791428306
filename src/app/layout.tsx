import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eternal Moments - Wedding Planning in Moscow",
  description: "Premium wedding planning services in Moscow. Creating unforgettable moments with 8+ years of experience and 100+ successful weddings.",
  keywords: "wedding planning, Moscow weddings, wedding planner, bridal services",
  authors: [{ name: "Eternal Moments" }],
  openGraph: {
    title: "Eternal Moments - Wedding Planning in Moscow",
    description: "Premium wedding planning services in Moscow. Creating unforgettable moments with expert care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}