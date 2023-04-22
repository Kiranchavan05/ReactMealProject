import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{[
    { id: "c1", name: "maggie", amount: 2, price: 25.99 }].map(
    (item) => <li>{item.name}</li>
  )};
  </ul>

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>30.20</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
