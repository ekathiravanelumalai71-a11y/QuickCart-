import ProductList from './ProductList.jsx';
import { useCart } from '../context/CartContext.jsx';

function HomePage({ products, searchTerm }) {
  const { addToCart, isLoading } = useCart();

  // Filter products as the user types in the search box.
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <p className="page-message">Loading products...</p>;
  }

  return (
    <section className="home-page" aria-labelledby="home-page-heading">
      <h2 id="home-page-heading" className="sr-only">
        Product catalog
      </h2>

      {searchTerm && (
        <p className="page-message">Found {filteredProducts.length} matching products.</p>
      )}

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      ) : (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try a different keyword like "watch" or "lamp".</p>
        </div>
      )}
    </section>
  );
}

export default HomePage;
