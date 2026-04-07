import ProductCard from './ProductCard';
import '../styles/ProductList.css';

function ProductList({ products, addToCart }) {
  return (
    <section className="product-list" aria-labelledby="products-heading">
      <div className="section-heading">
        <p className="section-kicker">Featured collection</p>
        <h2 id="products-heading" className="section-title">Our Products</h2>
        <p className="section-copy">Eight hand-picked items arranged in a responsive grid for the first QuickCart build.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;