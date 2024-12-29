import { useMemo } from "react";
import { BarChart, BarProps } from "@yamada-ui/charts";

export default function Sales() {
  const data = useMemo(
    () => [
      {
        name: "エンテイ",
        HP: 115,
        こうげき: 115,
        ぼうぎょ: 85,
        とくこう: 90,
        とくぼう: 75,
        すばやさ: 100,
      },
    ],
    []
  );

  const series: BarProps[] = useMemo(
    () => [
      { dataKey: "HP", color: "green.500" },
      { dataKey: "こうげき", color: "red.500" },
      { dataKey: "ぼうぎょ", color: "blue.500" },
      { dataKey: "とくこう", color: "purple.500" },
      { dataKey: "とくぼう", color: "orange.500" },
      { dataKey: "すばやさ", color: "cyan.500" },
    ],
    []
  );
  return <BarChart data={data} series={series} dataKey="name" />;
}
