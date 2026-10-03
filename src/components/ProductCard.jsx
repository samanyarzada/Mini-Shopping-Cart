export default function ProductCard({
  product,
  onAddToCart,
}) {
  const {
    image,
    name,
    category,
    price,
  } = product;

  return (
    <article className="product-card">
      <div className="product-image">
        {image}
      </div>

      <div className="product-content">
        <span className="product-category">
          {category}
        </span>

        <h3>{name}</h3>

        <div className="product-bottom">
          <strong>${price}</strong>

          <button
            className="add-btn"
            onClick={() => onAddToCart(product)}
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}