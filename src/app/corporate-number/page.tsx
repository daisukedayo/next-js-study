import dotenv from "dotenv";
import { Loading } from "@yamada-ui/react";
import { Suspense } from "react";

dotenv.config();

export default async function CorporateNumberPage() {
  const apiKey = process.env.CORPORATE_NUMBER_API;
  const corporateNumber: string = "7000012050002"; // TODO 11桁を型で保証したい、

  const endpoint = `https://api.houjin-bangou.nta.go.jp/4/num?id=${apiKey}&number=${corporateNumber}&type=01&history=0`;

  const data = await fetch(endpoint);

  if (data.body === null) {
    console.log("No data");
    // TODO 画面にもデータ無いよと表示したい
    return;
  }

  const reader = data.body.getReader();
  const decoder = new TextDecoder("SJIS");
  let result = "";
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    if (value) {
      result += decoder.decode(value, { stream: !done });
    }
  }

  console.log(result);
  const lines = result.split("\n");

  return (
    <section>
      <Suspense
        fallback={<Loading variant={"circles"} color={`${"cyan"}.500`} />}
      >
        <h1>API Response</h1>
        <ul>
          {lines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </Suspense>
    </section>
  );
}
