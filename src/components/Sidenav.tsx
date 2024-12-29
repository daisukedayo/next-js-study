import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  VStack,
} from "@yamada-ui/react";
import { Separator } from "@yamada-ui/react";
import Link from "next/link";

interface SidenavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidenav({ isOpen, onClose }: SidenavProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement={"left"} size={"xs"}>
      <DrawerOverlay bg="blackAlpha.300" />
      <DrawerCloseButton />
      <DrawerHeader>メニュー</DrawerHeader>
      <DrawerBody>
        <VStack separator={<Separator />}>
          <Link href="home">Home</Link>
          <Link href="about">About</Link>
          <Link href="corporate-number">法人番号検索</Link>
          <Link href="contact">Contact</Link>
        </VStack>
      </DrawerBody>
    </Drawer>
  );
}
