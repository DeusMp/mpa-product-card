import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonsProps } from '../components/ProductButtons';



export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    // isMaxCountReached: boolean;
    
    increaseBy: (value: number) => void;
    // reset: () => void;
}

export interface ProductCardHOCProps {
    //* Objeto
    (Props: ProductCardProps): JSX.Element;
    //^ desestructurado 
    // ({ children, product, className }: ProductCardProps): JSX.Element;

    //* Propiedades que apuntan a los diferentes componentes
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
    //^ desestructurado 
    // Buttons: ({ className }: { className?: string }) => JSX.Element;
}

export interface onChangeArgs {
    count: number;
    product: Product;
    mensaje: string;
}

export interface ProductInCart extends Product {
    count: number;
    // mensaje: string;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void; 
    reset: () => void;
}