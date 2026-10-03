import CartItem from "./CartItem";

export default function Cart({
  cart,
  totalItems,
  subtotal,
  tax,
  total,
  onIncrease,
  onDecrease,
  onRemove,
  onClearCart,
}) {
  return (
    <div className="cart-card">
      <div className="card-header">
        <div>
          <h2>Your Cart</h2>
          <p>Items you want to buy</p>
        </div>

        <span className="badge">
          {totalItems} {totalItems === 1 ? "Item" : "Items"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <span>🛒</span>
          <strong>Your cart is empty</strong>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}
          </div>

          <button
            className="clear-btn"
            onClick={onClearCart}
          >
            Clear Cart
          </button>

          <div className="cart-summary">
            <div>
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <div>
              <span>Tax (10%)</span>
              <strong>${tax.toFixed(2)}</strong>
            </div>

            <div className="total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>

          <button className="checkout-btn">
            Checkout →
          </button>
        </>
      )}
    </div>
  );
}