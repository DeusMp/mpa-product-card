import React from 'react'
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/product.interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element;
    //* children?: ReactElement | ReactElement[] ;
    className?: string;
    style?: React.CSSProperties;
    eventoCambia?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, eventoCambia, value, initialValues }: Props) => {

    const {
        counter,
        increaseBy,
        maxCount,
        isMaxCountReached,
        reset
    } = useProduct({ eventoCambia, product, value, initialValues });


    return (
        <Provider value={{ counter, increaseBy, maxCount, product }}>
            <div className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount,
                    product,

                    reset,
                    increaseBy,
                })
                }
                {/* 
                <ProductImage img={product.img} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} increaseBy={increaseBy} /> 
                */}
            </div>
        </Provider>
    )
}



