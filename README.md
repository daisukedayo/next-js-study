# NextJS 触るためのリポジトリ

NextJS を触りつつ、UI ライブラリ「YamadaUI」を触る用のリポジトリ

## 事前準備

- `npm i`で必要なパッケージをインストールする。

## 実行する

- Docker Desktop を起動の上、Docker を起動する`docker-compose up -d`。
  ※Docker Desktop が起動していないと、`Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?`と怒られてる。
- 起動後、`npm run dev`を実施。

## その他

- Copilot に考慮してほしい内容は`.github/copilot-instrucitons.md`に記載しておく
- .env 内の`CORPORATE_NUMBER_API`は[法人番号システム Web-API](https://www.houjin-bangou.nta.go.jp/webapi/index.html#web-api01)の API キーを記載する。
  　※「このサービスは、国税庁法人番号システムの Web-API 機能を利用して取得した情報をもとに作成しているが、サービスの内容は国税庁によって保証されたものではない」
