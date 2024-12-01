"use client";

import Sidenav from "@/components/Sidenav";
import "./globals.css";
import "./layout.css";
import { UIProvider, Button, useDisclosure } from "@yamada-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <html lang="en">
      <body>
        <UIProvider>
          <div className="layout">
            <Button onClick={onOpen}>Open Sidenav</Button>
            <Sidenav isOpen={isOpen} onClose={onClose} />
            <main className="content">{children}</main>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
