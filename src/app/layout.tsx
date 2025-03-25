import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from '@/components/sections/Navbar';
import SmoothScrolling from "@/components/Smooth-scrolling";
import Footer from "@/components/sections/footer";


export const metadata: Metadata = {
  title: "Next js app",
  description: "Next js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased">
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
