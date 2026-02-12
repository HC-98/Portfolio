import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hikmet Çilan - Full-Stack Developer",
  description: "Full-Stack Developer specializing in .NET & Azure. Building cloud-native applications, automation tools, and meaningful software solutions.",
  keywords: ["Hikmet Çilan", "Software Developer", ".NET", "Azure", "React", "TypeScript", "Full-Stack Developer", "Cloud Developer"],
  authors: [{ name: "Hikmet Çilan" }],
  creator: "Hikmet Çilan",
  metadataBase: new URL("https://hikmet.dev"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hikmet.dev",
    title: "Hikmet Çilan - Full-Stack Developer",
    description: "Full-Stack Developer specializing in .NET & Azure. Building cloud-native applications and meaningful software solutions.",
    siteName: "Hikmet Çilan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hikmet Çilan - Full-Stack Developer",
    description: "Full-Stack Developer specializing in .NET & Azure",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
