import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "blog",
  description: "Insights, tips, and updates from Virtual Employee to help businesses grow with remote teams and virtual solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
       
        {children}
        </Providers>
      </body>
    </html>
  );
}
