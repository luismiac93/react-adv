import { createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  InitialValues,
  OnChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import { ProductCardHandlers } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
