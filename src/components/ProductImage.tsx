import React from 'react'
import { useContext } from "react";

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from "./ProductCard";


export interface Props { 
    img?: string;
    className?: string;
    style?: React.CSSProperties;
 }

export const ProductImage = ({ img, className, style }: Props) => {
    const { product } = useContext(ProductContext);
    const imgToShow = img ? img : product.img;
    return (
        <img className={`${styles.productImg} ${ className }`} 
             style={ style }
             src={imgToShow ? imgToShow : noImage} alt='Product Image' />
    )
    //* OR
    // let imgToShoww: string;
    // if (img) {
    //     imgToShoww = img
    // } else if (product.img) {
    //     imgToShoww = product.img
    // } else {
    //     imgToShoww = noImage
    // }
    // return (
    //     <img className={styles.productImg} src={ imgToShoww } alt='Product Image' />
    // )
}