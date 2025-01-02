"use client";

import React, { useState } from "react";
import Goods from "./goods";
import OutOfStock from "./outOfStock";

interface Goods {
  price: number;
  name: string;
  isSale: boolean; // 販売中？
}

const CartPage = () => {
  const [targetCount, setTargetCount] = useState(0);
  // TODO set の関数つかってないよね。
  const [goodsList, setGoodsList] = useState<Goods[]>([
    { price: 1000, name: "Item 1", isSale: true },
    { price: 2000, name: "Item 2", isSale: false },
    { price: 3000, name: "Item 3", isSale: true },
    { price: 4000, name: "Item 4", isSale: true },
    { price: 5000, name: "Item 5", isSale: false },
    { price: 6000, name: "Item 6", isSale: true },
    { price: 7000, name: "Item 7", isSale: true },
    { price: 8000, name: "Item 8", isSale: false },
    { price: 9000, name: "Item 9", isSale: true },
    { price: 10000, name: "Item 10", isSale: true },
  ]);
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (name: string, quantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [name]: (prevCart[name] || 0) + quantity,
    }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const totalPrice = Object.entries(cart).reduce((total, [name, quantity]) => {
    const item = goodsList.find((goods) => goods.name === name);
    return total + (item ? item.price * quantity : 0);
  }, 0);

  return (
    <div>
      <h1>買物ページ</h1>

      <h2>Goods for Sale</h2>
      <button onClick={handleOpenModal}>View Cart</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Cart Details</h2>
            <ul>
              {Object.entries(cart).map(([name, quantity]) => (
                <li key={name}>
                  商品名: {name} , 個数: {quantity}
                </li>
              ))}
            </ul>
            <p>Total Price: ¥{totalPrice}</p>
            <button onClick={() => alert("Go to checkout page")}>
              Go to Checkout Page
            </button>
          </div>
        </div>
      )}
      {goodsList.map((goods) =>
        goods.isSale ? (
          <Goods
            key={goods.name}
            name={goods.name}
            price={goods.price}
            addToCart={handleAddToCart}
          />
        ) : (
          <OutOfStock key={goods.name} name={goods.name} />
        )
      )}
    </div>
  );
};

export default CartPage;
