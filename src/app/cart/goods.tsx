import React, { useState } from "react";
import { Card } from "@yamada-ui/react";

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <Card style={{ margin: "10px 0" }}>
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
          <p style={{ margin: 0 }}>¥{price}</p>
        </div>
        <div>
          <select
            value={quantity}
            onChange={handleChange}
            style={{ width: "50px" }}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}個
              </option>
            ))}
          </select>
          <button onClick={handleAddToCart}>カートに入れる</button>
        </div>
      </div>
    </Card>
  );
};

export default Goods;
