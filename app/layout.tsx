import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Socialicon from "./components/Socialicons";
import NavbarWrapper from "./NavbarWrapper";
import FooterWrapper from "./FooterWrapper";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiếng Trung Khánh An",
  description: "Nơi biến ước mơ tiếng trung thành hiện thực",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="vi">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="">
            <main>
              <NavbarWrapper/>
              {children}
            </main>
            <FooterWrapper/>
          </div>
        <div className="fixed top-1/2 right-4 flex flex-col gap-3 z-50">
          <Socialicon href="tel: +84 39 338 4403" type="phone"/>
          <Socialicon href="https://www.facebook.com/messages/t/111525371864793" type="messeger"/>
          <Socialicon href="mailto:joycelovemandarin@gmail.com" type="mail"/>
        </div>
          <GoogleAnalytics gaId="G-35L1QM307T" />
        </body>
    </html>
  );
}
