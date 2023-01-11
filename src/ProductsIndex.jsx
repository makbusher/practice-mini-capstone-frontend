export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All products</h1>

      {props['products'].map(product => (
        <div className="products" key={product.id}>
          <h2>{product.name}</h2>
          <p>description: {product.description}</p>
          <p>price: {product.price}</p>
          {product['images'].map(image => (
            <div>
              <img src={image.url} />
            </div>
          ))}
          <button>More Info</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
