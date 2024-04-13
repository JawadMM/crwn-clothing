import { useContext } from "react";
import { productsContext } from "../../context/products";
import "./shop.scss";

import ProductCard from "../../components/product-card/ProductCard";

const Shop = () => {
  const { products } = useContext(productsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
