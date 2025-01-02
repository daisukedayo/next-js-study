import React from "react";

interface OutOfStockProps {
  name: string;
}

const OutOfStock: React.FC<OutOfStockProps> = ({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      <div>
        <img
          src="dummy-image-url"
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
  );
};

export default OutOfStock;
