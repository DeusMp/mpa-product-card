import { ProductCard as ProductCardHOComponent } from './ProductCard';
//* HOC Higher Order Component

import { ProductImage, ProductButtons, ProductTitle } from '.';
import { ProductCardHOCProps } from '../interfaces/product.interfaces';



export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOComponent, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard;