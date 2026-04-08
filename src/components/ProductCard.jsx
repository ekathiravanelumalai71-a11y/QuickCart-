import '../styles/ProductCard.css';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
      </div>
    </article>
  );
}

export default ProductCard;