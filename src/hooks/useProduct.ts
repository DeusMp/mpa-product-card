import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from '../interfaces/product.interfaces';


interface useProductArgs {
  product: Product;
  eventoCambia?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}


//* useProduct necesita onChange & product
export const useProduct = ({ eventoCambia, product, value = 0, initialValues }: useProductArgs) => {

  //* Si viene valor en initialValues, si no, value
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);
  const maxCount = initialValues?.maxCount;

  const increaseBy = (value: number) => {
    const valor = counter + value;
    let newValue = Math.max(0, valor);

    if (initialValues?.maxCount) {
      newValue = Math.min(initialValues?.maxCount, newValue);
    }

    setCounter(newValue);
    eventoCambia && eventoCambia({ count: valor, product, mensaje: product.title });
  }

  const reset = () => {
    setCounter( initialValues?.count || value )
  }

  
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value])

  useEffect(() => {
    isMounted.current = false;
  }, [])


  return {
    counter,
    maxCount,
    isMaxCountReached: !!maxCount && counter === maxCount,
    
    increaseBy,
    reset
  }
}
