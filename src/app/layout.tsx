import type { Metadata } from "next";
import { Poppins, Cormorant, Cormorant_Garamond, Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://fazalzari.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Fazal Zari | Heritage Luxury, Handcrafted for Royalty",
    template: "%s | Fazal Zari",
  },
  description:
    "Crafting timeless bridal and luxury formal wear since 1999. Discover traditional hand-embroidery, bespoke silhouettes, and regal Pakistani couture.",
  keywords: [
    "Fazal Zari",
    "Pakistani bridal wear",
    "luxury bridal lehenga",
    "bridal peshwas",
    "zardozi embroidery",
    "handcrafted bridal dress",
    "Faisalabad bridal boutique",
    "designer bridal wear Pakistan",
    "wedding dress Pakistan",
    "couture bridal gown",
  ],
  authors: [{ name: "Fazal Zari" }],
  creator: "Fazal Zari",
  publisher: "Fazal Zari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: BASE_URL,
    siteName: "Fazal Zari",
    title: "Fazal Zari | Heritage Luxury, Handcrafted for Royalty",
    description:
      "Crafting timeless bridal and luxury formal wear since 1999. Discover traditional hand-embroidery, bespoke silhouettes, and regal Pakistani couture.",
    images: [
      {
        url: "/images/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Fazal Zari — Heritage Luxury Bridal Wear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fazal Zari | Heritage Luxury, Handcrafted for Royalty",
    description:
      "Crafting timeless bridal and luxury formal wear since 1999. Heritage hand-embroidery and regal Pakistani couture.",
    images: ["/images/hero-bg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

/** Organization JSON-LD (site-wide) */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fazal Zari",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description:
    "Heritage luxury bridal and formal wear boutique in Faisalabad, Pakistan. Handcrafted couture since 1999.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "BANO Market, Kotwali Road, Near MCB Bank Soap Market Branch, Clock Tower",
    addressLocality: "Faisalabad",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+923009736020",
    contactType: "customer service",
    availableLanguage: ["en", "ur"],
  },
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${cormorant.variable} ${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
