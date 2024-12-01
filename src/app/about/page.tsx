// src/app/about/page.tsx
import { Heading, Text, Container, Grid, GridItem } from "@yamada-ui/react";
import Sales from "./sales";
import LoadingSkeleton from "./laoding-skeleton";

export default function AboutPage() {
  return (
    <Container>
      <Heading size="xl">◯◯商事について 会社説明</Heading>

      <Text>◯◯商事は、◯◯市に本社を置く、◯◯業を営む企業です。</Text>
      <Text>
        本社は、◯◯駅から徒歩5分の場所にあり、◯◯の中心地に位置しています。
      </Text>
      <Text>仕事内容を紹介します。 主に3種類あり、◯◯、◯◯、◯◯です。</Text>
      <Text>具体的な業務内容は、以下で説明します。</Text>

      <Grid
        w="full"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(5, 1fr)"
        gap="md"
      >
        <GridItem
          colSpan={2}
          w="full"
          minH="4xs"
          rounded="md"
          border="1px solid"
          borderColor="gray.200"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          p="4"
        >
          <Text w="full" textAlign="left" mb="4">
            社名 : 〇〇株式会社
          </Text>
          <Text w="full" textAlign="left">
            住所 : 東京都__区〜〜〜〜〜〜〜{" "}
          </Text>
        </GridItem>

        <GridItem
          colSpan={2}
          rowSpan={4}
          w="full"
          minH="4xs"
          rounded="md"
          border="1px solid"
          borderColor="gray.200"
          p="4"
        >
          <Text fontSize="lg" isTruncated>
            突然のポケモンデータ
          </Text>
          <Sales />
        </GridItem>

        <GridItem
          // colは残りすべて
          colSpan={2}
          rowStart={2}
          rowEnd={5}
          w="full"
          minH="4xs"
          rounded="md"
          border="1px solid"
          borderColor="gray.200"
          p="4"
        >
          <Text fontSize="lg" isTruncated>
            読込中のデータは以下のようにように表示
          </Text>
          <LoadingSkeleton />
        </GridItem>
      </Grid>
    </Container>
  );
}
