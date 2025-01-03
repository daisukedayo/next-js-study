"use client";

import Sidenav from "@/components/Sidenav";
import "./globals.css";
import "./layout.css";
import { UIProvider, useDisclosure } from "@yamada-ui/react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { Tooltip } from "@yamada-ui/react";

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
            <Tooltip label="メニューを開きます">
              <BsLayoutSidebarInset onClick={onOpen} className="sidebar-icon" />
            </Tooltip>
            <Sidenav isOpen={isOpen} onClose={onClose} />
            <main className="content">{children}</main>
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
