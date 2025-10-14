import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/animations.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
// import WebVitals from "@/components/analytics/WebVitals";
import ErrorBoundary from "@/components/ErrorBoundary";
import PerformanceOptimizer from "@/components/performance/PerformanceOptimizer";
import ClientOnly from "@/components/ui/ClientOnly";
import { fetchSanityData } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KefaSports - Premier Sports Facility Construction",
  description: "Expert design-build services for basketball courts, pools, playgrounds, soccer fields, and sports arenas.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch site settings from Sanity
  const siteSettings = await fetchSanityData(siteSettingsQuery);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand-white text-brand-secondary`}>
        {/* Google Analytics - Replace with your actual GA4 Measurement ID */}
        <ClientOnly>
          <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        </ClientOnly>
        {/* Web Vitals Performance Monitoring - Temporarily disabled */}
        {/* <WebVitals enabled={true} /> */}
        {/* Performance Optimizations */}
        <ClientOnly>
          <PerformanceOptimizer enabled={true} />
        </ClientOnly>

        <ErrorBoundary>
          <Header siteSettings={siteSettings} />
          <main>{children}</main>
          <Footer siteSettings={siteSettings} />
        </ErrorBoundary>
      </body>
    </html>
  );
}
