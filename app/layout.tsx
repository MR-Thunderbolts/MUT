import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SimpleHeader from "../components/shared/SimpleHeader";

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
          {/* Top Zone - Auto height based on content */}
          <div className="w-full flex items-start justify-center relative z-50 pointer-events-auto shrink-0">
            <SimpleHeader />
          </div>

          {/* Middle Zone - Fills remaining space */}
          <div className="w-full flex-1 relative z-10 overflow-y-auto no-scrollbar pointer-events-auto min-h-0">
            {children}
          </div>

          {/* Bottom Zone Removed as per user request */}
        </main>
      </body>
    </html>
  );
}
