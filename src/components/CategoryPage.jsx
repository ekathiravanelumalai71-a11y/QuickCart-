import { Link, useParams } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import { useCart } from '../context/CartContext.jsx';

function CategoryPage({ products }) {
  const { category } = useParams();
  const { addToCart } = useCart();

  // Match products to the category in the URL.
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <section className="category-page" aria-labelledby="category-title">
      <h2 id="category-title" className="page-title">
        {category} Products
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <h3>No products in this category</h3>
          <p>Try another category from the menu.</p>
          <Link to="/" className="back-home-link">
            Back to all products
          </Link>
        </div>
      ) : (
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      )}
    </section>
  );
}

export default CategoryPage;
