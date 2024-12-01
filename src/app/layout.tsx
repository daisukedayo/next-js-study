import "./globals.css";
import "./layout.css";
import Sidenav from "@/components/Sidenav";
import { UIProvider } from "@yamada-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UIProvider>
          <div className="layout">
            <Sidenav />
            <main className="content">{children}</main>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
