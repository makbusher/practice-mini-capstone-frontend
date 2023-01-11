export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All products</h1>

      {props['products'].map(product => (
        <div className="products" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image_url} width="300" height="300" />
        </div>
      ))}
    </div>
  );
}
