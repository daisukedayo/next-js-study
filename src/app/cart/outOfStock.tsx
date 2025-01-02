import React from "react";
import { Card } from "@yamada-ui/react";

interface OutOfStockProps {
  name: string;
}

const OutOfStock: React.FC<OutOfStockProps> = ({ name }) => {
  return (
    <Card style={{ margin: "10px 0", padding: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="https://www.itoen.jp/oiocha/products/img/product-list_01.png"
            alt="商品画像"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <h3 style={{ margin: 0 }}>{name}</h3>
        </div>
        <div style={{ width: "150px", textAlign: "center" }}>
          <p style={{ margin: 0 }}>在庫切れ</p>
        </div>
      </div>
    </Card>
  );
};

export default OutOfStock;
