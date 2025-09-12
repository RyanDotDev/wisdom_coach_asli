import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhatsApp from "@/components/WhatsApp";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wisdom Coach Asli",
  description: "Online Coaching Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
