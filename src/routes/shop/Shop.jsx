import { useContext } from "react";
import { productsContext } from "../../context/products";

const Shop = () => {
  const { products } = useContext(productsContext);

  return (
    <div className="shop-data">
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
