export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <strong>{item.name}</strong>
        <span>${item.price} each</span>
      </div>

      <div className="quantity">
        <button
          onClick={() => onDecrease(item.id)}
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => onIncrease(item.id)}
        >
          +
        </button>
      </div>

      <strong className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </strong>

      <button
        className="remove-btn"
        onClick={() => onRemove(item.id)}
      >
        ×
      </button>
    </div>
  );
}