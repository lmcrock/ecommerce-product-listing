import './ProductItem.css';


function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />

      <h2>{product.name}</h2>
      <p><strong>Price:</strong> {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;
