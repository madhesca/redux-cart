import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { getTotals, clearCart } from "../redux/actions";

const CartContainer = ({ cart, getTotals, total, clearCart }) => {
  console.log("total", total);
  useEffect(() => {
    getTotals();
  });

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => clearCart()}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = state => ({
  cart: state.state.cart,
  total: state.state.total
});

const mapDispatchToProps = dispatch => ({
  getTotals: () => dispatch(getTotals()),
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
