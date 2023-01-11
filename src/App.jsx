import { useEffect, useState } from 'react';
import axios from "axios";

function Header() {
  return (
    <header>
      <a href="#">Home</a> 
    </header>
  );
}

function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form>
        <div>
          Name: <input type="text"/>
        </div>
        <div>
          Price: <input type="text"/>
        </div>
        <div>
          Description: <input type="text"/>
        </div>
        <div>
          Inventory: <input type="text"/>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All products</h1>

      {props['products'].map(product => (
        <div className="products" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image_url} width="300" height="300"/>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  );
}

function Content() {

  const [products, setProducts] = useState([]);


  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductsNew />
      <br />
      <br />
      <br />
      <br />
      <button onClick={handleIndexProducts}>Get data</button>
      <ProductsIndex products={products} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
