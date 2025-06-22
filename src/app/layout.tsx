import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from '@/components/sections/Navbar';
import SmoothScrolling from "@/components/Smooth-scrolling";
import Footer from "@/components/sections/footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto'
});


export const metadata: Metadata = {
  title: "Shield Metal Industries",
  description: "Shield Metal Industries - Metal Roofing, Gutters, and More",
  openGraph: {
    title: "Shield Metal Industries",
    description: "Shield Metal Industries - Metal Roofing, Gutters, and More",
    url: "https://shieldmetalindustries.com",
    siteName: "Shield Metal Industries",
    images: [
      { url: "/logo.jpg" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <Navbar />
            {children}
            <Footer />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
