import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  ///maxCount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  ///isMaxReached = useCallback [counter, maxCounter]
  ///TRUE is count === maxCount & FALSE  if it is not
  const isMaxReached = useCallback(
    () => !!maxCount && maxCount === counter,
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        {" "}
        -{" "}
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};
