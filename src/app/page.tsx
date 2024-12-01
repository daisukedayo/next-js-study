import {
  Box,
  VStack,
  Heading,
  FormControl,
  Input,
  Textarea,
  Button,
} from "@yamada-ui/react";

export default function ContactPage() {
  return (
    <Box maxWidth="500px" margin="auto" padding="6">
      <VStack gap="6">
        <Heading>お問い合わせ</Heading>
        <FormControl>
          <Input placeholder="山田 太郎" />
        </FormControl>
        <FormControl>
          <Input type="email" placeholder="yamada@example.com" />
        </FormControl>
        <FormControl>
          <Textarea placeholder="お問い合わせ内容をご記入ください" />
        </FormControl>{" "}
        <Button colorScheme="primary">送信</Button>
      </VStack>
    </Box>
  );
}
