import React, { useState } from "react";

interface GoodsProps {
  name: string;
  price: number;
  addToCart: (name: string, quantity: number) => void;
}

const Goods: React.FC<GoodsProps> = ({ name, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(name, quantity);
  };

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
        <p style={{ margin: 0 }}>¥{price}</p>
      </div>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ width: "50px" }}
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        <button onClick={handleAddToCart}>カートに入れる</button>
      </div>
    </div>
  );
};

export default Goods;
