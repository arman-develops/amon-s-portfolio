import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-fira-sans"
})

export const metadata: Metadata = {
  title: "Amon's Portfolio",
  description: "A minimal portfolio showcasing my skills and craft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
