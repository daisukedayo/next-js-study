import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@yamada-ui/react";

export default function LoadingSkeleton() {
  return (
    <VStack>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </VStack>
  );
}
