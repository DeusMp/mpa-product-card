# DO-Product-Card

> Este es un paquete de pruebas de despliegue en NPM

### Amadeus Mp

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mpa-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 5,
    // maxCount: 9
  }}
>
  {
    ( {reset, count, maxCount, increaseBy, isMaxCountReached }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```
