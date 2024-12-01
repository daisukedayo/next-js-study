import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  VStack,
} from "@yamada-ui/react";
import { Separator } from "@yamada-ui/react";

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
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="services">Services</a>
          <a href="contact">Contact</a>
        </VStack>
      </DrawerBody>
    </Drawer>
  );
}
