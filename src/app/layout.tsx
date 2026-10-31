import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { appFacts } from "@/lib/content";
import { siteSchema } from "@/lib/schema";
import { appStoreId } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const homeTitle = `${site.name} · Archery coach app for iPhone`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: homeTitle, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [...appFacts.keywords],
  category: "sports",
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/index.md" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: homeTitle,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: homeTitle, description: site.description },
  formatDetection: { telephone: false, email: false, address: false },
  // Smart App Banner in Safari on iPhone, once the App Store URL is set.
  ...(appStoreId && { itunes: { appId: appStoreId } }),
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export const viewport: Viewport = {
  themeColor: "#040d19",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <JsonLd data={siteSchema} />
      </body>
    </html>
  );
}
