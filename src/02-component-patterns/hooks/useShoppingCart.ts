import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log("onProductCountChange");
    setShoppingCart((oldShoppingCard) => {
      const productInCart: ProductInCart = oldShoppingCard[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldShoppingCard,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCard;
      return { ...rest };

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCard;
      //   return { ...rest };
      // }

      // return {
      //   ...oldShoppingCard,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
