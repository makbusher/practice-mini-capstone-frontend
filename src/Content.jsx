import { useEffect, useState } from 'react';
import axios from "axios";
import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';

export function Content() {

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
