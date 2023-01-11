export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Price: <input type="text" />
        </div>
        <div>
          Description: <input type="text" />
        </div>
        <div>
          Inventory: <input type="text" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
