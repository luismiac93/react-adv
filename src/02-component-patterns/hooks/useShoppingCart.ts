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
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCard;
        return { ...rest };
      }

      return {
        ...oldShoppingCard,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
