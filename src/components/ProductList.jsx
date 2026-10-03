import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  onAddToCart,
}) {
  return (
    <section className="products-section">
      <div className="section-header">
        <div>
          <h2>Products</h2>
          <p>Choose the products you want to buy.</p>
        </div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}