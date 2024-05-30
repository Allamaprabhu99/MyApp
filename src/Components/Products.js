import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";

const Products = () => {
  let [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((promise) => setProduct(promise.data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        borderStyle: "dotted",
        borderColor: "gold",
        margin: "5px",
        marginBottom: "450px",
      }}
    >
      <div
        style={{ borderStyle: "dotted", borderColor: "gold", margin: "5px" }}
      >
        <h2 style={{ fontWeight: "bold" }}>Products</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          borderStyle: "dotted",
          borderColor: " gold",
          margin: "5px",
        }}
      >
        {products.map((product) => (
          <ProductList product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
