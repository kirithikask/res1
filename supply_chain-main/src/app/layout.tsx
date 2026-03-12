import type { Metadata } from "next";

import { EdgeStoreProvider } from "@/lib/edgeStore";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Header from "./_components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClerkProviderWrapper } from "../components/ClerkProviderWrapper";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Fork to Farm",
  description: "Supply chain powered by smart contract",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <SpeedInsights />
        <div className="flex min-h-screen w-full flex-col">
          <Header />
          <ClerkProviderWrapper>
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
          </ClerkProviderWrapper>
          <Toaster />
        </div>

      </body>
    </html>
  );
}

