import localFont from "next/font/local";
import "./globals.css";
import "./layout.css";
import Sidenav from "@/components/Sidenav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="layout">
          <Sidenav />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
