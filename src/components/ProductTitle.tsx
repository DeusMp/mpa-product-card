import React from 'react'
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export interface Props {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}


export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext);
    const titleToShoww = title ? title : product.title

    return (
        <span className={`${styles.productDescription} ${className}`}
              style={ style }
        >{titleToShoww}</span>
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;