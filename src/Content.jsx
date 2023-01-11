import { useEffect, useState } from 'react';
import axios from "axios";
import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import { Modal } from "./Modal";

export function Content() {

  const [products, setProducts] = useState([]);


  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleProductsIndex, []);

  return (
    <div>
      <ProductsNew />
      <br />
      <br />
      <br />
      <br />
      {/* <button onClick={handleProductsIndex}>Get data from API</button> */}
      <ProductsIndex products={products} />
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
