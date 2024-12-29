import dotenv from "dotenv";
import { Loading } from "@yamada-ui/react";
import { Suspense } from "react";

dotenv.config();

export default async function CorporateNumberPage() {
  return (
    <section>
      <Suspense
        fallback={<Loading variant={"circles"} color={`${"cyan"}.500`} />}
      >
        <ApiResponce />
      </Suspense>
    </section>
  );
}

async function ApiResponce() {
  const apiKey = process.env.CORPORATE_NUMBER_API;
  const corporateNumber: string = "7000012050002"; // TODO 11桁を型で保証したい、

  const endpoint = `https://api.houjin-bangou.nta.go.jp/4/num?id=${apiKey}&number=${corporateNumber}&type=01&history=0`;

  const data = await fetch(endpoint);

  if (data.body === null) {
    return <>APIのレスポンスが適切ではありません（body部が空）</>;
  }

  const reader = data.body.getReader();
  const decoder = new TextDecoder("SJIS");
  let result = "";
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;

    if (value !== undefined) {
      result += decoder.decode(value, { stream: !done });
    }
  }
  const lines = result.split("\r\n");
  lines.pop(); // 最後の要素が空になるので削除

  if (!lines.length) {
    return <>そんな法人番号ない</>;
  }

  // データがあった場合
  return (
    <>
      <h1>API Response</h1>
      <ul>
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </>
  );
}
