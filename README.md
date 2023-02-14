# Infomarcy-Product-Card

Este es un paquete de pruebas de despiegue en NPM

### Marci Garcia

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'infomarcy-product-card';
```

```
 <ProductCard
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```