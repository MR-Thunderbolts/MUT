import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SimpleHeader from "@/components/layout/SimpleHeader";
import IntroManager from "@/components/features/intro/IntroManager";
import MainLayoutZone from "@/components/layout/MainLayoutZone";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MUPI Prototype",
  description: "Digital Signage PWA",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Often needed for kiosks to prevent accidental zooming
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased h-[100dvh] w-screen overflow-hidden flex flex-col bg-brand-cream">
        <IntroManager />
        <main className="flex-1 relative overflow-hidden text-brand-dark flex flex-col">
          {/* Top Zone - Auto height based on content */}
          <div className="w-full flex items-start justify-center relative z-50 pointer-events-auto shrink-0">
            <SimpleHeader />
          </div>

          {/* Middle Zone - Fills remaining space */}
          {/* Middle Zone - Fills remaining space */}
          <MainLayoutZone>
            {children}
          </MainLayoutZone>

          {/* Bottom Zone Removed as per user request */}
        </main>
      </body>
    </html>
  );
}
