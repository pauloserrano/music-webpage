import type { Metadata } from "next";
import { Alex_Brush, Montserrat } from "next/font/google";
import { Header, Footer } from "@/components";
import { NavContextProvider } from "@/context/NavContext";
import "./globals.css";

const alexBrush = Alex_Brush({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alexBrush"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexBrush.variable} ${montserrat.variable} overflow-x-hidden relative`}>
        <NavContextProvider>
            <Header />
            {children}
            <Footer />
        </NavContextProvider>
      </body>
    </html>
  );
}
