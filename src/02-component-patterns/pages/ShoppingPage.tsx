import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark text-white"
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Cleaned</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {(!isMaxCountReached && 
              <button onClick={() => increaseBy(+2)}>+2</button>)
            }

            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
