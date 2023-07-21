import React from 'react';
import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
// import { ProductCardHandlers } from "../interfaces/product.interfaces";


export interface Props {
    className?: string;
    style?: React.CSSProperties;
    // args: ProductCardHandlers;
}

export const ProductButtons = ({ className, style }: Props) => {

    // const ctx = useContext(ProductContext);
    const { counter, increaseBy, maxCount } = useContext(ProductContext);
    
    const isMaxCountReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    return (
        <div className={`${styles.buttonsContainer} ${className}`}
            style={style}>
            <button
                onClick={() => increaseBy(-1)}
                className={styles.buttonMinus}> - </button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                onClick={() => increaseBy(1)}
                className={`${ styles.buttonAdd } ${isMaxCountReached() && styles.disabled }`}
                disabled={isMaxCountReached()}
            > + </button>
        </div>
    )
}
