import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SimpleHeader from "@/components/SimpleHeader";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MUPI Prototype",
  description: "Digital Signage PWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased h-[100dvh] overflow-hidden`}>
        <main className="flex flex-col h-full w-full bg-brand-cream text-brand-dark">
          {/* Top Zone (15%) - Visual/Header only */}
          {/* Reduced from 25% to 15% per user feedback */}
          <div className="h-[15%] w-full flex items-start justify-center relative z-50 pointer-events-auto">
            <SimpleHeader />
          </div>

          {/* Middle Zone: Interactive Safe Zone (Expanded) */}
          {/* Height increased to 85% to fill the remaining space */}
          <div className="w-full h-[85%] relative z-10 overflow-y-auto no-scrollbar pointer-events-auto">
            {children}
          </div>

          {/* Bottom Zone Removed as per user request */}
        </main>
      </body>
    </html>
  );
}
