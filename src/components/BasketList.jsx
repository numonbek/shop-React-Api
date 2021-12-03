import { BasketItem } from "./BasketItem";
import { useContext } from "react";
import { ShopContext } from "../context";

function BasketList(props) {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item  active">корзина </li>
      <div className="basket-group">
        {order.length ? (
          order.map((item) => <BasketItem key={item.id} {...item} />)
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}
      </div>
      <li className="collection-item active">
        Общая стоимост: {totalPrice} руб.
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>

      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
