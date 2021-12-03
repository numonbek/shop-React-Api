import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
  const { loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  // const [order, setOrder] = useState([]);
  // const [isBasketShow, setBasketShow] = useState(false);
  // const [alertName, setAlertName] = useState("");

  console.log(order);
  // const addToBasket = (item) => {
  //   const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
  //   if (itemIndex < 0) {
  //     const newItem = {
  //       ...item,
  //       quantity: 1,
  //     };
  //     setOrder([...order, newItem]);
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     setOrder(newOrder);
  //   }
  //   setAlertName(item.name);
  // };
  // const incrementOrder = (item) => {
  //   const incrementIndex = order.findIndex(
  //     (orderItem) => orderItem.id === item.id
  //   );
  //   if (incrementIndex < 0) {
  //     console.log("41", incrementIndex);
  //     removeFromBasket();
  //   } else {
  //     const incOrder = order.map((orderItem, index) => {
  //       if (index === incrementIndex) {
  //         console.log("48", index);
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     console.log("53", incOrder);
  //     setOrder(incOrder);
  //   }
  // };
  // const decrementOrder = (item) => {
  //   const decrementIndex = order.findIndex(
  //     (orderItem) => orderItem.id === item.id
  //   );
  //   if (item.quantity <= 1) {
  //     console.log("41", decrementIndex);
  //     removeFromBasket(item.id);
  //   } else {
  //     const decOrder = order.map((orderItem, index) => {
  //       if (index === decrementIndex) {
  //         console.log("48", index);
  //         return {
  //           ...orderItem,

  //           quantity: orderItem.quantity - 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     console.log("53", decOrder);
  //     setOrder(decOrder);
  //   }
  // };

  // const incQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };
  // const decQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity >= 0 ? newQuantity : 0,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  // const removeFromBasket = (itemId) => {
  //   const newOrder = order.filter((el) => el.id !== itemId);
  //   setOrder(newOrder);
  // };

  // const handleBasketShow = () => {
  //   setBasketShow(!isBasketShow);
  // };

  // const closeAlert = () => {
  //   setAlertName("");
  // };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && (
        <BasketList
        // order={order}
        // handleBasketShow={handleBasketShow}
        // removeFromBasket={removeFromBasket}
        // incQuantity={incQuantity}
        // decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
