import { JsonLd } from "@/components/SEO/JsonLd";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { FloatingContactButtons } from "@/components/layouts/FloatingContactButtons";
import { BlogListWrapper } from "@/components/blog/BlogListWrapper";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://h2ntaxi.com"),

  // SEO TITLE
  title: {
    default:
      "Taxi Hà Nội giá rẻ | H2N Taxi thuê xe hợp đồng, đặt xe sân bay Nội Bài, đường dài",
    template: "%s | H2N Taxi",
  },

  // SEO DESCRIPTION
  description:
    "H2N Taxi cung cấp dịch vụ taxi Hà Nội giá rẻ, thuê xe hợp đồng, taxi sân bay Nội Bài, taxi đường dài, xe về quê, xe du lịch.",

  // KEYWORDS
  keywords: [
    "taxi Hà Nội",
    "taxi giá rẻ",
    "thuê xe",
    "thuê xe hợp đồng",
    "thuê xe cố định",
    "taxi sân bay",
    "đặt xe sân bay",
    "Nội Bài",
    "xe về quê",
    "taxi đường dài",
  ],

  // ROBOTS
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  // OPEN GRAPH (SEO nâng cao - share đẹp)
  openGraph: {
    title: "Taxi Hà Nội giá rẻ - H2N Taxi",
    description:
      "Taxi Hà Nội, thuê xe hợp đồng giá rẻ, taxi sân bay Nội Bài, taxi đường dài.",
    url: "https://h2ntaxi.com",
    siteName: "H2N Taxi",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <Header />
          <JsonLd />
          {children}

          <BlogListWrapper />

          <Footer />
          <FloatingContactButtons />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
