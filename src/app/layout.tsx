import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Napoli in Paris - Discover our delicious pizzas",
  description: "Napoli in Paris offering authentic pizzas prepared with passion and fresh ingredients. Delivery and takeaway available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
