# ベースイメージ
FROM node:18

# 作業ディレクトリを設定
WORKDIR /app

# 必要なポートを開放
EXPOSE 3000

# コンテナ起動時のデフォルトコマンド
CMD ["npm", "run", "dev"]
